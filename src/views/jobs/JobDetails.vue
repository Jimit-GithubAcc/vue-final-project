<template>
  <div class="card mx-auto main__card" style="width: 40rem">

    <div class="card-body bg-info">
      <h3 class="card-title">Job Title</h3>

      <p class="card-text"><b>Description : </b>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati tenetur omnis delectus eum sequi reiciendis deleniti harum aperiam. Nesciunt, natus.
      </p>
      <p class="card-text"><b>Location : </b> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, minus!
      </p>
      <p class="card-text"><b>Skills Required : </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, qui.
      </p>
      <p class="card-text"><b>Experience needed : </b>3 years
      </p>
      <p class="card-text"><b>Last Date to Apply : </b>{{new Date}}
      </p>

      <b-button class="btn btn-success rounded-2" @click="applyForJob">
        Apply
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    applyForJob() {
      this.$toast.success("Job applied successfully.",{ timeout : 3000 });
    },
  },
};
</script>

<style scoped>
.main__card{
    margin-top: 6%;
}
</style>