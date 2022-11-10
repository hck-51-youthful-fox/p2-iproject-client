<script>
import { mapActions, mapState } from "pinia";
import navbar from "../components/Navbar.vue";
import { useDataStore } from "../stores/data";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useDataStore, ["registerUser"]),
  },
  components: {
    navbar,
  },
};
</script>
<template>
  <navbar />
  <section id="register-form">
    <div class="flex columns-1 flex-wrap">
      <div
        class="flex-1 h-screen bg-white flex justify-center flex items-center"
      >
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
              Sign Up and Typing
            </h2>
            <p
              class="mt-2 text-center text-sm text-gray-600 font-medium text-center"
            >
              Cheers Up Velas !
            </p>
          </div>
          <form action="" method="POST">
            <div class="mt-4">
              <div>
                <label class="block" for="Name">Username</label>
                <input
                  v-model="username"
                  id="register-username"
                  type="text"
                  placeholder="Enter your username ..."
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="mt-4">
                <label class="block" for="email">Email</label>
                <input
                  v-model="email"
                  id="register-email"
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
                  type="password"
                  placeholder="Enter your password ..."
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div class="flex">
                <button
                  class="w-full mt-12 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                  @click.prevent="registerUser(username, email, password)"
                >
                  Create Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
