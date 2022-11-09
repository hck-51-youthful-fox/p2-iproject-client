<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/customer";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    };
  },
  methods: {
    ...mapActions(useUserStore, ["register"]),
    async registerButton() {
      let payload = {
        username: this.username,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        address: this.address,
      };
      this.register(payload)
    },
  },
};
</script>

<template>
  <section id="register-section">
    <div class="container-fluid register d-flex justify-content-center p-5">
      <form id="register-form" @submit.prevent="registerButton">
        <h1 style="margin-bottom: 45px">JOIN US NOW!</h1>
        <div class="form-group">
          <label>Username</label>
          <input
            type="text"
            class="form-control"
            id="register-username"
            placeholder="Enter Username"
            v-model="username"
            required
          />
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            class="form-control"
            id="register-email"
            placeholder="Enter Email"
            v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="register-password"
            placeholder="Password"
            v-model="password"
            required
          />
        </div>
        <div class="form-group">
          <label>Phone Number</label>
          <input
            input
            type="tel"
            pattern="[0-9]*"
            class="form-control"
            id="register-phoneNumber"
            placeholder="Enter phone number"
            v-model="phoneNumber"
            required
          />
        </div>
        <div class="form-group">
          <label>Address</label>
          <input
            type="text"
            class="form-control"
            id="register-address"
            placeholder="Enter address"
            v-model="address"
            required
          />
        </div>
        <div class="row pt-2 justify-content-between">
          <button
            type="button"
            @click="$router.push({ name: 'home' })"
            class="btn btn-danger col-4"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="btn btn-primary col-4"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
