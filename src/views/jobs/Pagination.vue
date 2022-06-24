<template>
  <div class="overflow-auto container mt-3" v-if="getFilteredJobs.length !== 0">
    <b-pagination
      v-model="currentPage"
      pills
      align="center"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
        // rows: this.getFilteredJobs.length,
        rows: 50,
        perPage: 5,
        currentPage: 1
    };
  },
  computed: {
      ...mapGetters("jobs", ["getJobs", "getFilteredJobs"]),
      // getDataToShow(){
      //   return this.getFilteredJobs.slice(
      //     (this.currentPage - 1) * this.perPage,
      //     this.currentPage * this.perPage
      //   )
      // }
    },
};
</script>

<style scoped>
</style>