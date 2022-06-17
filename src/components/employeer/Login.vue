<template>
 <div>
    <b-container>
    <div>
      <b-card
        no-body
        class="overflow-hidden login__card w-100 bg-img"
        style="box-shadow: 10px 10px 5px grey;">
        <b-row no-gutters style="margin-top: auto; margin-bottom: auto; justify-content: center;">
           <b-col md="6">
            <b-card-body title="Employeer Login" body-text-variant="light">
              <b-card-text>
                <b-form @submit.stop.prevent="onLogin">
                  <b-row>
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
                      <b-col class="mt-4">
                        <b-button variant="primary" block style="width: inherit" type="submit"
                          >SignIn</b-button
                        >
                      </b-col>
                    </b-row>

                    <b-row>
                      <span class="mt-3"
                        >New on Portal?
                        <b-link to="/register">Sign Up</b-link></span
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

 </div>
</template>
<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    user: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  computed: {
    ...mapGetters(["getAuthToken", "getUserEmail", "getUserID", "isLoggedIn"])
  },
  methods: {
    ...mapActions(["loginUser"]),
    validateState(name) {
      const { $dirty, $error } = this.$v.user[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.user = {
        email: "",
        password: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onLogin() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        return;
      }
      let data = {
        user: {
          email: this.user.email,
          password: this.user.password
        }
      }
      this.loginUser(data)
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
  max-width: 800px;
  height:70vh;
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
.bg-img {
	background-image: url("https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ");
	background-size: cover;   background-position: center;

}
</style>
