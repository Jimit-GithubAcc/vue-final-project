<template>
  <section style="background-color: #eee">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img
                src="https://picsum.photos/200/200/?image=41"
                alt="avatar"
                class="rounded-circle img-fluid"
                style="width: 150px"
              />
              <h4 class="my-3">Candidate Name</h4>
              <p class="text-muted mb-1">Full Stack Developer</p>
              <p class="text-muted mb-4">Location</p>
              <b-button variant="outline-primary" @click="editProfile"
                >Edit Profile</b-button
              >
            </div>
          </div>

          <!--Experience Info-->
          <div class="card mb-4 mb-lg-0">
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

        <!--Candidate Info-->
        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Full Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">Candidate Name</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">example@example.com</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Phone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">(097) 234-5678</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Mobile</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">(098) 765-4321</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Address</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis, esse!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!--Candidate Skills-->
          <div class="row">
            <div class="col-md-6" v-if="isExperience">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <h5 class="mb-3">
                    <span class="text-primary font-weight-bold me-1"
                      >Experience - 3 Years</span
                    >
                  </h5>
                  <p class="mb-1 mt-4">
                    <b>Job Name : </b>Lorem ipsum dolor, sit amet
                  </p>

                  <p class="mt-4 mb-1" style="font-size: 0.9rem">
                    <b>Company Name : </b>Lorem ipsum dolor, sit amet
                  </p>

                  <p class="mt-4 mb-1" style="font-size: 0.9rem">
                    <b>Location : </b>Lorem ipsum dolor, sit ametconsectetur
                    adipisicing elit. Ducimus, itaque!
                  </p>

                  <p class="mt-4 mb-1" style="font-size: 0.9rem">
                    <b>Start Date : </b>{{ new Date() }}
                  </p>
                  <p class="mt-4 mb-1" style="font-size: 0.9rem">
                    <b>End Date : </b>{{ new Date() }}
                  </p>
                </div>
              </div>
            </div>

            <!--Education Details-->
            <div class="col-md-6" :class="showExperience">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <h5 class="mb-4">
                    <span class="text-primary font-italic me-1"
                      >Education Details</span
                    >
                  </h5>
                  <p class="mb-1" style="font-size: 0.9rem">
                    <b>University Name : </b>Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Ducimus, itaque!
                  </p>
                  <p class="mt-4 mb-1" style="font-size: 0.9rem">
                    <b>Field : </b>Lorem ipsum dolor sit amet.
                  </p>
                  <p class="mt-4 mb-1" style="font-size: 0.9rem">
                    <b>Grade : </b>9 CGPA
                  </p>
                  <p class="mt-4 mb-1" style="font-size: 0.9rem">
                    <b>Start Date : </b>{{ new Date() }}
                  </p>
                  <p class="mt-4 mb-1" style="font-size: 0.9rem">
                    <b>End Date : </b>{{ new Date() }}
                  </p>
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
export default {
  data() {
    return {
      isExperience: true,
    };
  },
  computed: {
    showExperience(){
        return this.isExperience === true ? 'col-md-6' : 'col-md-12'
    }
  },
  methods: {
    editProfile() {
      this.$router.push("/createprofile");
    },
  },
};
</script>

<style scoped>
</style>