<template>
  <b-container>
    <h1>All Job Details</h1>
    <div
      class="row row-cols-1 row-cols-md-3 g-4 m-2"
      v-if="getJobs.length !== 0"
    >
      <div class="col" v-for="job in getJobs" :key="job.id">
        <div class="card h-100" style="background: #f1f1f1">
          <div class="card-body">
            <h4 class="card-title bg-info">{{ job.job_title }}</h4>
            <p class="card-text">
              <b>Description : </b>{{ job.job_description }}
            </p>
            <p><b>Location : </b>{{ job.location }}</p>
            <p><b>Experience for this job : </b>{{ job.year_of_exp }} years</p>
            <p><b>Last Date to apply : </b>{{ job.last_date_to_apply }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="mt-5">
      <h1>You have not posted any job yet....</h1>
    </div>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("jobs", ["getJobs"]),
  },
  methods: {
    ...mapActions("jobs", ["getJob"]),
  },
  mounted() {
    this.getJob();
  },
};
</script>

<style scoped>
</style>