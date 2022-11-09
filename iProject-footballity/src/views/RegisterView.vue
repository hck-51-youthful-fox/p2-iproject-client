<script>
import { mapActions } from "pinia";
import { useFootballStore } from "../stores/football";

export default {
  name: "RegisterView",
  data() {
    return {
      dataUser: {
        email: "",
        password: "",
        username: "",
      },
    };
  },
  methods: {
    ...mapActions(useFootballStore, ["register"]),
  },
};
</script>
<template>
  <!-- ini register section -->
  <section
    class="justify-content-center bg bg-dark"
    style="padding-bottom: 170px; padding-top: 40px"
  >
    <div class="d-flex align-items-center pt-3 ps-3">
      <img class="me-2" src="../assets/football-2-256.png" />
      <h4 style="color: green"><strong>Footballity</strong></h4>
    </div>
    <div class="text-center">
      <h1 style="color: white">Sign up and and make your dream team</h1>
    </div>
    <div id="register-form" class="d-flex col justify-content-center mt-5">
      <div style="width: 500px">
        <form
          id="register-form"
          @submit.prevent="register(dataUser)"
          class="col-sm-12"
        >
          <label for="username-register-form">Username</label>
          <input
            type="text"
            id="username-register-form"
            class="form-control"
            placeholder="Username"
            v-model="dataUser.username"
          />
          <label for="email-register-form">Email</label>
          <input
            type="email"
            id="email-register-form"
            class="form-control"
            placeholder="Email"
            v-model="dataUser.email"
          />
          <label for="password-register-form">Password</label>
          <input
            type="password"
            id="password-register-form"
            class="form-control"
            placeholder="Password"
            v-model="dataUser.password"
          />
          <button id="button" class="btn btn-success mt-4">Submit</button>
        </form>
      </div>
    </div>
  </section>
  <!-- ini akhir register section -->
</template>
