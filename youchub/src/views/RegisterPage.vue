<script>
import { mapActions } from "pinia";
import { useAllStore } from "../stores/all";
import Navbar from "../components/Navbar.vue";

export default {
  name: "RegisterPage",
  components: {
    Navbar,
  },
  data() {
    return {
      newUser: {
        email: "",
        password: "",
        avatar: "",
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
  <div>
    <Navbar page="register" />
    <div class="w-75 m-auto text-center mt-5 pt-3">
      <h1 class="h3 mt-3 fs-2 fw-bolder">Sign up</h1>
      <p>to become a member and to join our community</p>
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
            >Password
            <span class="text-danger text-end fw-bold"> *</span></label
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
          <label for="register-avatar">Profile Picture URL </label>
          <input
            type="avatar"
            required
            v-model="newUser.avatar"
            class="form-control"
            id="register-avatar"
            placeholder="avatar image URL"
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
  </div>
</template>
