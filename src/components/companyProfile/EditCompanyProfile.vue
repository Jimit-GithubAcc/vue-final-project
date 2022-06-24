<template>
  <div>
    <h1>Edit Profile Page</h1>
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
              v-model="companyData.name"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-name"
                placeholder="Phone no"
                type="tel"
                required
                v-model="companyData.phone"
              ></b-form-input>
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
              v-model="companyData.about"
            ></b-form-textarea>
          </b-col>
        </b-row>

        <!-- <b-row>
          <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
            Add Image posts(Optional):
            <input type="file" class="custom-file-upload" multiple />
          </b-input-group>
        </b-row> -->

        <hr />
        <h1>Address details</h1>
        <b-row>
          <b-col>
            <b-form-input
              id="inline-form-input-name"
              class="mt-3 mr-sm-2 mb-sm-0"
              placeholder="Area.."
              required
              v-model="companyData.address.area"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-username"
                placeholder="City.."
                required
                v-model="companyData.address.city"
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
              v-model="companyData.address.state"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-username"
                placeholder="Country.."
                required
                v-model="companyData.address.country"
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
              v-model="companyData.address.street"
            ></b-form-textarea>
          </b-col>
          <b-col>
            <b-input-group class="mt-3 mr-sm-2 mb-sm-0">
              <b-form-input
                id="inline-form-input-username"
                placeholder="Pincode.."
                required
                v-model="companyData.address.pincode"
              ></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="mt-3 mb-4">
            <b-button
              variant="outline-primary"
              style="width: inherit"
              type="button"
              @click="updateCompanyDetails"
            >
              Update
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
    <br />
  </div>
</template>

<script>
import axios from 'axios';
// import { mapActions } from "vuex";
export default {
    props: ["companyData"],
  data() {
    return {
    //   company: this.companyData
    };
  },
  mounted(){

  },
  methods: {
    updateCompanyDetails(){    
        if (!this.companyData.logo) {
        this.$toast.error("Please add a valid logo.", { timeout: 3000 });
        return
      }
      if (!this.companyData.banner) {
        this.$toast.error("Please add a valid banner.", { timeout: 3000 });
        return;
      }
        let data = {
            // company: {
          name: this.companyData.name,
          about: this.companyData.about,
          phone: this.companyData.phone,
          logo: this.companyData.logo,
          banner: this.companyData.banner,
          images: this.companyData.images,
          address: {
              street: this.companyData.address.street,
              area: this.companyData.address.area,
              city: this.companyData.address.city,
              country: this.companyData.address.country,
              pincode: this.companyData.address.pincode,
              state: this.companyData.address.state,
          }
            // }
        }
        return new Promise((resolve, reject) => {
            axios.patch(`https://c9de-103-240-35-190.in.ngrok.io/company/company_details`, data)
                .then(response => {
                    console.log(response);
                    resolve(response);
                }).catch(err => {
                    reject(err)
                });
        })
    },
    addLogo(e) {
      var files = e.target.files || e.dataTransfer.files;
      const ext = files[0].name.split(".").pop();
      if (ext === "jpg" || ext === "png" || ext === "JPG" || ext === "PNG") {
        this.companyData.logo = files[0];
      } else {
        this.$toast.error("Logo should be jpg or png.", { timeout: 3000 });
      }
    },
    addBanner(e) {
      var files = e.target.files || e.dataTransfer.files;
      const ext = files[0].name.split(".").pop();
      if (ext === "jpg" || ext === "png" || ext === "JPG" || ext === "PNG") {
        this.companyData.banner = files[0];
      } else {
        this.$toast.error("Banner should be jpg or png.", { timeout: 3000 });
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
