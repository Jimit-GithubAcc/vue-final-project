<template>
  <div class="home">
    <h1>HomePage</h1>
    <SearchVue></SearchVue>
  </div>
</template>

<script>
import SearchVue from '../components/searchFilter/search.vue';

export default {
  name: 'Home',
  components: {
    SearchVue
}
}
</script>

<style scoped>

</style>