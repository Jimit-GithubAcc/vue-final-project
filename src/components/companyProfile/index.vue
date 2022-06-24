<template>
    <div>
      <company-profile-form v-if="!allCompanyData"></company-profile-form>
      <edit-company-profile :companyData="allCompanyData"></edit-company-profile>
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
import CompanyProfileForm from './CompanyProfileForm.vue'
import EditCompanyProfile from './EditCompanyProfile.vue'
export default {
  components: { 
    CompanyProfileForm, EditCompanyProfile 
    },
    computed: {
      ...mapState("companyData",["allCompanyData"])
    },
    methods: {
      ...mapActions("companyData",["fetchCompanyProfileData"])
    },
    mounted() {
      this.fetchCompanyProfileData()
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