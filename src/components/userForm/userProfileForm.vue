<template>
  <b-container class="mt-4" style="box-shadow: 5px 5px 5px 5px gray; max-width: 800px;">
    <h1>Enter Profile details</h1>
    <b-form inline>
      <b-row>
        <b-col>
          <b-form-input
            id="input-1"
            class="mt-3 mr-sm-2 mb-sm-0"
            placeholder="UserName"
            type="text"
            required
            v-model="$v.user.name.$model"
            :state="validateState('name')"
          ></b-form-input>
          <b-form-invalid-feedback
            id="input-1-live-feedback"
            style="font-weight: bold"
            >This field is required and atleast has 3 characters.
          </b-form-invalid-feedback>
        </b-col>
        <b-col>
          <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
            <b-form-input
              id="input-2"
              type="number"
              placeholder="Contact No"
              required
              v-model="$v.user.contact.$model"
              :state="validateState('contact')"
            ></b-form-input>
            <b-form-invalid-feedback
              id="input-2-live-feedback"
              style="font-weight: bold"
              >Please enter valid contact number.
            </b-form-invalid-feedback>
          </b-input-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
            Profile Pic: (*Optional)
            <input type="file" class="custom-file-upload" v-on:change="addPic($event)"
            />
            <b-form-invalid-feedback
              id="input-3-live-feedback"
              style="font-weight: bold"
              >This field is required.
            </b-form-invalid-feedback>
          </b-input-group>
        </b-col>
        <b-col class="mt-5">
          Gender:
          <label class="radio-inline" style="margin: 2px">
            <input
              type="radio"
              name="gender"
              value="male"
              v-model="$v.user.gender.$model"
            />
            Male
          </label>
          <label class="radio-inline" style="margin: 2px">
            <input
              type="radio"
              name="gender"
              value="female"
              v-model="$v.user.gender.$model"
            />
            Female
          </label>
          <b-form-invalid-feedback
            id="input-4-live-feedback"
            style="font-weight: bold"
            >Please select your gender.
          </b-form-invalid-feedback>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="mt-3 mb-4">
          <b-button
            variant="primary"
            style="width: inherit"
            type="button"
            @click="addUserProfile"
            :disabled="$v.$invalid"
          >
            Submit
          </b-button>
        </b-col>
        <b-col class="mt-3 mb-4">
          <b-button variant="warning" style="width: inherit" @click="resetForm">
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-container>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      user: {
        name: "",
        contact: null,
        profilePic: "",
        gender: "",
      },
    };
  },
  validations: {
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
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.user[name];
      return $dirty ? !$error : null;
    },
    addPic(e) {
    var files = e.target.files || e.dataTransfer.files;
        const ext = files[0].name.split('.').pop();
         if(ext === 'jpg' || ext === 'png' || ext === 'JPG' || ext === 'PNG'){
         this.user.profilePic = files[0].name;  
         }else {
          this.$toast.error("Profile pic should be jpg or png.",{ timeout : 3000 }); 
         }
       },
    resetForm() {
      this.user = {
        name: "",
        contact: null,
        gender: "",
        profilePic:""
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    addUserProfile() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        this.$toast.error("Please enter profile details properly.",{ timeout : 3000 }); 
        return;
      }
      console.log(this.user);
      this.$toast.success("User profile details added.",{ timeout : 3000 });
      this.$router.push("/");

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
