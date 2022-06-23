<template>
  <div class="container mb-3" style="background-color: #eee">
    <h1>All Candidates</h1>

    <section>
      <div class="container py-2" v-if="getAllCandidates.length !== 0">
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="candidate in getAllCandidates" :key="candidate.id">
            <div class="card mb-4">
              <div class="card-body text-center">
                <img
                  :src="candidate.custom_profile ? candidate.custom_profile : 'https://picsum.photos/200/200/?image=41'"
                  alt="avatar"
                  class="rounded-circle img-fluid"
                  style="width: 150px"
                />
                <h3 class="my-3">{{candidate.custom_name ? candidate.custom_name : 'User'}}</h3>
                <p class="text-muted mb-1"><b>Job Title : </b>{{candidate.custom_title}}</p>
                <p class="text-muted mb-4"><b>CV : </b>{{candidate.user_resume_url.slice(0,30)}}</p>
                <b-button
                  variant="outline-primary"
                  @click="viewCandidateDetails(candidate.id)"
                  >View Details</b-button
                >
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="mt-5">
        <h1>No candidate to display.</h1>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters("jobs", ["getAllCandidates"]),
  },
  methods: {
    ...mapActions("jobs",["getCandidates"]),
    viewCandidateDetails(id) {
      this.$router.push(`/userprofile/${id}`);
    },
  },
  mounted() {
    this.getCandidates()
  }
};
</script>

<style scoped>
</style>