<template>
    <div class="container">
  <h1>
    All Candidates
  </h1>
  
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
  <div class="col mb-4" v-for="i in 10" :key="i">
    <div class="card" style="background-color: rgba(0, 0, 0, 0.2)">
       <b-img src="https://picsum.photos/200/200/?image=41" class="rounded-circle p-4" alt="Circle image"></b-img>
      <div class="card-body">
        <h4 class="card-title">Candidate Name</h4>
        <p class="card-text"><b>Skills : </b>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet..</p>
        <b-button variant="warning" @click="viewCandidateDetails">View Details</b-button>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
    methods: {
        viewCandidateDetails(){
            this.$router.push('/candidate/1')
        }
    }
}
</script>

<style scoped>
@media (max-width: 576px) {  
  .xs {color:red;font-weight:bold;}
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width:768px) {  
  .sm {color:red;font-weight:bold;}
}
 
/* Medium devices (tablets, 768px and up) The navbar toggle appears at this breakpoint */
@media (min-width: 768px) and (max-width:992px) {  
 .md {color:red;font-weight:bold;}
}
 
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width:1200px) { 
 .lg {color:red;font-weight:bold;}
}
 
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  
    .xl {color:red;font-weight:bold;}
}
</style>