<template>
   <div>
      <h1> Add Job Form </h1>
      <b-container
     class="mt-4"
     style="box-shadow: 5px 5px 5px 5px gray; max-width:900px; 
      background:#FAF9E6; font-family: Lucida Console" 
    >
     <h1>Enter Job details</h1>
 <b-form inline  style="opacity:70%" >
 
  <b-row>
   <b-col>
      <b-form-textarea
      id="textarea"
      class="mt-3 mr-sm-2 mb-sm-0"
      placeholder="Enter Job description..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>

  </b-col>
 </b-row>

  <b-row>
    <b-col>
     <b-form-input
      id="inline-form-input-name"
      class="mt-3 mr-sm-2 mb-sm-0"
      placeholder="Experience"
      type="number"
    ></b-form-input>
  </b-col>
  <b-col>
    <b-input-group  class="mt-3 mr-sm-2 mb-sm-0">
      <b-form-input id="inline-form-input-username" placeholder="Location.."></b-form-input>
    </b-input-group>
   </b-col>
 </b-row>
<b-row >
   <b-col class="mt-3">
      <label for="inline-form-input-name">Add Job Title: </label>
  </b-col>
  <b-col class="mt-3">
    <label for="inline-form-input-username"> Last date to apply: </label>
    </b-col>
 </b-row>    

<b-row>
    <b-col>
     <b-form-input
      id="inline-form-input-name"
      class="mr-sm-2 mb-sm-0"
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
      <b-form-select v-model="selected" :options="skills" multiple class="form-control mt-3 mr-sm-2 mb-sm-0" ></b-form-select>       
     </b-col>
    </b-row>

   <div v-if="selected.length">
       You Selected:   <span v-for="(item,i) in selected" :key=i> {{ item }}</span>
     </div>
 
 <b-row>
        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          class="mt-4 mr-sm-1 mb-sm-0"
          v-model="isEasy"
        >
          <span style="margin: 4px">Easy Applicable </span>
        </b-form-checkbox>
      </b-row>

  <b-row v-if="isEasy">
   <b-col>
      <b-form-input
      id="type-url"
      type="url"
      class="mt-2 mr-sm-2 mb-sm-0"
      placeholder="Enter your link..."
     ></b-form-input>

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
  <br/>
   </div>
</template>

<script>
    export default {
        data() {
      return {
        skills: ['frontEnd','backEnd','sss1','sss2'],isEasy: false,selected:[]
      }
    },
    methods:{
    // addSkill() { this.skills.push({name:''}) },
     removeSkill(i) { this.skills.splice(i)},
    }
  }
</script>

<style scoped>

</style>