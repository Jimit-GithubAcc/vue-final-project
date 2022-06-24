<template>
  <b-container>
    <div>
      <h1 class="mt-3">Latest Jobs</h1>
    </div>
    <b-card-group deck class="jobcard">
      <b-card class="jobcard__col" v-for="job in getFilteredJobs" :key="job.id">
        <div style="">
          <span
            class="badge rounded-pill bg-danger"
            style="zindex: '1'; left: '50%'"
            >{{ job.job_title }}</span
          >
        </div>
        <b-card-text class="jobcard__text">
          <p><b>Description : </b>{{ job.job_description }}</p>
          <p v-if="job.company_detail">{{job.company_detail.name}}</p>
          <p><b>Location : </b>{{ job.location }}</p>
        </b-card-text>
        <b-button variant="success" @click="redirectToJobDetail(job.id)"
          >Apply Now</b-button
        >
        <b-button variant="primary" class="m-2" @click="saveClickedJobs(job.id)"
          >Save Job</b-button
        >
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("jobs", ["getJobs", "getFilteredJobs"]),
    // ...mapGetters("userjob",["saveJob"])
  },
  methods: {
    ...mapActions("jobs", ["getJob"]),
    ...mapActions("userjob", ["saveJob"]),
    saveClickedJobs(id) {
      this.saveJob(id)
        .then((response) => {
          console.log(response);
          this.$toast.success("Job details added",{ timeout : 3000 });
        })
        .catch((err) => {
          this.$toast.error(err.message, { timeout: 3000 });
        });
    },
    redirectToJobDetail(id) {
      this.$router.push(`/user/jobdetails/${id}`);
    },
  },
  mounted() {
    this.getJob();
  },
};
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
  .jobcard__col {
    width: 50%;
    float: left;
    margin: 10px;
  }
}
</style>
