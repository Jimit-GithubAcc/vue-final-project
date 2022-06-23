<template>
  <div class="container mb-3" style="background-color: #eee">
    <h1>All Candidates</h1>

    <section>
      <div class="container py-2">
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="i in 5" :key="i">
            <div class="card mb-4">
              <div class="card-body text-center">
                <img
                  src="https://picsum.photos/200/200/?image=41"
                  alt="avatar"
                  class="rounded-circle img-fluid"
                  style="width: 150px"
                />
                <h4 class="my-3">Candidate Name</h4>
                <p class="text-muted mb-1"><b>Skills : </b>Lorem ipsum dolor sit amet.</p>
                <p class="text-muted mb-4"><b>CV Link : </b>link</p>
                <b-button
                  variant="outline-primary"
                  @click="viewCandidateDetails(i)"
                  >View Details</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    viewCandidateDetails(id) {
      this.$router.push(`/userprofile/${id}`);
    },
  },
};
</script>

<style scoped>
</style>