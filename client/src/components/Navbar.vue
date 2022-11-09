<script>
import { RouterLink } from "vue-router";
import { useCustomerStore } from "../stores/stores";
import { mapActions, mapState } from "pinia";

export default {
  name: "Navbar",
  computed: {
    ...mapState(useCustomerStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["logout"]),
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
      <ul class="flex items-center space-x-2">
        <li>
          <RouterLink
            v-if="isLogin"
            :to="{ name: 'cart' }"
            type="button"
            class="text-gray-600 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none border font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-3 md:mr-0 mt-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            v-if="!isLogin"
            :to="{ name: 'login' }"
            type="button"
            class="text-black bg-white hover:bg-gray-200 focus:ring-4 border border-slate-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Masuk/Daftar
          </RouterLink>
        </li>
        <li>
          <button
            v-if="isLogin"
            @click="logout"
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
