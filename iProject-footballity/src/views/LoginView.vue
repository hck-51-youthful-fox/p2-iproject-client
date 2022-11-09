<script>
import { mapActions } from "pinia";
import { useFootballStore } from "../stores/football";

export default {
  name: "LoginView",
  data() {
    return {
      dataUser: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useFootballStore, ["changePage", "login"]),
  },
};
</script>
<template>
  <!-- ini login section -->
  <section
    class="justify-content-center bg bg-dark"
    style="padding-bottom: 200px; padding-top: 40px"
  >
    <div class="d-flex align-items-center pt-3 ps-3">
      <img class="me-2" src="../assets/football-2-256.png" />
      <h4 style="color: green"><strong>Footballity</strong></h4>
    </div>
    <div class="text-center">
      <h1>Log in and watch your favourite movies</h1>
      <p>watch the updatest and best movie all over the world</p>
    </div>
    <div id="login-form" class="d-flex col justify-content-center mt-5">
      <div style="width: 500px">
        <h2 style="color: white">Log in to your account</h2>
        <form
          id="login-form"
          method="post"
          @submit.prevent="login(dataUser)"
          class="col-sm-12"
        >
          <label for="email-login-form">Email</label>
          <input
            type="email"
            id="email-login-form"
            class="form-control"
            placeholder="Email"
            v-model="dataUser.email"
          />
          <label for="password-login-form">Password</label>
          <input
            type="password"
            id="username-login-form"
            class="form-control"
            placeholder="Password"
            v-model="dataUser.password"
          />
          <button class="btn btn-success mt-4" id="button">Submit</button>
        </form>
        <div class="d-flex mt-5">
          <p class="me-2" style="color: white">
            don't have any account? please
          </p>
          <a href="#" @click.prevent="changePage('/register')">Sign Up</a>
        </div>
      </div>
    </div>
  </section>
  <!-- ini akhir login section -->
</template>
<style></style>
