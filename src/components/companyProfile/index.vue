<template>
    <div>
      <company-profile-form></company-profile-form>
    </div>
</template>

<script>
import CompanyProfileForm from './CompanyProfileForm.vue'
export default {
  components: { CompanyProfileForm },
        
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