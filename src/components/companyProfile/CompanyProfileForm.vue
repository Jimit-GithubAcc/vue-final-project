<template>
  <div>
    <h1>Profile Page</h1>
    <b-container
      class="mt-4"
      style="
        box-shadow: 5px 5px 5px 5px gray;
        background: #d5e1df;
        font-family: Lucida Sans Unicode;
        max-width: 1000px;
      "
    >
      <h1>Company details</h1>
      <b-form inline>
        <b-row>
          <b-col>
            <b-form-input
              id="inline-form-input-name"
              class="mt-3 mr-sm-2 mb-sm-0"
              placeholder="Organization Name"
              required
              v-model="$v.company.companyName.$model"
              :state="validateState('companyName')"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-name"
                placeholder="Phone no"
                type="tel"
                required
                v-model="$v.company.contact.$model"
                :state="validateState('contact')"
              ></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
              Company Logo:
              <input type="file" class="custom-file-upload" />
            </b-input-group>
          </b-col>
          <b-col>
            <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
              Company Banner:
              <input type="file" class="custom-file-upload" />
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-textarea
              id="textarea"
              class="mt-3 mr-sm-2 mb-sm-0"
              placeholder="About Company..."
              rows="3"
              max-rows="6"
              required
              v-model="$v.company.companyDescription.$model"
              :state="validateState('companyDescription')"
            ></b-form-textarea>
          </b-col>
        </b-row>

        <b-row>
          <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
            Add Image posts:
            <input type="file" class="custom-file-upload" multiple />
          </b-input-group>
        </b-row>

        <hr />
        <h1>Address details</h1>
        <b-row>
          <b-col>
            <b-form-input
              id="inline-form-input-name"
              class="mt-3 mr-sm-2 mb-sm-0"
              placeholder="Area.."
              required
              v-model="$v.company.area.$model"
              :state="validateState('area')"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-username"
                placeholder="City.."
                required
                v-model="$v.company.city.$model"
                :state="validateState('city')"
              >
              </b-form-input>
            </b-input-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-input
              id="inline-form-input-name"
              class="mt-3 mr-sm-2 mb-sm-0"
              placeholder="State.."
              required
              v-model="$v.company.state.$model"
              :state="validateState('state')"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-username"
                placeholder="Country.."
                required
                v-model="$v.company.country.$model"
                :state="validateState('country')"
              ></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-textarea
              id="textarea"
              class="mt-3 mr-sm-2 mb-sm-0"
              placeholder="Street info..."
              rows="2"
              required
              v-model="$v.company.streetInfo.$model"
              :state="validateState('streetInfo')"
            ></b-form-textarea>
          </b-col>
          <b-col>
            <b-input-group class="mt-3 mr-sm-2 mb-sm-0"> </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="mt-3 mb-4">
            <b-button
              variant="success"
              style="width: inherit"
              type="button"
              @click="addCompanyDetails"
            >
              Submit
            </b-button>
          </b-col>
          <b-col class="mt-3 mb-4">
            <b-button
              variant="secondary"
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
      company: {
        companyName: "",
        contact: "",
        companyLogo: "",
        companyBanner: "",
        companyDescription: "",
        companyImage: "",
        area: "",
        city: "",
        state: "",
        country: "",
        streetInfo: "",
      },
    };
  },
  validations: {
    company: {
      companyName: {
        required,
        minLength: minLength(3),
      },
      contact: {
        required,
      },
      companyDescription: {
        required,
      },
      area: { required },
      city: { required },
      state: { required },
      country: { required },
      streetInfo: { required },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.company[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      (this.company = {
        companyName: "",
        contact: "",
        companyLogo: "",
        companyBanner: "",
        companyDescription: "",
        companyImage: "",
        area: "",
        city: "",
        state: "",
        country: "",
        streetInfo: "",
      }),
        this.$nextTick(() => {
          this.$v.$reset();
        });
    },
    addCompanyDetails() {
      this.$v.company.$touch();
      if (this.$v.company.$anyError) {
        alert("Please enter your Experience details properly");
        console.log(this.$v.company);
        return;
      }
      console.log("Company Details = ", this.company);
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