<template>
    <div class="card mx-auto main__card" style="width: 40rem">

    <div class="card-body">
        <b-img src="https://picsum.photos/200/200/?image=41" class="mb-4" alt="Circle image"></b-img>
      <h3 class="card-title">Candidate Name</h3>

      <p class="card-text"><b>Skills : </b>
        Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet..
      </p>
      <p class="card-text"><b>Contact No : </b>1234567890
      </p>
      <p class="card-text"><b>Gender : </b>Male
      </p>
      <p class="card-text"><b>Location : </b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, deleniti?
      </p>
      <p class="card-text"><b>Graduation Details: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, debitis!
      </p>
      <p class="card-text"><b>Field of Study : </b>Lorem ipsum dolor sit amet.
      </p>
      <p class="card-text"><b>Graduation Date : </b>{{new Date}}
      </p>

      <div v-if="isExperienced">
      <p class="card-text"><b>Experience : </b>3 Years.
      </p>
      <p class="card-text"><b>Job Name : </b>Lorem ipsum dolor sit amet.
      </p>
      <p class="card-text"><b>Company Name : </b>Lorem ipsum dolor sit amet.
      </p>
      <p class="card-text"><b>Job Date : </b>{{new Date}}.
      </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isExperienced: true
        }
    },
}
</script>

<style scoped>
.main__card{
    margin-top: 3%;
    background: lightgray;
    margin-bottom: 3%;
}
</style>