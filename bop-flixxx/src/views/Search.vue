<script>
import { mapState } from "pinia";
import { useShowStore } from "../stores/shows";
import MovieCard from "../components/MovieCard.vue";

export default {
  name: "Search",
  computed: {
    ...mapState(useShowStore, ["searched"]),
  },
  components: {
    MovieCard,
  },
};
</script>

<template>
  <div class="mb-5">
    <img
      src="https://irpp.org/wp-content/uploads/2022/02/Finding-the-Right-Job-A-Skills-Based-Approach-to-Career-Planning.jpg"
      class="d-block w-100"
      alt="Banner"
      style="height: 250px"
    />
  </div>
  <div class="row mx-0">
    <!-- <div class="col-2">
      <div class="mt-0">
        <div class="row">
          <div class="">
            <form method="get" @submit.prevent="searchSubmit">
              <div class="input-group mb-3 input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Job Name"
                  aria-describedby="button-addon2"
                  v-model="search"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  <span class="material-symbols-outlined"> search </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> -->
    <div class="col-10">
      <div class="row row-cols-3 row-cols-xs-3 g-4">
        <MovieCard v-for="show in searched" :key="show.id" :show="show" />
      </div>
    </div>
  </div>
  <!-- <div class="d-flex justify-content-end mr-5 mt-5">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li @click.prevent="previousPage" class="page-item">
          <a class="page-link" href="#">Previous</a>
        </li>
        <li v-for="index in searched" class="page-item">
          <a @click.prevent="fetchQuery(index)" class="page-link" href="#">{{
            index
          }}</a>
        </li>
        <li @click.prevent="nextPage" class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div> -->
</template>
