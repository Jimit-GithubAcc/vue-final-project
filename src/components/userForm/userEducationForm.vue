<template>
<b-container
     class="mt-4"
     style="box-shadow: 5px 5px 5px 5px gray;" 
    >
     <h1>Enter your education details</h1>
 <b-form inline>
 
  <b-row>
    <b-col>
     <b-form-input
      id="inline-form-input-name"
      class="mt-3 mr-sm-2 mb-sm-0"
      placeholder="School Name"
    ></b-form-input>
  </b-col>
  <b-col>
    <b-input-group  class="mt-3 mr-sm-2 mb-sm-0">
      <b-form-input id="inline-form-input-username" placeholder="Graduation details"></b-form-input>
    </b-input-group>
   </b-col>
 </b-row>

<b-row>
    <b-col>
     <b-form-input
      id="inline-form-input-name"
      class="mt-3 mr-sm-2 mb-sm-0"
      placeholder="Field of Study"
    ></b-form-input>
  </b-col>
  <b-col>
    <b-input-group  class="mt-3 mr-sm-2 mb-sm-0">
      <b-form-input id="inline-form-input-username" placeholder="Grade details(in words)"></b-form-input>
    </b-input-group>
   </b-col>
 </b-row>

 <b-row >
   <b-col class="mt-3">
      <label for="inline-form-input-name">Start date: </label>
  </b-col>
  <b-col class="mt-3">
    <label for="inline-form-input-username"> End date: </label>
    </b-col>
 </b-row>    

 <b-row>
   <b-col>
      <b-form-input
      id="inline-form-input-name"
      class="mr-sm-2 mb-sm-0"
      type="date"
    ></b-form-input>
  </b-col>
  
  <b-col>
    <b-input-group  class="mr-sm-2 mb-sm-0">
     <b-form-input id="inline-form-input-username" placeholder="End date" type="date"></b-form-input>
    </b-input-group>
   </b-col>

 </b-row>    

<b-row>
   <b-col>
      <b-form-textarea
      id="textarea"
      class="mt-3 mr-sm-2 mb-sm-0"
      placeholder="Enter description..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>

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
<style>
</style>