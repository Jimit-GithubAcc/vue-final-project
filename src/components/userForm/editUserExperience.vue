<template>
<b-container
     class="mt-4"
     style="box-shadow: 5px 5px 5px 5px gray;max-width: 800px;" 
    >
     <h1>Edit experience details</h1>
 <b-form inline>
 
  <b-row>
    <b-col>
     <b-form-input
      id="input-1"
      class="mt-3 mr-sm-2 mb-sm-0"
      placeholder="Job Title"
      required
      v-model="user.title"
      ></b-form-input>
    </b-col>
  <b-col>
      <b-form-select v-model="user.employment_type" class="mt-3 mr-sm-2 mb-sm- form-control" :options="options">
    </b-form-select>
  </b-col>
 </b-row>

<b-row>
    <b-col>
     <b-form-input
      id="input-2"
      class="mt-3 mr-sm-2 mb-sm-0"
      placeholder="Name of Company"
      required
      v-model="user.company_name"
      ></b-form-input>
    </b-col>
  <b-col>
    <b-input-group  class="mt-3 mr-sm-2 mb-sm-0">
      <b-form-input id="inline-form-input-3" placeholder="Location(in words)" 
            required
            v-model="user.location"
            ></b-form-input>
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
      id="inline-form-start"
      class="mr-sm-2 mb-sm-0"
      type="date"
      v-model="user.start_date"
      ></b-form-input>
  </b-col>
  
  <b-col>
    <b-input-group  class="mr-sm-2 mb-sm-0">
     <b-form-input id="inline-form-end" v-model="user.end_date" placeholder="End date" type="date" :min="minDate"></b-form-input>
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
            v-model="user.description"
      ></b-form-textarea>
    </b-col>
 </b-row>

  <b-row>
    <b-col class="mt-4 mb-4">
     <b-button variant="outline-primary" style="width: inherit" type="button" @click="editUserExperience"> Update </b-button>
    </b-col>
   </b-row>

    </b-form>
   </b-container>

</template>
<script>
//import { required, minLength } from "vuelidate/lib/validators";
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
      user:this.userExp,
    }
  },
  props:["userExp"],
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
    ...mapActions("userData",["editUserExperienceData"]),
        editUserExperience() {
      let startDate = new Date(this.user.start_date)
      let endDate = new Date(this.user.end_date)
      let data = {
        user: {
          experience:{
            title: this.user.title,
            company_name: this.user.company_nmae,
            location: this.user.location,
            start_date: startDate,
            end_date: endDate,
            description: this.user.description,
            employment_type: this.user.employment_type,
            },
            id:this.user.id,
        }
      }
      this.editUserExperienceData(data.user).then(success => {
        console.log(success);
        this.$toast.success("Edited experience details successfully.",{ timeout : 3000 });
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