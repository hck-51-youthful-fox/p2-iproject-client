<script>
import { mapActions } from "pinia";
import { useNoteStore } from "../stores/counter";
export default {
  name: "RegisterPage",
  data() {
    return {
      dataRegistrasi: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useNoteStore, ["register"]),
    handleRegister() {
      this.register(this.dataRegistrasi);
    },
  },
};
</script>

<template>
  <div class="wrapper bg-white">
    <div class="h2 text-center">Register</div>
    <div class="h4 text-muted text-center pt-2">Enter your account details</div>
    <form @submit.prevent="handleRegister" method="post" class="container">
      <div class="form-group py-2">
        <div class="input-field">
          <span class="far fa-user p-2">Username</span>
          <input
            v-model="dataRegistrasi.username"
            type="text"
            placeholder="Username  Address"
            required
            class=""
          />
        </div>
      </div>
      <div class="form-group py-2">
        <div class="input-field">
          <span class="far fa-user p-2">Email</span>
          <input
            v-model="dataRegistrasi.email"
            type="text"
            placeholder="Email Address"
            required
            class=""
          />
        </div>
      </div>
      <div class="form-group py-1 pb-2">
        <div class="input-field">
          <span class="fas fa-lock p-2">Password</span>
          <input
            v-model="dataRegistrasi.password"
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
      <button class="btn btn-block text-center my-3">Sign Up</button>
      <div class="text-center pt-3 text-muted">
        have a account
        <a @click.prevent="$router.push('/login')" href="#">Login</a>
      </div>
    </form>
  </div>
</template>
