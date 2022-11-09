<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  name: "NavBar",
  components: {},
  computed: {
    ...mapState(useUserStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),
  },
};
</script>

<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded flex flex-row sticky top-0 z-30"
  >
    <div class="container flex flex-wrap justify-start mx-auto">
      <div
        class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-2"
      >
        <ul
          class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"
        >
          <li class="flex flex-row gap-2 text-black">Live-Score</li>
          <div class="flex justify-center items-center gap-5">
            <li class="mx-auto">
              <a
                @click.prevent="$router.push('/')"
                href="#"
                class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
                >Playing-Now</a
              >
            </li>
            <li>
              <a
                @click.prevent="$router.push('/match')"
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >NBA league</a
              >
            </li>
            <li>
              <a
                @click.prevent="$router.push('/standings')"
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >Standings</a
              >
            </li>
          </div>
        </ul>
      </div>
    </div>

    <div class="flex flex-row gap-5 justify-center items-center mr-5">
      <div v-if="isLogin === true">
        <div class="">
          <a
            @click.prevent="logout"
            href="#"
            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >Logout</a
          >
        </div>
      </div>

      <div class="flex gap-5">
        <div v-if="isLogin === false" class="">
          <a
            @click.prevent="$router.push('/register')"
            href="#"
            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >Register</a
          >
        </div>
        <div v-if="isLogin === false">
          <a
            @click.prevent="$router.push('/login')"
            href="#"
            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >Login</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
