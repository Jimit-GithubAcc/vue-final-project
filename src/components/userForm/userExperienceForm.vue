<template>
<b-container
     class="mt-4"
     style="box-shadow: 5px 5px 5px 5px gray;max-width: 800px;" 
    >
     <h1>Enter your experience details</h1>
 <b-form inline>
 
  <b-row>
    <b-col>
     <b-form-input
      id="input-1"
      class="mt-3 mr-sm-2 mb-sm-0"
      placeholder="Job Title"
      required
      v-model="$v.user.jobName.$model"
      :state="validateState('jobName')"
    ></b-form-input>
    <b-form-invalid-feedback
            id="input-1-live-feedback"
            style="font-weight: bold"
            >This field is required.
          </b-form-invalid-feedback>
  </b-col>
  <b-col>
    <!-- <b-input-group  class="mt-3 mr-sm-2 mb-sm-0 w-100">
      <b-dropdown variant="light" text="Employment type">
         <b-dropdown-item> Full time </b-dropdown-item>
          <b-dropdown-item> Part time </b-dropdown-item>
          <b-dropdown-item> Internship </b-dropdown-item>
      </b-dropdown>
    </b-input-group> -->
    <b-form-select v-model="user.selectedempType" :state="validateState('selectedempType')" class="mt-3 mr-sm-2 mb-sm- form-control" :options="options">
    </b-form-select>
    <b-form-invalid-feedback
            id="input-1-live-feedback"
            style="font-weight: bold"
            >This field is required.
          </b-form-invalid-feedback>
   </b-col>
 </b-row>

<b-row>
    <b-col>
     <b-form-input
      id="input-2"
      class="mt-3 mr-sm-2 mb-sm-0"
      placeholder="Name of Company"
      required
      v-model="$v.user.companyName.$model"
      :state="validateState('companyName')"
    ></b-form-input>
    <b-form-invalid-feedback
            id="input-2-live-feedback"
            style="font-weight: bold"
            >This field is required.
          </b-form-invalid-feedback>
  </b-col>
  <b-col>
    <b-input-group  class="mt-3 mr-sm-2 mb-sm-0">
      <b-form-input id="inline-form-input-3" placeholder="Location(in words)" required
            v-model="$v.user.location.$model"
            :state="validateState('location')"></b-form-input>
            <b-form-invalid-feedback
            id="input-3-live-feedback"
            style="font-weight: bold"
            >This field is required.
          </b-form-invalid-feedback>
    </b-input-group>
   </b-col>
 </b-row>

 <b-row >
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
      id="inline-form-input-name"
      class="mr-sm-2 mb-sm-0"
      type="date"
      v-model="user.start_date"
    ></b-form-input>
  </b-col>
  
  <b-col>
    <b-input-group  class="mr-sm-2 mb-sm-0">
     <b-form-input id="inline-form-input-username" v-model="user.end_date" placeholder="End date" type="date" :min="minDate"></b-form-input>
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
            v-model="$v.user.description.$model"
            :state="validateState('description')"
    ></b-form-textarea>
    <b-form-invalid-feedback
            id="input-4-live-feedback"
            style="font-weight: bold"
            >This field is required.
          </b-form-invalid-feedback>
  </b-col>
 </b-row>

  <b-row>
    <b-col class="mt-4 mb-4">
     <b-button variant="primary" style="width: inherit" type="button" @click="addUserExperience"> Submit </b-button>
    </b-col>
    <b-col class="mt-4 mb-4">
     <b-button variant="warning" style="width: inherit" @click="resetForm"> Reset </b-button>
    </b-col>
  </b-row>

    </b-form>
   </b-container>

</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      options:[
        {value: null, text: "Please select an employment Type"},
        {value: "fulltime", text: "Full Time"},
        {value: "parttime", text: "Part Time"},
        {value: "selfEmployed", text: "Self Employed"},
        {value: "freelance", text: "Freelance"},
        {value: "internship", text: "Internship"},
      ],
      // wantToAddMoreExperience: false,
      user: {
        jobName: "",
        employmentType: "",
        companyName: "",
        location: "",
        start_date: "",
        end_date: "",
        description: "",
        selectedempType: ""
      },
    }
  },
  validations: {
    user: {
      jobName: {
        required,
        minLength: minLength(3),
      },
      companyName: {
        required,
      },
      selectedempType: {
        required
      },
      location: {
        required,
      },
      description: {
        required,
      },
    },
  },
  computed: {
    minDate(){
          console.log(this.user.start_date);
          let d = new Date(this.user.start_date);
            let p1 = d.getFullYear()
            let p2 = d.getMonth()
            let p3 = d.getDate() 
            if(p2<10){ p2 = "0" + p2; }
            if(p3<10){ p3 = "0" + p3; }  

          var min = (p1 + 1) + "-" + p2 + "-" + p3
           console.log(min)
          return min;
       }
  },
  methods: {
    ...mapActions("userData",["addUserExperienceData"]),
    validateState(name) {
      const { $dirty, $error } = this.$v.user[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.user = {
        jobName: "",
        companyName: "",
        location: "",
        start_date: "",
        end_date: "",
        description: "",
        employmentType: "Please select an Employment type"
      };
      this.$nextTick(() => {
        this.$v.$reset();
        this.$toast("reset done",{ timeout : 3000 }); 
      });
    },
    addUserExperience() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        this.$toast.error("Please enter experience details properly.",{ timeout : 3000 });
        return;
      }
      let startDate = new Date(this.user.start_date)
      let endDate = new Date(this.user.end_date)
      let data = {
        user: {
          experience:{
            title: this.user.jobName,
            company_name: this.user.companyName,
            location: this.user.location,
            start_date: startDate,
            end_date: endDate,
            description: this.user.description,
            employment_type: this.user.selectedempType
          }
        }
      }
      this.addUserExperienceData(data.user).then(success => {
        console.log(success);
        this.resetForm()
        this.$toast.success("Added experience details successfully.",{ timeout : 3000 });
        // console.log(this.user);
        this.$router.push("/");
      }).catch(error => {
        console.log(error);
        this.$toast.error("Some Error Occured",{ timeout : 3000 });
      })
      },
  }
}
</script>
<style>
</style>