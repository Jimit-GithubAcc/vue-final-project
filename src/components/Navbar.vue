<template>
  <nav class="mt-2">
    <b-navbar variant="primary" type="dark" tag="ul" class="justify-content-around">
      <b-navbar-brand href="#" class="topleft" tag="li" to="/">
        Job Portal
      </b-navbar-brand>
      <b-navbar-nav tag="li">
        <b-nav-item to="/">Home</b-nav-item>
      </b-navbar-nav>
      
      <b-nav-item-dropdown text="Employeer" toggle-class="text-white"> 
          <b-dropdown-item to="/companyprofile/postjob">Post a Job</b-dropdown-item>
          <b-dropdown-item to="/companyprofile/jobdetails">Job details</b-dropdown-item>
          <b-dropdown-item to="/companyprofile/profiledetails">Profile Details</b-dropdown-item>
        </b-nav-item-dropdown>

      <b-navbar-nav tag="li">
        <b-nav-item to="/allcandidates">Candidates</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav tag="li">
        <b-nav-item to="/companyprofile">Profile for Employers</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav tag="li">
        <b-button style="color: black; background-color: white;" to="/login" v-show="!checkUserLogin">Login</b-button>
        <b-nav-item-dropdown text="My Account" toggle-class="text-white" right v-show="checkUserLogin">
          <b-dropdown-item to="/userprofile">Profile</b-dropdown-item>
          <!-- <b-dropdown-item @click="logOut">Logout</b-dropdown-item> -->
        </b-nav-item-dropdown>
        <!-- <b-nav-item to="/login"> Login </b-nav-item>  -->
        <!-- <b-nav-item @click="logOut">Logout</b-nav-item> -->
      </b-navbar-nav>

        <b-navbar-nav tag="li" v-show="checkUserLogin">
        <b-nav-item @click="logOut">Logout</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav tag="li">
        <b-nav-item @click="logInForboth">Loginforboth</b-nav-item>
      </b-navbar-nav>
      <!-- <b-navbar-nav tag="li" v-else>
        <b-nav-item @click="logOut">Logout</b-nav-item>
      </b-navbar-nav> -->
       </b-navbar>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters("session_manager",["isLoggedIn"]),
        checkLogin(){
            return window.localStorage.getItem("auth_token")
        },
        checkUserLogin(){
          console.log("isLoggedIn = ", this.isLoggedIn)
          return this.isLoggedIn
        }
    },
    methods: {
        ...mapActions("session_manager",["logoutUser", "setLogin"]),
        logOut() {
            this.logoutUser()
            this.$router.push("/login")
            this.$toast.success("Logout successfull",{ timeout : 3000 });
        },
        logInForboth() {
          this.$router.push("/firstloginpage");
          this.$toast.info("Job Portal logIns",{ timeout : 3000 });
        }
    },
};
</script>

<style scoped>
.nav-link {
    color: white !important;
}
.span{
  color: white !important;
}
</style>