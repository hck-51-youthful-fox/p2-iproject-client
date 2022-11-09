<script>
import { mapActions, mapState } from "pinia";
import { useFootballStore } from "../stores/football";

export default {
  name: "CorouselComponents",
  methods: {
    ...mapActions(useFootballStore, ["fetchPremierLeague"]),
  },
  computed: {
    ...mapState(useFootballStore, ["plData"]),
  },
  created() {
    this.fetchPremierLeague();
  },
};
</script>
<template>
  <!-- <pre>{{ plData }}</pre> -->
  <!-- <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div v-for="clubs in plData" class="carousel-item active bg bg-dark">
        <img
          style="height: 200px"
          :src="clubs.Team.WikipediaLogoUrl"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ clubs.TeamName }}</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div> -->
  <div
    id="carouselExampleFade"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        id="club-image"
        v-for="clubs in plData"
        class="d-flex align-items-center carousel-item active bg bg-dark justify-content-center"
      >
        <p>{{ clubs.Team.Nickname1 }}</p>
        <img
          id="image-club"
          :src="clubs.Team.WikipediaLogoUrl"
          alt="..."
          class="me-3 ms-3"
        />
        <p>{{ clubs.TeamName }}</p>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleFade"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style>
#image-club {
  height: 200px;
  width: 200px;
}
</style>
