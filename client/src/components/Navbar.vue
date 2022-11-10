<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useClientStore } from "../stores/client";
export default {
  name: "navbar",
  computed: {
    ...mapWritableState(useClientStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useClientStore, ["logout"]),
    ceklogin() {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
  },
  created() {
    this.ceklogin();
  },
};
</script>

<template>
  <nav
    id="navbar"
    class="flex w-100 sticky bg-orange-500 drop-shadow-xl justify-between"
  >
    <div class="ml-4 flex flex-row">
      <img
        class="w-20"
        src="https://www.freepnglogos.com/uploads/shopee-logo/shopee-circle-logo-design-shopping-bag-13.png"
        alt=""
      />
      <button @click.prevent="this.$router.push({ name: 'home' })">
        <p
          class="font-bold text-xl ml-5 text-white text-center flex justify-center items-center pointer-events-auto hover:border-b-4"
        >
          Beranda
        </p>
      </button>
    </div>

    <ul class="flex flex-row items-center gap-5">
      <li>
        <a
          href="#"
          @click.prevent="this.$router.push({ name: 'cart' })"
          class="flex items-center p-2 text-base font-normal text-white dark:text-white hover:border-b-4"
        >
          <svg
            class="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            ></path>
          </svg>
          <span class="flex-1 ml-3 text-white whitespace-nowrap"
            ><span class="text-green-600 font-bold"></span>
          </span>
        </a>
      </li>
      <li>
        <a
          href="#"
          @click.prevent="this.$router.push({ name: 'invoice' })"
          class="flex items-center p-2 text-base font-normal text-white dark:text-white hover:border-b-4"
        >
          <svg
            class="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="flex-1 ml-3 text-white whitespace-nowrap"
            ><span class="text-green-600 font-bold"></span>
          </span>
        </a>
      </li>
      <li>
        <a
          v-if="isLogin === false"
          @click.prevent="this.$router.push({ name: 'login' })"
          href="#"
          class="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:border-b-4"
        >
          <svg
            aria-hidden="true"
            class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="flex-1 ml-3 text-white whitespace-nowrap">Login</span>
        </a>
      </li>
      <li>
        <a
          v-if="isLogin === true"
          @click.prevent="logout()"
          href="#"
          class="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:border-b-4"
        >
          <svg
            aria-hidden="true"
            class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="flex-1 ml-3 text-white whitespace-nowrap">LogOut</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
