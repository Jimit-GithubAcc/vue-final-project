<template>
<b-container
     class="mt-4"
     style="box-shadow: 5px 5px 5px 5px gray;" 
    >
     <h1>Enter Profile details</h1>
 <b-form inline>
 
  <b-row>
    <b-col>
     <b-form-input
      id="inline-form-input-name"
      class="mt-3 mr-sm-2 mb-sm-0"
      placeholder="UserName"
    ></b-form-input>
  </b-col>
  <b-col>
    <b-input-group  class="mt-3 mr-sm-2 mb-sm-0">
      <b-form-input id="inline-form-input-username" placeholder="Contact No"></b-form-input>
    </b-input-group>
   </b-col>
 </b-row>
<!--
<b-row >
   <b-col class="mt-3">
      <label for="inline-form-input-name"> Profile Pic: </label>
  </b-col>
 </b-row> -->    

 <b-row>
    <b-col>
  <b-input-group  class="mt-3 mr-sm-2 mb-sm-0">
  Profile Pic:  
       <input type="file" class="custom-file-upload"/> 
    </b-input-group>
  </b-col>
  <b-col class="mt-5">

   Gender:  <label class="radio-inline" style="margin:2px;" >
     <input type="radio" name="gender"/> Male
     </label> 
     <label class="radio-inline" style="margin:2px;">
     <input   type="radio" name="gender"/> Female
     </label>
          </b-col>
       </b-row>
    

  <b-row>
    <b-col class="mt-3 mb-4">
     <b-button variant="primary" style="width: inherit" type="Submit"> Submit </b-button>
    </b-col>
    <b-col class="mt-3 mb-4">
     <b-button variant="warning" style="width: inherit"> Reset </b-button>
    </b-col>
  </b-row>
 
    </b-form>
   </b-container>
</template>
<script>
    export default { }
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