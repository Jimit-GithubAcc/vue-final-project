<template>
  <b-container>
    <div>
      <h1 class="mt-3">Latest Jobs</h1>
    </div>
    <b-card-group deck class="jobcard">
      <b-card class="jobcard__col" v-for="i in 10" :key="i">
        <div style="">
          <span class="badge rounded-pill bg-danger" style="zindex: '1'; left: '50%'">New</span>
        </div>
        <b-card-text class="jobcard__text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </b-card-text>
        <b-button variant="success">Apply Now</b-button>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
/*.jobcard {
    margin-top: 3%; 
    flex: 1;
    display: flex;
    flex-direction: row;
}*/
.jobcard {
  margin-top: 3%;
}
.jobcard::after {
  content: "";
  display: table;
  clear: both;
}
.jobcard__col {
  float: left;
  width: 23%;
  padding: 0 10px;
  margin: 10px;
}
.jobcard__text {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #f1f1f1;
  padding: 16px;
  text-align: center;
}
@media screen and (max-width: 500px) {
  .jobcard__col {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 700px) {
    .jobcard__col{
        width: 50%;
        float: left;
        margin: 10px;
    }
}
</style>
