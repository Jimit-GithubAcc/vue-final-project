<template>
  <div>
    <h1>Add Job Form</h1>
    <b-container
      class="mt-4"
      style="
        box-shadow: 5px 5px 5px 5px gray;
        max-width: 900px;
        background: #faf9e6;
        font-family: Lucida Console;
      "
    >
      <h1>Enter Job details</h1>
      <b-form inline style="opacity: 70%">
        <b-row>
          <b-col>
            <b-form-textarea
              id="textarea"
              class="mt-3 mr-sm-2 mb-sm-0"
              placeholder="Enter Job description..."
              rows="3"
              max-rows="6"
              required
              v-model="$v.company.jobDescription.$model"
              :state="validateState('jobDescription')"
            ></b-form-textarea>
            <b-form-invalid-feedback
              id="input-1-live-feedback"
              style="font-weight: bold"
              >Please enter job description.
            </b-form-invalid-feedback>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-input
              id="inline-form-input-name"
              class="mt-3 mr-sm-2 mb-sm-0"
              placeholder="Experience"
              type="number"
              required
              v-model="$v.company.experience.$model"
              :state="validateState('experience')"
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
                id="inline-form-input-username"
                placeholder="Location.."
                required
              v-model="$v.company.location.$model"
              :state="validateState('location')"
              ></b-form-input>
              <b-form-invalid-feedback
              id="input-1-live-feedback"
              style="font-weight: bold"
              >This field is required.
            </b-form-invalid-feedback>
            </b-input-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="mt-3">
            <label for="inline-form-input-name">Add Job Title: </label>
          </b-col>
          <b-col class="mt-3">
            <label for="inline-form-input-username">
              Last date to apply:
            </label>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-input
              id="inline-form-input-name"
              class="mr-sm-2 mb-sm-0"
              required
              v-model="$v.company.jobTitle.$model"
              :state="validateState('jobTitle')"
            ></b-form-input>
            <b-form-invalid-feedback
              id="input-1-live-feedback"
              style="font-weight: bold"
              >JobTitle is required and atleast has 3 characters.
            </b-form-invalid-feedback>
          </b-col>
          <b-col>
            <b-input-group class="mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-username"
                placeholder="End date"
                type="date"
              ></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-select
              :options="skills"
              multiple
              class="form-control mt-3 mr-sm-2 mb-sm-0"
              required
              v-model="$v.company.selected.$model"
              :state="validateState('selected')"
            ></b-form-select>
            <b-form-invalid-feedback
              id="input-1-live-feedback"
              style="font-weight: bold"
              >This field is required.
            </b-form-invalid-feedback>
          </b-col>
        </b-row>

        <div v-if="company.selected.length">
          You Selected:
          <span v-for="(item, i) in company.selected" :key="i"> {{ item }}</span>
        </div>

        <b-row>
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            class="mt-4 mr-sm-1 mb-sm-0"
            v-model="isEasy"
          >
            <span style="margin: 4px">Easy Applicable </span>
          </b-form-checkbox>
        </b-row>

        <b-row v-if="isEasy">
          <b-col>
            <b-form-input
              id="type-url"
              type="url"
              class="mt-2 mr-sm-2 mb-sm-0"
              placeholder="Enter your link..."
            ></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="mt-3 mb-4">
            <b-button
              variant="primary"
              style="width: inherit"
              type="button"
              @click="addJobDetails"
            >
              Submit
            </b-button>
          </b-col>
          <b-col class="mt-3 mb-4">
            <b-button
              variant="warning"
              style="width: inherit"
              @click="resetForm"
            >
              Reset
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
    <br />
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      skills: ["frontEnd", "backEnd", "sss1", "sss2"],
      isEasy: false,
      company: {
        selected: [],
        jobDescription: "",
        experience: "",
        location: "",
        jobTitle: "",
        date: "",
        link: "",
      },
    };
  },
  validations: {
    company: {
      selected: {
        required
      },
      jobDescription: {
        required,
      },
      experience: {
        required,
      },
      jobTitle: {
        required,
        minLength: minLength(3)
      },
      location: { required },
    },
  },
  methods: {
    // addSkill() { this.skills.push({name:''}) },
    removeSkill(i) {
      this.skills.splice(i);
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.company[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      (this.company = {
        jobDescription: "",
        experience: "",
        location: "",
        jobTitle: "",
        date: "",
        link: "",
        selected: []
      }),
      this.$nextTick(() => {
        this.$v.$reset();
        this.$toast("reset done",{ timeout : 3000 }); 
      });
    },
    addJobDetails() {
      this.$v.company.$touch();
      if (this.$v.company.$anyError) {
        this.$toast.error("Please enter the details properly",{ timeout : 3000 }); 
        console.log(this.$v.company);
        return;
      }
      console.log("Job Details = ", this.company);
      this.$router.push("/");
      this.$toast.success("Job posted successfully",{ timeout : 3000 }); 
    },
  },
};
</script>

<style scoped>
</style>