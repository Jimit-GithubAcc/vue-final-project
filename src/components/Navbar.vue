<template>
  <nav class="mt-2">
    <b-navbar variant="primary" type="dark" tag="ul" class="justify-content-around">
      <b-navbar-brand href="#" class="topleft" tag="li" to="/">
        Job Portal
      </b-navbar-brand>
      <b-navbar-nav tag="li">
        <b-nav-item to="/">Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav tag="li">
        <b-nav-item to="/employeer">Employeer</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav tag="li">
        <b-nav-item to="/candidates">Candidates</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav tag="li">
        <b-nav-item to="/profile">Profile</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav tag="li">
        <b-button style="color: black; background-color: white;" to="/login" v-if="!checkLogin">Login</b-button>
        <b-nav-item-dropdown text="My Account" right v-else>
          <b-dropdown-item to="/profile">Profile</b-dropdown-item>
          <b-dropdown-item @click="logOut">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- <b-nav-item to="/login"> Login </b-nav-item>  -->
        <!-- <b-nav-item @click="logOut">Logout</b-nav-item> -->
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
        ...mapGetters["isLoggedIn"],
        checkLogin(){
            return window.localStorage.getItem("auth_token")
        }
    },
    methods: {
        ...mapActions(["logoutUser", "setLogin"]),
        logOut() {
            this.logoutUser()
            this.$router.push("/login")
        },
    }
};
</script>

<style scoped>
</style>