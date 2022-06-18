<template>
  <b-container>
    <h1>All Job Details</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4 m-2">
      <div class="col" v-for="i in 10" :key="i">
        <div class="card h-100" style="background: #f1f1f1">
          <div class="card-body">
            <h4 class="card-title bg-info">Job Title</h4>
            <p class="card-text">
              <b>Description : </b>This is a wider card with supporting text
              below as a natural lead-in to additional content. This content is
              a little bit longer.
            </p>
          </div>
          <p>
            <b>Location : </b>Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ipsum, tenetur!
          </p>
          <p>
            <b>Skills : </b>Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Consequuntur, laboriosam.
          </p>
          <p><b>Experience for this job : </b>5 years</p>
          <p><b>Date : </b>{{new Date}}</p>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
</style>