<template>
  <div>
    <h1>Company Profile Details</h1>
    <section style="background-color: #eee">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center card_main" style="height: 75vh">
              <img :src="this.companyData.logo_url ? 'https://picsum.photos/200/200/?image=20' : this.companyData.logo_url"
                  alt="Company Logo"
                  class="rounded-circle img-fluid mt-3"
                  style="width: 150px"
                />
              <h4 class="my-3 mt-3">{{ companyData.name }}</h4>
              <p class="text-muted mb-1">
                {{ companyData.phone }}
              </p>
              <b-button class="mt-3"
                variant="outline-primary"
                >Edit Profile</b-button
              >
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Full Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ companyData.name }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">About</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ companyData.about }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Phone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {{ companyData.phone }}
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <h5 class="mb-3">
                    <span class="text-primary font-weight-bold me-1"
                      >Address</span
                    >
                  </h5>
                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>Street : </b>{{ companyData.address.street }}
                    </p>

                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>Area : </b>{{ companyData.address.area }}
                    </p>

                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>City : </b>{{ companyData.address.city }}
                    </p>

                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>State : </b>{{ companyData.address.state }}
                    </p>

                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>Country : </b>{{ companyData.address.country }}
                    </p>

                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>Pincode : </b>{{ companyData.address.pincode }}
                    </p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

    
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      companyData: {},
    };
  },
  mounted() {
    this.getCompanyData();
  },
  methods: {
    async getCompanyData() {
      const result = await axios.get(
        `https://job-portal-rails.herokuapp.com/company/company_details`
      );
      console.log(result.data.data);
      this.companyData = result.data.data;
    },
  },
};
</script>

<style scoped>
.main__card {
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  max-width: 940px;
  border: none;
}

.card-title {
  font-weight: bold;
}

.card-img {
  width: 20vh;
}

@media only screen and (max-width: 992px) {
  .card_main {
    height: 20vh;
  }
}
</style>
