<template>
  <div>
    <nav class="mt-2" v-if="checkUserLogin || checkCompanyLogin">
      <b-navbar
        variant="primary"
        type="dark"
        tag="ul"
        class="justify-content-around"
      >
        <b-navbar-brand
          class="top-left"
          tag="li"
          to="/"
          v-show="checkUserLogin"
        >
          Job Portal
        </b-navbar-brand>
        <b-navbar-nav tag="li" v-show="checkUserLogin">
          <b-nav-item to="/">Home</b-nav-item>
        </b-navbar-nav>

        <b-nav-item-dropdown
          text="Employeer"
          toggle-class="text-white"
          v-show="!isLoggedIn && checkCompanyLogin"
        >
          <b-dropdown-item to="/companyprofile/postjob"
            >Post a Job</b-dropdown-item
          >
          <b-dropdown-item to="/companyprofile/jobdetails"
            >Job details</b-dropdown-item
          >
          <b-dropdown-item to="/companyprofile/profiledetails"
            >Profile Details</b-dropdown-item
          >
        </b-nav-item-dropdown>

      <b-navbar-nav tag="li" v-if="!isLoggedIn && checkCompanyLogin">
        <b-nav-item to="/allcandidates">Candidates</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav tag="li" v-if="!isLoggedIn && checkCompanyLogin">
        <b-nav-item to="/companyprofile">Profile for Employers</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav tag="li" v-show="checkUserLogin">
        <b-nav-item-dropdown text="My Jobs" toggle-class="text-white" right>
          <b-dropdown-item to="/savedjobs">Saved Jobs</b-dropdown-item>
          <b-dropdown-item @click="goToAppliedJobs">Applied Jobs</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

        <b-navbar-nav tag="li">
          <!-- <b-button style="color: black; background-color: white;" to="/login" v-show="!checkUserLogin">Login</b-button> -->
          <b-nav-item-dropdown
            text="My Account"
            toggle-class="text-white"
            right
            v-show="checkUserLogin"
          >
            <b-dropdown-item @click="goToMyAccount">Profile</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav tag="li" v-show="checkUserLogin">
          <b-nav-item @click="logOut">Logout</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav tag="li" v-show="checkCompanyLogin">
          <b-nav-item @click="logOutCompany">Logout Company</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </nav>

    <nav class="mt-2" v-else>
      <b-navbar variant="primary" type="dark" class="justify-content-center">
        <b-navbar-brand @click="logInForboth"> Login </b-navbar-brand>
      </b-navbar>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      user: {
        id: null,
      },
    };
  },
  computed: {
    ...mapGetters("session_manager", ["isLoggedIn", "getUserID"]),
    checkUserLogin() {
      console.log("is User LoggedIn = ", this.isLoggedIn);
      return this.isLoggedIn;
    },
    checkLogin() {
      return window.localStorage.getItem("auth_token");
    },
    checkCompanyLogin() {
      console.log(
        "is Company loggedin = ",
        this.$store.getters["company_manager/isLoggedIn"]
      );
      return this.$store.getters["company_manager/isLoggedIn"];
    },
  },
  mounted() {
    this.getUserDetail();
  },
  methods: {
    ...mapActions("session_manager", ["logoutUser", "setLogin"]),
    ...mapActions("company_manager", ["logoutCompany"]),
    logOut() {
      this.logoutUser();
      this.$router.push("/firstloginpage");
      this.$toast.success("Logout successfull", { timeout: 3000 });
    },
    logOutCompany() {
      this.logoutCompany();
      this.$router.push("/firstloginpage");
      this.$toast.success("Logout successfull", { timeout: 3000 });
    },
    logInForboth() {
      this.$router.push("/firstloginpage");
      this.$toast.info("Job Portal logIns", { timeout: 3000 });
    },
    async getUserDetail() {
      const result = await axios.get(
        "https://job-portal-rails.herokuapp.com/member-data"
      );
      this.user.id = result.data.user.id;
    },
    goToMyAccount() {
      this.$router.push('/userprofile/' + this.getUserID);
    },
    goToAppliedJobs(){
      this.$router.push('/appliedjobs/' + this.getUserID)
    }
  },
};
</script>

<style scoped>
.nav-link {
  color: white !important;
}
.span {
  color: white !important;
}
</style>