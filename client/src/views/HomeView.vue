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
      this.fetchFoods(this.currentPage, this.selectedCategory);
    },
    nextHandler() {
      this.currentPage += 1;
      if (this.currentPage === this.totalPage) {
        this.pageAccessedNow = this.totalPage;
        this.currentPage = this.pageAccessedNow;
      }
      this.fetchFoods(this.currentPage, this.selectedCategory);
    },
    changePageNumber(index) {
      this.$router.push({
        name: "foods",
        query: {
          page: `${index}`,
        },
      });
      this.currentPage = index;
      this.fetchFoods(this.currentPage, this.selectedCategory);
    },
    filterByCategory(choosenCategory) {
      this.$router.push({
        name: "foods",
        query: {
          filter: `${choosenCategory}`,
        },
      });
      this.currentFilter = choosenCategory;
      this.fetchFoods(this.currentPage, this.selectedCategory);
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
    this.fetchFoods(page, filter);
    this.fetchCategories();
  },
};
</script>

<template>
  <section
    class="pt-96 mt-12 relative w-full bg-[url('../assets/banner.jpg')] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="relative w-full px-4 py-32 sm:px-6 lg:flex md:h-full lg:items-center lg:px-8"
    ></div>
  </section>
  <section class="pt-4 px-80">
    <main class="flex-1 max-h-full p-5 overflow-hidden overflow-y-hidden">
      <div class="relative">
        <h2 class="w-full text-3xl font-bold text-center md:text-4xl">
          All Foods
        </h2>
      </div>
      <div class="flex pt-8 flex-row-reverse items-center">
        <div class="flex items-center">
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
                    Filter by category
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
                class="bg-gray-300 relative inline-flex items-center rounded-l-md border border-gray-300 px-2 py-2 text-sm font-medium text-white"
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
                class="bg-gray-300 relative inline-flex items-center rounded-r-md border border-gray-300 px-2 py-2 text-sm font-medium text-white"
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
