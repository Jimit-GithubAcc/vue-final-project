<template>
  <div class="container main__shade d-flex flex-column">
    <div class="row align-items-center justify-content-center" style="min-height: calc(100vh-66px);margin: 8%;">
        <div class="col-lg-6 mx-auto">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for...">
                <span class="input-group-btn">
                    <button class="btn btn-success" type="button">Search</button>
                </span>
            </div>
        </div>
        <div class="col-lg-3 mx-auto">
            <modal-resume></modal-resume>
        </div>
        <div class="col-lg-3 mx-auto">
            <button class="btn btn-primary" @click="gotoProfileForm">Create Your Profile</button>
        </div>
    </div>
</div>
</template>

<script>
import ModalResume from './ModalResume.vue';
export default {
  components: { ModalResume },
  methods: {
    gotoProfileForm() {
        this.$router.push("/createprofile")
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