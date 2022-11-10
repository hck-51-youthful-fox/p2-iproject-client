<script>
import { mapState, mapActions } from "pinia";
import { useClientStore } from "../stores/client";
import Card from "../components/Card.vue";
// import Cart from "./Cart.vue";
export default {
  name: "dashboard",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(useClientStore, ["products"]),
  },
  methods: {
    ...mapActions(useClientStore, ["fetchDataProduct"]),
  },
  created() {
    const query = this.$route.query.search;
    const query2 = this.$route.query.page;
    this.fetchDataProduct(query2, query);
  },
  components: {
    Card,
  },
};
</script>

<template>
  <!-- <NavbarVue /> -->
  <!-- {{ this.$route.name }} -->
  <section
    id="dashboard"
    class="p-8 bg-gray-100 w-100 flex justify-center items-center flex-col"
  >
    <div class="w-10/12">
      <div
        class="border rounded overflow-hidden flex flex-row justify-between m-8"
      >
        <input
          type="text"
          v-model="search"
          class="px-4 py-2 bg-black text-white w-full"
          placeholder="Search title..."
        />
        <button
          @click.prevent="fetchDataProduct(0, search)"
          class="flex items-center justify-center px-4 border-l bg-black"
        >
          <svg
            class="h-4 w-4 text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="flex flex-row w-full mb-4 gap-5 justify-center flex-wrap">
      <Card v-for="product in products.rows" :product="product" />
    </div>
    <div class="flex flex-row justify-center gap-3">
      <button
        class="text-white p-5 bg-red-500 hover:bg-red-800 ease-out duration-300"
        v-for="product in products.totalPage"
        @click.prevent="fetchDataProduct(product, this.$route.query.search)"
      >
        {{ product }}
      </button>
    </div>
  </section>
</template>
