<template>
    <div>
      <company-profile-form></company-profile-form>
      <!-- <edit-company-profile :companyData="companyData"></edit-company-profile> -->
    </div>
</template>

<script>
import axios from 'axios'
import CompanyProfileForm from './CompanyProfileForm.vue'
// import EditCompanyProfile from './EditCompanyProfile.vue'
export default {
  components: { 
    CompanyProfileForm, 
    // EditCompanyProfile 
    },
  data() {
    return {
      companyData: {}
    }
  },  
  methods: {
    async getProfileDetails(){
      const response = await axios.get(`https://c9de-103-240-35-190.in.ngrok.io/company/company_details`)
      this.companyData = response.data.data
      console.log("Company Data = ",response.data.data)
    }  
  },
  mounted() {
    this.getProfileDetails()
  }
}
</script>
<style scoped>
 .custom-file-upload{
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