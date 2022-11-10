<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import CardFood from "../components/CardFood.vue";
import { useCategoriesStore, useFoodStore } from "../stores/stores";

export default {
  name: "HomeView",
  data() {
    return {
      selectedCategory: "",
      perPage: 3,
      pageAccessedNow: 1,
      search: "",
    };
  },
  components: {
    CardFood,
  },
  methods: {
    ...mapActions(useFoodStore, ["fetchFoods"]),
    ...mapActions(useCategoriesStore, ["fetchCategories"]),
    previousHandler() {
      this.currentPage -= 1;
      this.fetchFoods(this.currentPage, this.selectedCategory, this.search);
    },
    nextHandler() {
      this.currentPage += 1;
      if (this.currentPage === this.totalPage) {
        this.pageAccessedNow = this.totalPage;
        this.currentPage = this.pageAccessedNow;
      }
      this.fetchFoods(this.currentPage, this.selectedCategory, this.search);
    },
    changePageNumber(index) {
      this.$router.push({
        name: "foods",
        query: {
          page: `${index}`,
        },
      });
      this.currentPage = index;
      this.fetchFoods(this.currentPage, this.selectedCategory, this.search);
    },
    filterByCategory(choosenCategory) {
      this.$router.push({
        name: "foods",
        query: {
          filter: `${choosenCategory}`,
        },
      });
      this.currentFilter = choosenCategory;
      this.fetchFoods(this.currentPage, this.selectedCategory, this.search);
    },
    searchFood(search) {
      this.$router.push({
        name: "foods",
        query: {
          search: `${search}`,
        },
      });
      this.currentSearch = search;
      this.fetchFoods(this.currentPage, this.selectedCategory, this.search);
    },
  },
  computed: {
    ...mapState(useFoodStore, ["foods"]),
    ...mapState(useFoodStore, ["totalPage"]),
    ...mapState(useCategoriesStore, ["categories"]),
    ...mapWritableState(useFoodStore, ["currentPage"]),
    ...mapWritableState(useFoodStore, ["currentFilter"]),
  },
  created() {
    const page = this.$route.query.page;
    const filter = this.$route.query.filter;
    const search = this.$route.query.search;
    this.fetchFoods(page, filter, search);
    this.fetchCategories();
  },
};
</script>

<template>
  <section
    class="pt-96 py-24 mt-12 relative w-full bg-[url('../assets/banner.jpg')] bg-cover bg-no-repeat"
  ></section>
  <div
    class="content bg-white pt-8 md:p-8 pb-12 ml-4 lg:max-w-lg w-96 lg:absolute top-96 left-40 border round-md border-slate-300"
  >
    <div class="flex justify-between font-semibold round-md text-3xl">
      <p>Mau pesan makan apa hari ini?</p>
    </div>
    <div class="flex pt-4">
      <form @submit.prevent="searchFood(this.search)" class="flex items-center">
        <label for="simple-search" class="sr-only">Cari makanan</label>
        <div class="relative w-full">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500"
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
          </div>
          <h1>{{ search }}</h1>
          <input
            type="text"
            v-model="search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Cari makanan"
            required
          />
        </div>
        <button
          type="submit"
          class="p-2.5 ml-2 text-sm font-medium text-white bg-[#00B14F] rounded-lg border border-[#00B14F] hover:bg-[#13984f] focus:ring-4 focus:outline-none focus:ring-[#13984f]"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </form>
    </div>
  </div>
  <section class="pt-20 px-40 bg-slate-50">
    <main class="flex-1 max-h-full p-5">
      <div class="flex py-4">
        <h2
          v-if="!selectedCategory"
          class="w-full text-3xl font-bold text-start md:text-4xl"
        >
          Semua Makanan
        </h2>
        <h2
          v-if="selectedCategory"
          class="w-full text-3xl font-bold text-start md:text-4xl"
        >
          {{ selectedCategory }}
        </h2>
        <div class="flex flex-row-reverse items-start">
          <ul class="flex items-center space-x-6">
            <li>
              <form>
                <select
                  @click="filterByCategory(this.selectedCategory)"
                  v-model="selectedCategory"
                  class="block py-2.5 px-0 w-56 text-ml text-gray-600 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600"
                >
                  <option
                    v-if="!currentFilter || currentFilter === ''"
                    selected
                    value=""
                  >
                    Semua Makanan
                  </option>
                  <option v-else selected value="">
                    {{
                      currentFilter === "" ? "Choose category" : currentFilter
                    }}
                  </option>
                  <option
                    v-for="category in categories"
                    :key="category"
                    :value="category.name"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </form>
            </li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
        <CardFood v-for="food in foods.rows" :key="food.id" :food="food" />
      </div>

      <div class="flex pt-4 flex-row-reverse items-center">
        <div class="flex items-center">
          <div class="flex items-center space-x-6">
            <div
              class="pt-4 isolate inline-flex -space-x-px rounded-md shadow-sm"
            >
              <a
                v-if="this.currentPage > 1"
                @click.prevent="previousHandler"
                class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                v-else
                class="bg-gray-200 relative inline-flex items-center rounded-l-md border border-gray-300 px-2 py-2 text-sm font-medium text-white"
                disabled
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                v-for="index in foods.totalPage"
                :key="index"
                @click.prevent="changePageNumber(index)"
                class="relative cursor-pointer hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                >{{ index }}</a
              >
              <a
                v-if="this.totalPage > 1 && this.currentPage !== this.totalPage"
                @click.prevent="nextHandler"
                class="cursor-pointer relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                v-else
                class="bg-gray-200 relative inline-flex items-center rounded-r-md border border-gray-300 px-2 py-2 text-sm font-medium text-white"
                disabled
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>
