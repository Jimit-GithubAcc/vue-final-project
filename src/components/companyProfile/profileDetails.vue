<template>
  <div>
    <h1>Company Profile Details</h1>
    <b-container class="mr-sm-2 mb-sm-0">
      <b-card no-body class="overflow-hidden main__card" style="">
        <b-row no-gutters>
          <b-col md="6" class="align-self-center">
            <b-card-img
              :src="this.companyData.logo_url ? this.companyData.logo_url : 'https://picsum.photos/200/200/?image=20'"
              alt="Company Logo"
              class="rounded-circle"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
                <h3>{{companyData.name}}</h3>
                <p><b>About Company : </b>{{companyData.about}}</p>
                <p><b>Phone : </b>{{companyData.phone}}</p>
                <p><b>Area : </b>{{companyData.address.area}}</p>
                <p><b>City : </b>{{companyData.address.city}}</p>
                <p><b>State : </b>{{companyData.address.state}}</p>
                <p><b>Country : </b>{{companyData.address.country}}</p>
                <p><b>Street Info : </b>{{companyData.address.street}}</p>
                <p><b>Pincode : </b>{{companyData.address.pincode}}</p>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      companyData: {}
    }
  },
  mounted() {
    this.getCompanyData()
  },
  methods: {
    async getCompanyData() {
      const result = await axios.get(`https://6253-103-240-35-190.in.ngrok.io/company/company_details`)
      console.log(result.data.data)
      this.companyData = result.data.data
    }
  }
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
.card-title{
    font-weight: bold;
}
.card-img{
    width: 20vh;
}
</style>