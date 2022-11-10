<script>
import { mapActions, mapState } from "pinia";
import navbar from "../components/Navbar.vue";
import { useDataStore } from "../stores/data";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useDataStore, ["login"]),
  },
  components: {
    navbar,
  },
};
</script>
<template>
  <navbar />
  <section id="login-form">
    <div class="flex-1 h-screen bg-white flex justify-center flex items-center">
      <div class="w-full max-w-md space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="../assets/vga.svg"
            alt="d'Movie"
          />
          <h2
            class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
          >
            Login and Typing
          </h2>
          <p
            class="mt-2 text-center text-sm text-gray-600 font-medium text-center"
          >
            Log in on your profile to autocomplete your purchase order with your
            personal data
          </p>
        </div>
        <form>
          <div class="mt-4">
            <label class="block" for="Name">Email</label>
            <input
              v-model="email"
              name="login-email"
              type="text"
              placeholder="Enter your email ..."
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="mt-4">
            <label class="block">Password</label>
            <input
              v-model="password"
              id="register-password"
              name="login-password"
              type="password"
              placeholder="Enter your password ..."
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="flex">
            <button
              type="submit"
              id="login"
              class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              @click.prevent="login(email, password)"
            >
              Login
            </button>
          </div>
        </form>
        <div id="buttonDiv"></div>
      </div>
    </div>
  </section>
</template>
