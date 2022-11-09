<script>
import { mapActions } from "pinia";
import { useAllStore } from "../stores/all";

export default {
  name: "RegisterPage",
  data() {
    return {
      newUser: {
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(useAllStore, ["register"]),
  },
  created() {
    this.newUser = {
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    };
  },
};
</script>

<template>
  <div class="w-100 m-auto text-center mt-5 pt-3">
    <h1 class="h3 mt-3 fs-2 fw-bolder">Sign up</h1>
    <p>to enjoy all the benefits of an IDEA account</p>
    <form class="w-50 m-auto px-5 my-4" @submit.prevent="register(newUser)">
      <div class="form-group mb-2 d-flex flex-column align-items-start">
        <label for="register-email"
          >Email <span class="text-danger text-end fw-bold"> *</span></label
        >
        <input
          type="email"
          required
          v-model="newUser.email"
          class="form-control"
          id="register-email"
          placeholder="yourname@example.com"
          autocomplete="off"
        />
      </div>
      <div class="form-group mb-2 d-flex flex-column align-items-start">
        <label for="register-password"
          >Password <span class="text-danger text-end fw-bold"> *</span></label
        >
        <input
          type="password"
          required
          v-model="newUser.password"
          class="form-control"
          id="register-password"
          autocomplete="off"
        />
      </div>
      <div class="form-group mb-2 d-flex flex-column align-items-start">
        <label for="register-address"
          >Address <span class="text-danger text-end fw-bold"> *</span></label
        >
        <input
          type="text"
          required
          v-model="newUser.address"
          class="form-control"
          id="register-address"
          autocomplete="off"
        />
      </div>
      <div class="form-group mb-2 d-flex flex-column align-items-start">
        <label for="register-phone"
          >Phone Number<span class="text-danger text-end fw-bold">
            *</span
          ></label
        >
        <input
          type="text"
          required
          v-model="newUser.phone"
          class="form-control"
          id="register-phone"
          autocomplete="off"
        />
      </div>
      <button
        class="w-100 my-3 btn btn-lg btn-dark rounded-pill fw-bold"
        type="submit"
      >
        Sign up
      </button>
    </form>
    <p class="mt-3" text-muted>
      Already have an account? Log in
      <a
        href="#"
        class="text-decoration-none"
        @click.prevent="$router.push('/login')"
        >here</a
      >
    </p>
  </div>
</template>
