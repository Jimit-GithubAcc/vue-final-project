<template>
    <div>
        <h1>Profile Page</h1>
      <b-container
     class="mt-4"
     style="box-shadow: 5px 5px 5px 5px gray; background:#d5e1df; font-family: Lucida Sans Unicode;" 
    >
     <h1> Company details</h1>
 <b-form inline>
 
  <b-row>
    <b-col>
     <b-form-input>
      id="inline-form-input-name"
      class="mt-3 mr-sm-2 mb-sm-0"
      placeholder="Organization Name"
    ></b-form-input>
  </b-col>
  <b-col>
    <b-input-group  class="mt-3 mr-sm-2 mb-sm-0">
     <b-form-input
      id="inline-form-input-name"
      placeholder="Phone no" 
      type="tel"
    ></b-form-input>
  </b-input-group>
  
   </b-col>
 </b-row>

<b-row>
    <b-col>
       <b-input-group  class="mt-3 mr-sm-2 mb-sm-0">
     Company Logo:  
       <input type="file" class="custom-file-upload"/>    
       </b-input-group>
  </b-col>
  <b-col>
    <b-input-group  class="mt-3 mr-sm-2 mb-sm-0">
  Company Banner:  
       <input type="file" class="custom-file-upload"/> 
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
    ></b-form-textarea>

  </b-col>
 </b-row>
 
 <b-row>
      <b-input-group  class="mt-3 mr-sm-2 mb-sm-0">
  Add Image posts:  
       <input type="file" class="custom-file-upload" multiple/> 
    </b-input-group>
  
 </b-row>

 <hr>
 <h1> Address details</h1>
  <b-row>
    <b-col>
     <b-form-input
      id="inline-form-input-name"
      class="mt-3 mr-sm-2 mb-sm-0"
      placeholder="Area.."
    ></b-form-input>
  </b-col>
  <b-col>
    <b-input-group  class="mt-3 mr-sm-2 mb-sm-0">
      <b-form-input id="inline-form-input-username" placeholder="City.."></b-form-input>
    </b-input-group>
   </b-col>
 </b-row>
 <b-row>
    <b-col>
     <b-form-input
      id="inline-form-input-name"
      class="mt-3 mr-sm-2 mb-sm-0"
      placeholder="State.."
    ></b-form-input>
  </b-col>
  <b-col>
    <b-input-group  class="mt-3 mr-sm-2 mb-sm-0">
      <b-form-input id="inline-form-input-username" placeholder="Country.."></b-form-input>
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
    ></b-form-textarea>
  </b-col>
  <b-col>
    <b-input-group  class="mt-3 mr-sm-2 mb-sm-0">
    </b-input-group>
   </b-col>
 </b-row>

 
  <b-row>
    <b-col class="mt-3 mb-4">
     <b-button variant="success" style="width: inherit" type="Submit"> Submit </b-button>
    </b-col>
    <b-col class="mt-3 mb-4">
     <b-button variant="secondary" style="width: inherit"> Reset </b-button>
    </b-col>
  </b-row>
</b-form>
   </b-container>
  
    </div>
</template>

<script>
    export default {
        
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