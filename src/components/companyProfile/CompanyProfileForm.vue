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
            <b-form-invalid-feedback
              id="input-1-live-feedback"
              style="font-weight: bold"
              >This is a required field and must be atleast 3 characters.
            </b-form-invalid-feedback>
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
              <b-form-invalid-feedback
                id="input-1-live-feedback"
                style="font-weight: bold"
                >This is a required field.
              </b-form-invalid-feedback>
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
              Company Logo:
              <input
                type="file"
                class="custom-file-upload"
                v-on:change="addLogo($event)"
              />
            </b-input-group>
          </b-col>
          <b-col>
            <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
              Company Banner:
              <input
                type="file"
                class="custom-file-upload"
                v-on:change="addBanner($event)"
              />
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
            <b-form-invalid-feedback
              id="input-1-live-feedback"
              style="font-weight: bold"
              >This field is required.
            </b-form-invalid-feedback>
          </b-col>
        </b-row>

        <b-row>
          <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
            Add Image posts(Optional):
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
            <b-form-invalid-feedback
              id="input-1-live-feedback"
              style="font-weight: bold"
              >This is a required field.
            </b-form-invalid-feedback>
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
              <b-form-invalid-feedback
                id="input-1-live-feedback"
                style="font-weight: bold"
                >This is a required field.
              </b-form-invalid-feedback>
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
                placeholder="Country.."
                required
                v-model="$v.company.country.$model"
                :state="validateState('country')"
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
                placeholder="Pincode.."
                required
                v-model="$v.company.pincode.$model"
                :state="validateState('pincode')"
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
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
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
        pincode: "",
        images: ""
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
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      companyDescription: {
        required,
      },
      area: { required },
      city: { required },
      state: { required },
      country: { required },
      streetInfo: { required },
      pincode: { required },
    },
  },
  methods: {
    ...mapActions("companyData", ["addCompanyData"]),
    validateState(name) {
      const { $dirty, $error } = this.$v.company[name];
      return $dirty ? !$error : null;
    },
    addLogo(e) {
      var files = e.target.files || e.dataTransfer.files;
      const ext = files[0].name.split(".").pop();
      if (ext === "jpg" || ext === "png" || ext === "JPG" || ext === "PNG") {
        this.company.companyLogo = files[0];
      } else {
        this.$toast.error("Logo should be jpg or png.", { timeout: 3000 });
      }
    },
    addBanner(e) {
      var files = e.target.files || e.dataTransfer.files;
      const ext = files[0].name.split(".").pop();
      if (ext === "jpg" || ext === "png" || ext === "JPG" || ext === "PNG") {
        this.company.companyBanner = files[0];
      } else {
        this.$toast.error("Banner should be jpg or png.", { timeout: 3000 });
      }
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
        images: "",
        city: "",
        state: "",
        country: "",
        streetInfo: "",
        pincode: "",
      }),
        this.$nextTick(() => {
          this.$v.$reset();
          this.$toast("Reset done", { timeout: 3000 });
        });
    },
    addCompanyDetails() {
      this.$v.company.$touch();
      if (this.$v.company.$anyError) {
        this.$toast.error("Please enter all the details properly.", {
          timeout: 3000,
        });
        console.log(this.$v.company);
        return;
      }
      if (!this.company.companyLogo) {
        this.$toast.error("Please add a valid logo.", { timeout: 3000 });
        return
      }
      if (!this.company.companyBanner) {
        this.$toast.error("Please add a valid banner.", { timeout: 3000 });
        return;
      } else {
        let data = {
          name: this.company.companyName,
          about: this.company.companyDescription,
          phone: this.company.contact,
          logo: this.company.companyLogo,
          banner: this.company.companyBanner,
          images: this.company.images,
          company_street: this.company.streetInfo,
          company_area: this.company.area,
          company_city: this.company.city,
          company_country: this.company.country,
          company_pincode: this.company.pincode,
          company_state: this.company.state,
        };
        this.addCompanyData(data)
          .then((success) => {
            console.log(success);
            this.resetForm();
            this.$router.push("/companyprofile/profiledetails");
            this.$toast.success("company details added successfully.", {
              timeout: 3000,
            });
          })
          .catch((error) => {
            console.log(error);
            this.$toast.error("Some error occurred", { timeout: 3000 });
          });
      }
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
