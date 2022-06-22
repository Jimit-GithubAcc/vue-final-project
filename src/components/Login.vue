<template>
  <b-container>
    <div>
      <b-card
        no-body
        class="overflow-hidden login__card w-100"
        style="background-image: linear-gradient(to left,rgb(242, 112, 156),rgb(255, 148, 114));box-shadow: 10px 10px 5px pink;">
        <b-row no-gutters style="align-items: center">
          <b-col md="6">
            <b-card-img
              src="https://picsum.photos/600/800/?image=20"
              alt="Image"
              class="rounded-0 login__card__image"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Login">
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
                            >Please enter valid email
                            address.</b-form-invalid-feedback
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
                            >This is a required field and must be atleast 6
                            characters.
                          </b-form-invalid-feedback>
                        </b-form-group>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col class="mt-4">
                        <b-button
                          variant="primary"
                          block
                          style="width: inherit"
                          type="submit"
                          >SignIn</b-button
                        >
                      </b-col>
                    </b-row>

                    <b-row>
                      <span class="mt-3"
                        >New on Portal?
                        <b-link @click="toRegister">Sign Up</b-link></span
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
    ...mapGetters("session_manager", [
      "getAuthToken",
      "getUserEmail",
      "getUserID",
      "isLoggedIn",
    ]),
  },
  methods: {
    ...mapActions("session_manager", ["loginUser"]),
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
    toRegister() {
      this.$router.push("/register");
      this.$toast("user signUp page", { timeout: 3000 });
    },
    onLogin() {
      this.$v.user.$touch();
      if (this.$v.user.$anyError) {
        return;
      }
      let data = {
        user: {
          email: this.user.email,
          password: this.user.password,
        },
      };
      this.loginUser(data).then((success) => {
        console.log(success);
        this.resetForm();
        this.$router.push("/");
        this.$toast.success("user login successful", { timeout: 3000 });
      }).catch((error) => {
        this.$toast.error("Credentials are not valid", { timeout: 3000 });
        console.log(error);
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
  max-width: 650px;
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

