<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main";
import NewsCard from "../components/NewsCard.vue";

export default {
  name: "HomeView",
  components: {
    NewsCard,
  },
  computed: {
    ...mapState(useMainStore, ["ApiNews"]),
    ...mapWritableState(useMainStore, ["currentPage", "search"]),
  },
  methods: {
    ...mapActions(useMainStore, ["FetchNewsFromAPI", "searchPost"]),
  },
  created() {
    this.FetchNewsFromAPI();
  },
};
</script>

<template>
  <header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="text-center text-white">
        <h1 class="display-4 fw-bolder">News</h1>
        <p class="lead fw-normal text-white-50 mb-0">Find Latest News Here !</p>
      </div>
    </div>
  </header>
  <!-- Section-->
  <section class="py-3">
    <div class="container px-4 px-lg-5 mt-5">
      <!-- Search Field -->
      <div class="input-group mb-3" style="width: 18rem">
        <input
          type="text"
          class="form-control"
          placeholder="Find News..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          v-model="search"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          @click.prevent="searchPost"
        >
          Search
        </button>
      </div>
      <!-- End Search Field -->

      <!-- Section Card Use In every page that show news -->
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <div
          class="col mb-5"
          style="width: 400px"
          v-for="(news, index) in ApiNews"
          :key="news.id"
        >
          <NewsCard :news="news" :index="index" />
        </div>
      </div>
      <div class="pagination-div text-center mt-5">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              @click.prevent="FetchNewsFromAPI(currentPage - 1)"
              v-if="currentPage !== 1"
              >Previous</a
            >
          </li>
          <div class="" v-for="index in 10">
            <li class="page-item">
              <a class="page-link" @click.prevent="FetchNewsFromAPI(index)">{{
                index
              }}</a>
            </li>
          </div>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              @click.prevent="FetchNewsFromAPI(currentPage + 1)"
              v-if="currentPage > 0"
              >Next</a
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
