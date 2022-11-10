<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";
import { useMatchStore } from "../stores/match";
export default {
  name: "NavBar",
  components: {},
  computed: {
    ...mapState(useUserStore, ["isLogin"]),
    ...mapState(useMatchStore, ["isPremium"]),
    infoUser() {
      return {
        status: localStorage.getItem("status"),
      };
    },
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),
    ...mapActions(useMatchStore, ["handlePayment"]),
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
          <li class="flex flex-row gap-2 text-black">
            <img
              class="w-8"
              src="https://ik.imagekit.io/kafax3vfm/png.monster-736_QOVGGPU1N.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668043737207"
              alt=""
            />
          </li>
          <li class="flex flex-row gap-2 text-black">ライブスコア !</li>
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
                v-if="infoUser.status === 'premium'"
                @click.prevent="$router.push('/standings')"
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >Standings</a
              >
            </li>
            <li>
              <a
                v-if="infoUser.status === 'free'"
                @click.prevent="handlePayment()"
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >Subscribe</a
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
