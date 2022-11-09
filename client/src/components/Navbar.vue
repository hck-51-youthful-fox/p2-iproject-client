<script>
import { RouterLink } from "vue-router";
import { useCartStore, useCustomerStore } from "../stores/stores";
import { mapActions, mapState } from "pinia";

export default {
  name: "Navbar",
  computed: {
    ...mapState(useCustomerStore, ["isLogin"]),
    ...mapState(useCartStore, ["cart"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["logout"]),
  },
};
</script>

<template>
  <nav
    class="flex justify-between px-44 py-4 items-center bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200"
  >
    <div>
      <RouterLink :to="{ name: 'home' }" class="flex items-center">
        <img
          src="../assets/logo_navbar.svg"
          class="mr-3 h-6 sm:h-9"
          alt="Makans Logo"
        />
      </RouterLink>
    </div>
    <div class="flex items-center">
      <ul class="flex items-center space-x-4">
        <li v-if="isLogin && cart.length !== 0">
          <RouterLink
            :to="{ name: 'cart' }"
            type="button"
            class="inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-[#00B14F] rounded-lg focus:bg-[#13984f] hover:bg-[#18a055] focus:ring-4 focus:outline-none focus:ring-[#19ac5b]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clip-rule="evenodd"
              />
            </svg>

            <div
              class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white"
            >
              {{ cart.length }}
            </div>
          </RouterLink>
        </li>
        <li v-if="isLogin && cart.length === 0">
          <RouterLink
            :to="{ name: 'cart' }"
            type="button"
            class="inline-flex relative items-center p-3 text-sm font-medium text-center text-gray-500 hover:bg-gray-100 bg-white rounded-lg focus:ring-4 focus:outline-none border border-slate-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clip-rule="evenodd"
              />
            </svg>
          </RouterLink>
        </li>
        <li v-if="!isLogin">
          <RouterLink
            :to="{ name: 'login' }"
            type="button"
            class="text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-100 focus:ring-4 border border-slate-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Masuk/Daftar
          </RouterLink>
        </li>
        <li v-if="isLogin">
          <button
            @click="logout"
            type="button"
            class="text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-100 focus:ring-4 border border-slate-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
