<template>
  <section style="background-color: #eee">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img
                :src="user.user_detail ? user.user_detail.custom_profile :'https://picsum.photos/200/200/?image=41' "
                alt="avatar"
                class="rounded-circle img-fluid"
                style="width: 150px"
              />
              <h4 class="my-3">{{ user.user_detail.name }}</h4>
              <p class="text-muted mb-4">{{ user.email }}</p>
              <p class="text-muted mb-1">
                {{ user.user_detail.contact_number }}
              </p>
              <b-button
                variant="outline-primary"
                @click="editProfile(user.id)"
                v-if="checkUserLogin"
                >Edit Profile</b-button
              >
            </div>
          </div>

          <div class="card mb-4 mb-lg-0" v-if="user.skill.length !== 0">
            <div class="card-body p-2">
              <h5 class="mb-4">
                <span class="text-primary font-weight-bold me-1">Skills</span>
              </h5>
              <p class="mb-1">Web Design</p>

              <p class="mt-4 mb-1">Website Markup</p>

              <p class="mt-4 mb-1">One Page</p>

              <p class="mt-4 mb-1">Mobile Template</p>

              <p class="mt-4 mb-1">Backend API</p>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Full Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ user.user_detail.name }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ user.email }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Phone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {{ user.user_detail.contact_number }}
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6" v-if="user.experiences.length !== 0">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <h5 class="mb-3">
                    <span class="text-primary font-weight-bold me-1"
                      >Experience</span
                    >
                  </h5>

                  <div v-for="exp in user.experiences" :key="exp.id">
                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>Job Name : </b>{{ exp.title }}
                    </p>

                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>Company Name : </b>{{ exp.company_name }}
                    </p>

                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>Description : </b>{{ exp.description }}
                    </p>

                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>Employment Type : </b>{{ exp.employment_type }}
                    </p>

                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>Location : </b>{{ exp.location }}
                    </p>

                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>Start Date : </b>{{ exp.start_date }}
                    </p>
                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>End Date : </b>{{ exp.end_date }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-md-4"
              :class="user.experiences.length ? 'col-md-6' : 'col-md-12'"
            >
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <h5 class="mb-4">
                    <span class="text-primary font-italic me-1"
                      >Education Details</span
                    >
                  </h5>
                  <div v-for="edu in user.educations" :key="edu.id">
                    <p class="mb-1" style="font-size: 0.9rem">
                      <b>University Name : </b>{{ edu.school_name }}
                    </p>
                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>Degree : </b>{{ edu.degree }}
                    </p>
                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>Grade : </b>{{ edu.grade }}
                    </p>
                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>Start Date : </b>{{ edu.start_date }}
                    </p>
                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>End Date : </b>{{ edu.end_date }}
                    </p>
                    <p class="mt-4 mb-1" style="font-size: 0.9rem">
                      <b>Description : </b>{{ edu.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      id: null,
      user: {},
    };
  },
  computed: {
    ...mapGetters("session_manager", ["isLoggedIn", "getUserID"]),
    checkUserLogin() {
      console.log("is User LoggedIn = ", this.isLoggedIn);
      return this.isLoggedIn;
    },
  },
  mounted() {
    this.getUserDetails();
  },
  methods: {
    // ...mapActions("userData",["getUserDetails"]),
    editProfile() {
      this.$router.push("/editprofile/" + this.getUserID);
    },
    async getUserDetails() {
      const response = await axios.get(
        `https://job-portal-rails.herokuapp.com/user_details/${this.$route.params.id}`
      );
      this.user = response.data.data;
      console.log(response.data.data);
    },
  },
};
</script>

<style scoped>
</style>