<template>
  <div class="home">
    <SearchVue></SearchVue>
    <job-list></job-list>
    <!-- <pagination/> -->
    <job-categories></job-categories>
  </div>
</template>

<script>
import SearchVue from '../components/searchFilter/search.vue';
import JobList from '../views/jobs/JobList.vue'
import JobCategories from './jobs/JobCategories.vue';
// import Pagination from './jobs/Pagination.vue';

export default {
  name: 'Home',
  components: {
    SearchVue,
    'job-list': JobList,
    JobCategories,
    // Pagination
}
}
</script>

<style scoped>

</style>