<template>
  <div class="home">
    <h1>HomePage</h1>
    <SearchVue></SearchVue>
    <job-list></job-list>
    <job-categories></job-categories>
  </div>
</template>

<script>
import SearchVue from '../components/searchFilter/search.vue';
import JobList from '../views/jobs/JobList.vue'
import JobCategories from './jobs/JobCategories.vue';

export default {
  name: 'Home',
  components: {
    SearchVue,
    'job-list': JobList,
    JobCategories
}
}
</script>

<style scoped>

</style>