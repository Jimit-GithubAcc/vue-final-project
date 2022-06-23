<template>
  <div class="container main__shade d-flex flex-column">
    <div class="row align-items-center justify-content-center" style="min-height: calc(100vh-66px);margin: 8%;">
        <div class="col-lg-6 mx-auto">
            <div class="input-group">
                <input type="search" class="form-control" placeholder="Search Jobs by title,location or description" v-model="$store.state.jobs.searchTerm">
                <span class="input-group-btn">
                    <button class="btn btn-success" type="button">Search</button>
                </span>
            </div>
        </div>
        <div class="col-lg-3 mx-auto">
            <modal-resume></modal-resume>
        </div>
        <div class="col-lg-3 mx-auto">
            <button class="btn btn-primary" @click="gotoProfileForm(user.id)">Create Your Profile</button>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import ModalResume from './ModalResume.vue';
export default {
  components: { ModalResume },
  data() {
    return {
      user: {
        id: null
      }
    }
  },
  mounted() {
    this.getUserDetail()
  },
  methods: {
    gotoProfileForm(id) {
        this.$router.push(`/createprofile/${id}`)
    },
    async getUserDetail(){
      // const response = await axios.get(`https://f129-103-240-35-190.in.ngrok.io/member-data`)
      const response = await axios.get('https://6253-103-240-35-190.in.ngrok.io/member-data')
      // console.log("Member-Data = ",response.data)
      this.user.id = response.data.user.id
    }
  }
  };
</script>

<style scoped>
.main__shade {
  height: 35vh;
  /*background: rgba(0, 0, 0, 0.5);*/
  background-image: conic-gradient(red, green, blue, black);
  margin-top: 3%;
}
</style>