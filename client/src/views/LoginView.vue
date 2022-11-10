<script>
import { mapActions } from "pinia";
import { useCustomerStore } from "../stores/stores";
import { RouterLink } from "vue-router";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCustomerStore, ["login"]),
    onClickLogin() {
      this.login({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<template>
  <section class="bg-cover bg-slate-50 bg-fixed">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2
            class="text-center text-3xl font-bold tracking-tight text-gray-900"
          >
            Masuk
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Masuk akun kamu untuk menyelesaikan pembayaran pesananmu
          </p>
          <form @submit.prevent="onClickLogin" class="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div class="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="login-email" class="sr-only"
                  >makans@makans.id</label
                >
                <input
                  v-model="email"
                  type="email"
                  class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-400 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label for="login-password" class="sr-only">Password</label>
                <input
                  v-model="password"
                  type="password"
                  autocomplete="off"
                  required
                  class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-400 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-grey-600 focus:ring-grey-500"
                />
                <label
                  for="remember-me"
                  class="ml-2 block text-sm text-gray-900"
                  >Remember me</label
                >
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="group relative flex w-full justify-center rounded-md border border-transparent bg-[#00B14F] py-2 px-4 text-sm font-medium text-white hover:bg-[#13984f] focus:outline-none focus:ring-2 focus:bg-[#13984f] focus:ring-offset-2"
              >
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                Masuk
              </button>
            </div>
            <!-- <div class="flex justify-center items-center">
              <span class="w-full border bg-gray-200"></span>
              <p class="px-4 text-center text-gray-600">or</p>
              <span class="w-full border bg-gray-200"></span>
            </div> -->
            <p class="mt-2 text-center text-sm text-gray-600">
              Belum memiliki akun?
              <RouterLink
                :to="{ name: 'register' }"
                href="#"
                class="font-medium text-primary-900 hover:underline"
                >Daftar sekarang</RouterLink
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
