<template>
<section>
  <h1>Edit Profile details</h1>
  <b-container class="mt-4" style="box-shadow: 5px 5px 5px 5px gray; max-width: 800px">
    
    <b-form inline>
      <b-row>
        <b-col>
          <b-form-input id="input-1" class="mt-3 mr-sm-2 mb-sm-0" placeholder="UserName" type="text" required
            v-model="user.name"></b-form-input>
          <b-form-invalid-feedback id="input-1-live-feedback" style="font-weight: bold">This field is required and
            atleast has 3 characters.
          </b-form-invalid-feedback>
        </b-col>
        <b-col>
          <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
            <b-form-input id="input-2" type="number" placeholder="Contact No" required v-model="user.contact_number"></b-form-input>
            <b-form-invalid-feedback id="input-2-live-feedback" style="font-weight: bold">Please enter valid contact
              number.
            </b-form-invalid-feedback>
          </b-input-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
            Profile Pic: (*Optional)
            <input type="file" class="custom-file-upload" v-on:change="addPic($event)"/>
            </b-input-group>
        </b-col>
        <b-col class="mt-5">
          Gender:
          <label class="radio-inline" style="margin: 2px">
            <input type="radio" name="gender" value="male" :checked="user.gender" />
            Male
          </label>
          <label class="radio-inline" style="margin: 2px">
            <input type="radio" name="gender" value="female" :checked="!user.gender" />
            Female
          </label>
          </b-col>
      </b-row>

      <b-row>
        <b-col class="mt-3 mb-4">
          <b-button variant="outline-primary" style="width: inherit" type="button" @click="editUserProfile">
            Update
          </b-button>
        </b-col>
        <b-col class="mt-3 mb-4">
          <b-button variant="outline-warning" style="width: inherit" @click="resetForm">
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
     <br />
     <edit-user-education :userEdu="user.education" v-if="user.education !== null"/>
     <br />
     <edit-user-experience :userExp="user.experience" v-if="user.experience !== null" />
  </section>
</template>

<script>
//import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { mapActions,mapState } from 'vuex';
import editUserEducation from './editUserEducation.vue';
import editUserExperience from './editUserExperience.vue';
export default {
  data() {
    return {
      user: {
        name: "",
        contact_number: null,
        avatar: null,
        gender: "",
        education:null,
        experience:null,
      },
    };
  },
  components:{ editUserEducation,editUserExperience },
/*  validations: {
    user: {
      name: {
        required,
        minLength: minLength(3),
      },
      contact: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      gender: {
        required,
      },
    },
  },*/
  mounted() { 
      this.fetchProfile({id: this.$route.params.id});
      this.user = this.profile;
      this.user.education = this.education;
      this.user.experience = this.experience
      console.log(this.user)
      console.log("Edu:",this.user.education)
      console.log("Exp:",this.user.experience)
   },
  computed:{
    ...mapState("userData",["profile","education","experience"])
  },
  methods: {
    ...mapActions("userData", ["addProfile","fetchProfile"]),
   /* validateState(name) {
      const { $dirty, $error } = this.$v.user[name];
      return $dirty ? !$error : null;
    },*/
    addPic(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (files[0] == null) {
        return;
      }
      const ext = files[0].name.split(".").pop();
      if (ext === "jpg" || ext === "png" || ext === "JPG" || ext === "PNG") {
        this.user.avatar = files[0];
      } else {
        this.$toast.error("Profile pic should be jpg or png.", {
          timeout: 3000,
        });
      }
    },
    resetForm() {
      this.user = {
        name: "",
        contact_number: null,
        gender: ""
      };
      this.$nextTick(() => {
        this.$toast("Reset done.", { timeout: 3000 });
        this.$v.$reset();
      });
    },
    editUserProfile() {
     // this.$v.user.$touch();
     // if (this.$v.user.$anyError) {
     //   this.$toast.error("Please enter profile details properly.", {
     //     timeout: 3000,
     //   });
     //   return;
     // }
      console.log(this.user);
      let data = {
            ...this.user,
            id: this.$route.params.id
        }
      if (this.user.avatar != null) {
        data.avatar = this.user.avatar;
      }
      this.addProfile(data)
        .then((success) => {
          console.log(success);
          this.resetForm();
          this.$toast.success("Profile edited.", { timeout: 3000 });
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          this.$toast.error(error.message, { timeout: 3000 });
        });

    },
  },
};
</script>

<style scoped>
.custom-file-upload {
  display: block;
  width: inherit;
  background: #fbfdff;
  font-size: 16px;
  border: 2px solid #dde6ef;
  border-radius: 4px;
  height: 50px;
  margin-bottom: 20px;
}
</style>
