<template>
  <section style="background-color: #eee">
    <div class="container py-5">
      <div class="row" v-if="checkJobs">
        <div class="col-lg-4" v-for="job in viewAllSavedJobs" :key="job.id">
          <div class="card mb-4">
            <div class="card-body text-center">
              
              <h4 class="my-3">{{job.job.job_title}}</h4>
              <p class="text-muted mb-1"><b>Job Description : </b>{{job.job.job_description}}</p>
              <b class="text-muted mb-1">Skills : </b>
              <span v-for="skill in job.skill_list" class="badge rounded-pill mb-1" :style="`background-color: ${skill.skill_color}`" :key="skill.id">
             {{ skill.skill_name }}
              </span>
              
              <p class="text-muted mb-1"><b>Experience needed : </b>{{job.job.year_of_exp}}</p>
              <p class="text-muted mb-1"><b>Job Description : </b>{{job.job.job_description}}</p>
              <p class="text-muted mb-1"><b>Job Location : </b>{{job.job.location}}</p>
              <p class="text-muted mb-4"><b>Last Date to apply : </b>{{job.job.last_date_to_apply}}</p>
              <b-button variant="outline-primary"
                >Apply for this job</b-button
              >
            </div>
          </div>
        </div>
      </div>
        <div v-else>
            You do not have any saved jobs
        </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("userjob", ["viewAllSavedJobs"]),
    checkJobs(){
        return this.viewAllSavedJobs.length ? true : false; 
    },
  },
  methods: {
    ...mapActions("userjob", ["getSaveJob"]),
  },
  mounted() {
    this.getSaveJob();
  },
};
</script>

<style scoped>
</style>