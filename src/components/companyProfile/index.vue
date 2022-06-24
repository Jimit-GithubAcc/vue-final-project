<template>
    <div>
      <company-profile-form></company-profile-form>
      <edit-company-profile :allCompanyData="allCompanyData"></edit-company-profile>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import CompanyProfileForm from './CompanyProfileForm.vue'
import EditCompanyProfile from './EditCompanyProfile.vue'
export default {
  components: { 
    CompanyProfileForm, 
    EditCompanyProfile 
    },
    data() {
      return {
        companyData: null
      }
    },
    computed: {
      ...mapState("companyData",["allCompanyData"])
    },
    methods: {
      ...mapState("companyData",["fetchCompanyProfileData"])
    },
    mounted() {
      this.fetchCompanyProfileData()
      this.companyData = this.allCompanyData
      console.log("companyData = ",this.companyData);
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