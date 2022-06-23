<template>
    <b-container>
        <div class="mt-5">
            <h1 class="">Job Categories</h1>
        </div>
        <div>
            <h3>Discover Jobs according to your skills.</h3>
        </div>
        <b-card-group deck class="jobcard">
      <b-card class="jobcard__col" v-for="job in getJobs" :key="job.id">
        <b-card-text class="jobcard__text">
          {{job.job_description}}
        </b-card-text>
      </b-card>
    </b-card-group>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
      ...mapGetters("jobs", ["getJobs"]),
    },
}
</script>

<style scoped>
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
  background-color: hsla(0, 0%, 95%, 0.719);
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