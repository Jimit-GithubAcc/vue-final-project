<template>
  <b-container
    class="mt-4"
    style="box-shadow: 5px 5px 5px 5px gray; background-color: lightgray;max-width: 800px;"
  >
    <h1>Edit education details</h1>
    <b-form inline>
      <b-row>
        <b-col>
          <b-form-input
            id="input-1"
            class="mt-3 mr-sm-2 mb-sm-0"
            placeholder="School Name"
            required
            v-model="userEdu.school_name"
            ></b-form-input>
          </b-col>
        <b-col>
          <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
            <b-form-input
              id="input-2"
              placeholder="Graduation details"
              required
              v-model="userEdu.degree"
            ></b-form-input>
            </b-input-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-input
            id="input-3"
            class="mt-3 mr-sm-2 mb-sm-0"
            placeholder="Field of Study"
            required
            v-model="userEdu.field_of_study"
            ></b-form-input>
          </b-col>
        <b-col>
          <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
            <b-form-input
              id="input-4"
              placeholder="Grade details(in words)"
              required
              v-model="userEdu.grade"
              ></b-form-input>
            </b-input-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="mt-3">
          <label for="inline-form-input-name">Start date: </label>
        </b-col>
        <b-col class="mt-3">
          <label for="inline-form-input-username"> End date: </label>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-input
            id="input-5"
            class="mr-sm-2 mb-sm-0"
            v-model="userEdu.start_date"
            type="date"
          ></b-form-input>
          <b-form-invalid-feedback
            id="input-5-live-feedback"
            style="font-weight: bold"
            >Start date is required.
          </b-form-invalid-feedback>
        </b-col>

        <b-col>
          <b-input-group class="mr-sm-2 mb-sm-0">
            <b-form-input
              id="input-6"
              v-model="userEdu.end_date"
              :min="minDate"
              placeholder="End date"
              type="date"
            ></b-form-input>
            <b-form-invalid-feedback
              id="input-6-live-feedback"
              style="font-weight: bold"
              >End date is required.
            </b-form-invalid-feedback>
          </b-input-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-textarea
            id="textarea"
            class="mt-3 mr-sm-2 mb-sm-0"
            placeholder="Enter description..."
            rows="3"
            max-rows="6"
            required
            v-model="userEdu.description"
            ></b-form-textarea>
          <b-form-invalid-feedback
            id="input-7-live-feedback"
            style="font-weight: bold"
            >This field is required.
          </b-form-invalid-feedback>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="mt-3 mb-4">
          <b-button
            variant="outline-primary"
            style="width: inherit"
            type="button"
            @click="editUserEducation"
          >
            Update
          </b-button>
         </b-col>
        </b-row>
    </b-form>
  </b-container>
</template>
<script>
//import { required, minLength } from "vuelidate/lib/validators";
import { mapActions } from 'vuex';
export default {
/*  data() {
    return { };
  },*/
  computed: {
       minDate(){
          
          let d = new Date(this.userEdu.start_date);
            let p1 = d.getFullYear()
            let p2 = d.getMonth()
            let p3 = d.getDate() 
            if(p2<10){ p2 = "0" + p2; }
            if(p3<10){ p3 = "0" + p3; }  

          var min = (p1 + 2) + "-" + p2 + "-" + p3
           console.log(min)
          return min;
       }
  },
  props:["userEdu"],
  methods: {
    ...mapActions("userData",["editUserEducationData"]),
   /* validateState(name) {
      const { $dirty, $error } = this.$v.user[name];
      return $dirty ? !$error : null;
    },*/
  editUserEducation() {
      let endDate = new Date(this.userEdu.end_date)
      let startDate = new Date(this.userEdu.start_date)
      let data = {
        user: {
          education:{
            school_name: this.userEdu.school_name,
            degree: this.userEdu.degree,
            field_of_study: this.userEdu.field_of_study,
            start_date: startDate,
            end_date: endDate,
            description: this.userEdu.description,
            grade: this.userEdu.grade,
            },
            id:this.userEdu.id,
        }
      }
      this.editUserEducationData(data.user).then(success => {
        console.log(success);
        this.$toast.success("Edited education details successfully.",{ timeout : 3000 });
        this.$router.push("/");
      }).catch(error => {
        console.log(error);
        this.$toast.error("Some Error Occured",{ timeout : 3000 });
      })
    },
  },
};
</script>
<style>
</style>