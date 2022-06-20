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
            <b-card-body title="Company Login" body-text-variant="light">
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
                      <b-col class="mt-4">
                        <b-button variant="primary" block style="width: inherit" type="submit"
                          >SignIn</b-button
                        >
                      </b-col>
                    </b-row>

                    <b-row>
                      <span class="mt-3 text-info"
                        >New on Portal?
                        <b-link @click="toRegister" class="text-info">Sign Up</b-link></span
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
      company: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    company: {
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
    ...mapGetters(["getAuthToken", "isLoggedIn"])
  },
  methods: {
    ...mapActions("company_manager",["loginCompany"]),
    validateState(name) {
      const { $dirty, $error } = this.$v.company[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.company = {
        email: "",
        password: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
        });
    },
    toRegister(){
     this.$router.push("/employersignup");
      this.$toast("Employeer signUp page",{ timeout : 3000 });
    },
    onLogin() {
      this.$v.company.$touch();
      if (this.$v.company.$anyError) {
        return;
      }

      let data = {
        company: {
          email: this.company.email,
          password: this.company.password
        }
      }
      this.loginCompany(data)
      this.resetForm();
      this.$router.push("/companyprofile")
      this.$toast.success("Employeer login successful",{ timeout : 3000 });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  margin: 5px;
  
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
