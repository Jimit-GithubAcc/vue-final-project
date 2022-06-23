<template>
  <div class="overflow-auto container mt-3" v-if="getJobs.length !== 0">
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
        rows: 50,
        perPage: 2,
        currentPage: 1
    };
  },
  computed: {
      ...mapGetters("jobs", ["getJobs"]),
    },
};
</script>

<style scoped>
</style>