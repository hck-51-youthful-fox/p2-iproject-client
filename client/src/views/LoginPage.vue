<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { GoogleLogin } from "vue3-google-login";
import { useUserStore } from "../stores/user";
export default {
  name: "loginPage",
  components: { GoogleLogin },
  computed: {
    ...mapWritableState(useUserStore, ["email", "password"]),
  },
  methods: {
    ...mapActions(useUserStore, ["handleLogin", "handleCredentialResponse"]),
    callback(response) {
      this.handleCredentialResponse(response);
    },
  },
};
</script>

<template>
  <div class="border-0" id="login">
    <section
      class="bg-gray-50 dark:bg-gray-900 bg-cover"
      style="
        background-image: url(https://www.pixelstalk.net/wp-content/uploads/images6/NBA-Wallpaper-Desktop.jpg);
      "
    >
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Login
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your email</label
                >
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div class="flex flex-row gap-2">
                <button
                  @click.prevent="handleLogin"
                  type="submit"
                  class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Login
                </button>
                <button
                  @click.prevent="$router.push('/register')"
                  type="button"
                  class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Create account ?
                </button>
              </div>
              <div class="w-full">
                <GoogleLogin :callback="callback" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
