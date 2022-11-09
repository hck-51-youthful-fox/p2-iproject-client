<script>
import { mapActions } from "pinia";
import { useBonfireStore } from "../stores/bonfire";
import CustomButton from "../components/CustomButton.vue";
import { RouterLink } from "vue-router";


export default {
  name: "LoginView",
  components: {
    CustomButton,
    RouterLink
  },
  data() {
    return {
      loginForm: {},
    };
  },
  methods: {
    ...mapActions(useBonfireStore, ["postLogin"]),
  },
  created() {
    this.loginForm = {
      email: "",
      password: "",
    };
  },
};
</script>

<template>
  <div class="card container mt-5 p-0 rounded">
    <div class="card-body bg-5">
      <section class="mx-3">
        <form @submit.prevent="postLogin(loginForm)">
          <h3>Login:</h3>
          <div class="form-group mt-3">
            <label for="login-email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="login-email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="loginForm.email"
            />
          </div>
          <div class="form-group mt-3">
            <label for="login-password">Password</label>
            <input
              type="password"
              class="form-control"
              id="login-password"
              placeholder="Password"
              v-model="loginForm.password"
            />
          </div>
          <CustomButton
            :name="'Login'"
            :type="'submit'"
            :displayClass="'btn btn-dark mt-3'"
          />
        </form>

        <div class="my-2">
          <p>Or login with Google :</p>
          <div id="google-login"></div>
        </div>

        <p class="mt-3">
          Don't have an account?
          <RouterLink :to="'/register'" class="mt-1">register here</RouterLink>
        </p>
      </section>
    </div>
  </div>
</template>
