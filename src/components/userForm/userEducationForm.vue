<template>
  <b-container
    class="mt-4"
    style="box-shadow: 5px 5px 5px 5px gray; background-color: lightgray;max-width: 800px;"
  >
    <h1>Enter your education details</h1>
    <b-form inline>
      <b-row>
        <b-col>
          <b-form-input
            id="input-1"
            class="mt-3 mr-sm-2 mb-sm-0"
            placeholder="School Name"
            required
            v-model="$v.user.sname.$model"
            :state="validateState('sname')"
          ></b-form-input>
          <b-form-invalid-feedback
            id="input-1-live-feedback"
            style="font-weight: bold"
            >This field is required.
          </b-form-invalid-feedback>
        </b-col>
        <b-col>
          <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
            <b-form-input
              id="input-2"
              placeholder="Graduation details"
              required
              v-model="$v.user.degree.$model"
              :state="validateState('degree')"
            ></b-form-input>
            <b-form-invalid-feedback
              id="input-2-live-feedback"
              style="font-weight: bold"
              >Please enter your Graduation details.
            </b-form-invalid-feedback>
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
            v-model="$v.user.field.$model"
            :state="validateState('field')"
          ></b-form-input>
          <b-form-invalid-feedback
            id="input-3-live-feedback"
            style="font-weight: bold"
            >Please enter your field.
          </b-form-invalid-feedback>
        </b-col>
        <b-col>
          <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
            <b-form-input
              id="input-4"
              placeholder="Grade details(in words)"
              required
              v-model="$v.user.grade.$model"
              :state="validateState('grade')"
            ></b-form-input>
            <b-form-invalid-feedback
              id="input-4-live-feedback"
              style="font-weight: bold"
              >Please enter your grade.
            </b-form-invalid-feedback>
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
            v-model="user.start_date"
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
              v-model="user.end_date"
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
            v-model="$v.user.description.$model"
            :state="validateState('description')"
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
            variant="primary"
            style="width: inherit"
            type="button"
            @click="addUserEducation"
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
import { required, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      user: {
        sname: "",
        degree: "",
        field: "",
        grade: "",
        start_date: "",
        end_date: "",
        description: "",
      },
    };
  },
  validations: {
    user: {
      sname: {
        required,
        minLength: minLength(6),
      },
      degree: {
        required,
      },
      field: {
        required,
      },
      grade: {
        required,
      },
      description: {
        required,
      },
      start_date: {
       required,
      },
      end_date: {
       required,
      },
       // dateObject: {}
      //    required,
      //   maxValue: maxValue(new Date()),
      // },
     /*   start_date: {
           required,
           isBefore(date){
              return (
              moment, // coerce to a moment object
             momentDate => momentDate.isBefore(this.end_date) // validate it!
          )(date)
          },
           minValue(val){
             return new Date(val) > new Date()
          },
           maxValue(val, {end_date}){
            return new Date(end_date) > new Date(val)
          }
        },
         end_date: {
           required,
           minValue(val, {start_date}){
           return new Date(val) > new Date(start_date)
          }
       }*/

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

          var min = (p1 + 2) + "-" + p2 + "-" + p3
           console.log(min)
          return min;
       }
    // dateObject() {
    //   return this.start_date ? new Date(this.start_date) : null;
    // },
  },
  methods: {
    // vClass($v) {
    //   return {
    //     error: $v.$error,
    //     valid: !$v.$invalid,
    //   };
    // },
    validateState(name) {
      const { $dirty, $error } = this.$v.user[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
     this.user = {
        sname: "",
        degree: "",
        field: "",
        grade: "",
        start_date: "",
        end_date: "",
        description: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    addUserEducation() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        // alert("Please enter your education details properly")
        if(!this.user.start_date.length){
           this.$toast.error("Enter start date.",{ timeout : 3000 });
        }
        if(!this.user.end_date.length){
             this.$toast.error("Enter end date.",{ timeout : 3000 });
        }
        console.log(this.$v.user);
        return;
      }
      console.log(this.user);
      this.$router.push("/");
    },
  },
};
</script>
<style>
</style>