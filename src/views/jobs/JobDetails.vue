<template>
  <div class="card mx-auto main__card" style="width: 40rem">
    
    <div class="card-body bg-info">
      <h3 class="card-title">{{job.job_title}}</h3>

      <p class="card-text"><b>Description : </b>
        {{job.job_description}}
      </p>
      <p v-if="job.company_detail"><b>Company : </b>{{job.company_detail.name}}</p>
      <p class="card-text"><b>Location : </b> {{job.location}}</p>
      <p class="card-text"><b>Experience needed : </b>{{job.year_of_exp}}
      </p>
      <p class="card-text"><b>Last Date to Apply : </b>{{job.last_date_to_apply}}
      </p>
      <p class="card-text" v-if="job.job_application_link"><b>Link : </b>{{job.job_application_link}}
      </p>
                       <p> <modal-apply :id="job.id"> </modal-apply> </p>
     <!-- <b-button class="btn btn-success rounded-2" @click="applyForJob"> 
        Apply
      </b-button> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ModalApply from './ModalApply.vue';
// import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      job: {}
    }
  },
  components: { ModalApply },
  computed : {
    // ...mapGetters("jobs",["getJob"])
  },
  methods: {
    // ...mapActions("jobs",["getSingleJob"]),
    applyForJob() {
      this.$toast.success("Job applied successfully.",{ timeout : 3000 });
    },
    async getSingleJob(){
      const id = this.$route.params.id
      // const result = await axios.get(`https://f129-103-240-35-190.in.ngrok.io/jobs/${id}`)
      const result = await axios.get(`https://c9de-103-240-35-190.in.ngrok.io/jobs/${id}`)
      this.job = result.data.data
    }
  },
  mounted() {
    this.getSingleJob()
  },
};
</script>

<style scoped>
.main__card{
    margin-top: 6%;
}
</style>