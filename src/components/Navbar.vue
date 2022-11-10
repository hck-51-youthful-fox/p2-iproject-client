<script>
import { mapActions, mapState } from "pinia";
import { useAllStore } from "../stores/all";

export default {
  name: "Navbar",
  data() {
    return {};
  },
  props: [""],
  emits: [""],
  computed: {
    ...mapState(useAllStore, ["status"]),
  },
  watch: {},
  methods: {
    ...mapActions(useAllStore, ["logout"]),
    ...mapActions(useAllStore, ["changePage", "fetchUserDetail"]),
    pindah() {
      this.$router.push(`/users/${this.status.id}`);
    },
  },
  created() {
    this.fetchUserDetail();
  },
};
</script>

<template>
  <header
    class="h-32 w-full flex items-center relative justify-center px-5 space-x-10"
  >
    <button
      @click.prevent="changePage('home')"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      Home
    </button>
    <button
      @click.prevent="pindah"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      {{ status.status }}
    </button>
    <div class="hidden relative md:block">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <svg
          class="w-5 h-5 text-gray-500"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <form>
        <input
          type="text"
          id="search-navbar"
          class="block p-2 pl-10 w-[600px] text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
      </form>
    </div>
    <div>
      <button
        @click.prevent="changePage('subscribe')"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Premium Button
      </button>
      <button
        @click.prevent="logout"
        class="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Log Out
      </button>
    </div>
  </header>
</template>
