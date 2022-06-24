<template>
  <div style="background-color: lightgray">
    <h1 class="mt-2">Applied Jobs</h1>
    <section>
      <div class="container py-2 mt-3" v-if="checkJobs">
        <div class="row">
          <div
            class="col-lg-4 col-md-6"
            v-for="job in getAllAppliedJobs"
            :key="job.id"
          >
            <div class="card mb-4">
              <div class="card-body text-center">
                <p class="text-muted mb-1">
                  <b>Job Title : </b>{{ job.custom_title }}
                </p>
                <p class="text-muted mb-2">
                  <b>CV : </b>{{ job.user_resume_url.slice(0, 30) }}
                </p>
                <p class="text-muted mb-2">
                  <b>Applied Date : </b>{{ job.apply_date }}
                </p>
                <p class="text-muted mb-2"><b>Status : </b>{{ job.status }}</p>
                <p class="text-muted mb-2" v-if="job.feedback">
                  <b>Feedback : </b>{{ job.feedback }}
                </p>
                <b-button variant="outline-primary" v-if="job.status === 'Application Received'" @click="deleteJob">Delete Applied Job</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5" v-else>
        <h1>You have not applied in any job.</h1>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("jobs", ["getAllAppliedJobs"]),
    checkJobs() {
      return this.getAllAppliedJobs.length ? true : false;
    },
  },
  methods: {
    ...mapActions("jobs", ["getAppliedJobsData"]),
  },
  mounted() {
    this.getAppliedJobsData();
  },
};
</script>

<style scoped>
</style>