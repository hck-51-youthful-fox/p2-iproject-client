<script>
import NewsCard from "../components/NewsCard.vue";
export default {
  name: "HomeView",
  components: {
    NewsCard,
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
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
      <!-- End Search Field -->

      <!-- Section Card Use In every page that show news -->
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
        <div class="col mb-5" style="width: 400px" v-for="index in 3">
          <NewsCard />
        </div>
      </div>
    </div>
  </section>
</template>
