<template>
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
              src="https://picsum.photos/600/600/?image=3"
              alt="Image"
              class="rounded-0 login__card__image"
            ></b-card-img>
          </b-col>

          <b-col md="6">
            <b-card-body title="Register">
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
                            v-model="$v.user.email.$model"
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
                            v-model="$v.user.password.$model"
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
                            v-model="$v.user.confPassword.$model"
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
                        <b-link to="/">Sign In</b-link></span
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
</template>

<script>
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        // name: "",
        email: "",
        password: "",
        confPassword: "",
      },
    };
  },
  validations: {
    user: {
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
    ...mapActions("session_manager",["registerUser"]),
    validateState(name) {
      const { $dirty, $error } = this.$v.user[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.user = {
        // name: "",
        email: "",
        password: "",
        confPassword: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    async onSignup() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        return;
      }
      let data = {
        user: {
          email: this.user.email,
          password: this.user.password,
          password_confirmation: this.user.confPassword
        }
      }
      this.registerUser(data);
      this.resetForm();
      this.$router.push("/")
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
