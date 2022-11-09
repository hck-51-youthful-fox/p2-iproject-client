<script>
import { RouterLink } from "vue-router";
import { useCustomerStore } from "../stores/stores";
import { mapActions, mapState } from "pinia";

export default {
  name: "Navbar",
  computed: {
    ...mapState(useCustomerStore, ["isLogin"]),
  },
};
</script>

<template>
  <nav
    class="flex justify-between px-48 py-4 items-center bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200"
  >
    <RouterLink :to="{ name: 'home' }" class="flex items-center">
      <img src="../assets/logo.svg" class="mr-3 h-6 sm:h-9" alt="Sadida Logo" />
    </RouterLink>
    <div class="flex items-center">
      <ul class="flex items-center space-x-6">
        <li class="font-semibold text-gray-700">
          <RouterLink
            :to="{ name: 'home' }"
            class="block py-2 mr-4 pl-3 text-grey-900 rounded md:bg-transparent md:text-grey-900 md:p-0 text-lg font"
            aria-current="page"
            >Home</RouterLink
          >
        </li>
        <li class="font-semibold text-gray-700">
          <RouterLink
            v-if="isLogin"
            :to="{ name: 'cart' }"
            class="block py-2 pr-4 pl-3 text-grey-900 rounded md:bg-transparent md:text-grey-900 md:p-0 text-lg font"
            aria-current="page"
            >Cart</RouterLink
          >
        </li>
        <li>
          <RouterLink
            v-if="!isLogin"
            :to="{ name: 'login' }"
            type="button"
            class="text-black bg-white hover:bg-gray-200 focus:ring-4 border border-slate-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Login
          </RouterLink>
        </li>

        <li>
          <RouterLink
            v-if="!isLogin"
            :to="{ name: 'register' }"
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Register
          </RouterLink>
        </li>
        <li>
          <button
            v-if="isLogin"
            type="button"
            class="text-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none border font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
