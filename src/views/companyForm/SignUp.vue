<template>
<section>
  <b-container class="mt-4">
    <div>
    <b-card
      style="background-image: linear-gradient(to left, #decba4, #3e5151);box-shadow: 5px 5px 5px gray;"
      no-body
      class="overflow-hidden login__card w-100 mb-3"
    >
      <b-row no-gutters style="align-items: center;">
      <b-col md="6">
            <b-card-img
              src="https://i.picsum.photos/id/1031/5446/3063.jpg?hmac=Zg0Vd3Bb7byzpvy-vv-fCffBW9EDp1coIbBFdEjeQWE"
              alt="Image" style="height:53vh;"
              class="rounded-0 login__card__image"
            ></b-card-img>
          </b-col>

          <b-col md="6">
            <b-card-body title="Company Register">
              <b-card-text>
                <b-form @submit.stop.prevent="onSignup">
                  <b-row>

                  <!-- <b-row>
                      <b-col>
                        <b-form-group class="mt-3">
                          <b-form-input
                            type="text"
                            placeholder="Enter Your Name"
                            class="p-2"
                            v-model="$v.user.name.$model"
                            :state="validateState('name')"
                            required
                          >
                          </b-form-input>
                          <b-form-invalid-feedback
                    id="input-1-live-feedback"
                    style="font-weight: bold"
                    >This field is required.</b-form-invalid-feedback
                  >
                          
                        </b-form-group>
                      </b-col>
                    </b-row> -->

                    <b-row>
                      <b-col>
                        <b-form-group class="mt-3">
                          <b-form-input
                            type="email"
                            placeholder="Enter Email"
                            class="p-2"
                            v-model="$v.company.email.$model"
                            :state="validateState('email')"
                            required
                          >
                          </b-form-input>
                          <b-form-invalid-feedback
                    id="input-1-live-feedback"
                    style="font-weight: bold"
                    >Please enter valid email address.</b-form-invalid-feedback
                  >
                          
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col>
                        <b-form-group class="mt-3">
                          <b-form-input
                            type="password"
                            placeholder="Enter Password"
                            class="p-2"
                            v-model="$v.company.password.$model"
                            :state="validateState('password')"
                            required
                          >
                          </b-form-input>
                          <b-form-invalid-feedback
                    id="input-1-live-feedback"
                    style="font-weight: bold"
                    >This is a required field and must be atleast 6 characters.
                  </b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col>
                        <b-form-group class="mt-3">
                          <b-form-input
                            type="password"
                            placeholder="ReEnter Password"
                            class="p-2"
                            v-model="$v.company.confPassword.$model"
                            :state="validateState('confPassword')"
                            required
                          >
                          </b-form-input>
                          <b-form-invalid-feedback
                    id="input-1-live-feedback"
                    style="font-weight: bold"
                    >This field is required and same as the password.</b-form-invalid-feedback
                  >
                          
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col class="mt-4">
                        <b-button variant="primary" block style="width: inherit" type="submit"
                          >SignUp</b-button
                        >
                      </b-col>
                    </b-row>

                    <b-row>
                      <span class="mt-3"
                        >Already on Portal?
                        <b-link to="/employerlogin">Sign In</b-link></span
                      >
                    </b-row>
                  </b-row>
                </b-form>
              </b-card-text>
            </b-card-body>
          </b-col>
      </b-row>
    </b-card>
    </div>
  </b-container>
  
 </section>
</template>

<script>
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      company: {
        // name: "",
        email: "",
        password: "",
        confPassword: "",
      },
    };
  },
  validations: {
    company: {
      // name: {
      //   required,
      //   minLength: minLength(3),
      // },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6),
      },
      confPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  computed: {},
  methods: {
    ...mapActions("company_manager",["registerCompany"]),
    validateState(name) {
      const { $dirty, $error } = this.$v.company[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.company = {
        // name: "",
        email: "",
        password: "",
        confPassword: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSignup() {
      this.$v.company.$touch();
      if (this.$v.company.$anyError) {
        return;
      }
      let data = {
        company: {
          email: this.company.email,
          password: this.company.password,
          password_confirmation: this.company.confPassword
        }
      }
      this.registerCompany(data).then((success) => {
        console.log(success);
        this.resetForm();
        this.$toast.success("Employeer registration successful",{ timeout : 3000 });
        this.$router.push("/companyprofile")
      }).catch((error) => {
        console.log(error)
        this.$toast.error("User Already exists",{ timeout : 3000 });
      });
      
    },
    
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  margin: 5px;
  color: white;
}
.login__card {
  max-width: 830px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
}
@media only screen and (max-width: 768px) {
  .login__card {
    margin-top: auto;
    width: 100%;
  }
  
}
</style>
