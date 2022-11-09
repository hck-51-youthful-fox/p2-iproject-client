<script>
import { mapActions } from "pinia";
import { useNoteStore } from "../stores/counter";
export default {
  name: "LoginPage",
  data() {
    return {
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useNoteStore, ["login"]),
    handleLogin() {
      this.login(this.dataLogin);
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>

<template>
  <div class="wrapper bg-white">
    <div class="h2 text-center">Login</div>
    <div class="h4 text-muted text-center pt-2">Enter your login details</div>
    <form @submit.prevent="handleLogin" method="post" class="container">
      <div class="form-group py-2">
        <div class="input-field">
          <span class="far fa-user p-2">login</span>
          <input
            v-model="dataLogin.email"
            type="text"
            placeholder="Username or Email Address"
            required
            class=""
          />
        </div>
      </div>
      <div class="form-group py-1 pb-2">
        <div class="input-field">
          <span class="fas fa-lock p-2">Password</span>
          <input
            v-model="dataLogin.password"
            type="text"
            placeholder="Enter your Password"
            required
            class=""
          />
          <button class="btn bg-white text-muted">
            <span class="far fa-eye-slash"></span>
          </button>
        </div>
      </div>
      <button class="btn btn-block text-center my-3">Log in</button>
      <div class="text-center pt-3 text-muted">
        Not a member?
        <a @click.prevent="$router.push('/register')" href="#">Sign up</a>
      </div>
    </form>
  </div>
</template>
