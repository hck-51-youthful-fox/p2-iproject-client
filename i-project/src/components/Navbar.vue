<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { useDataStore } from "../stores/data";

export default {
  name: "Navbar",
  computed: {
    ...mapState(useDataStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useDataStore, ["logoutSection"]),
  },
};
</script>
<template>
  <nav
    class="sticky w-full z-20 top-0 left-0 top-0 flex bg-white border-gray-200 px-2 sm:px-4 py-2.5 flex bg-white justify-center drop-shadow-xl"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <RouterLink
          to="/"
          class="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
        >
          PCPeeker
        </RouterLink>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
        >
          <span class="block relative w-6 h-px rounded-sm bg-white"></span>
          <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        </button>
      </div>
      <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <RouterLink
              to="/login"
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-black hover:opacity-75"
            >
              <span class="ml-2" v-if="isLogin === false">Sign In</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/register"
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-black hover:opacity-75"
            >
              <span class="ml-2" v-if="isLogin === false">Sign Up</span>
            </RouterLink>
          </li>
          <li class="nav-item" v-if="isLogin !== false">
            <a
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-black border border-red-900"
            >
              <span class="ml-2">Welcome Enthusiast!</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-black hover:opacity-75 cursor-pointer"
            >
              <span
                class="ml-2"
                @click.prevent="logoutSection"
                v-if="isLogin !== false"
                >Logout</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
