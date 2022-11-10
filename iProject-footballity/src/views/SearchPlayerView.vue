<script>
import { mapState, mapActions } from "pinia";
import Navbar from "../components/Navbar.vue";
import { useFootballStore } from "../stores/football";
import FootballCardComponents from "../components/FootballCardComponents.vue";

export default {
  name: "SearchPlayerView",
  data() {
    return {
      playerSearch: "",
    };
  },
  components: {
    Navbar,
    FootballCardComponents,
  },
  computed: {
    ...mapState(useFootballStore, ["searchPlayerData"]),
  },
  methods: {
    ...mapActions(useFootballStore, ["searchPlayerFunction"]),
  },
  created() {
    this.searchPlayerFunction(this.playerSearch);
  },
};
</script>
<template>
  <Navbar />
  <section class="bg bg-dark" style="padding-top: 50px; padding-bottom: 500px">
    <!-- <pre>{{ searchPlayerData }}</pre> -->
    <div
      style="
        padding-bottom: 20px;
        text-align: center;
        border-bottom: 1px;
        border-color: green;
      "
      class="row d-flex justify-content-center pt-5"
    >
      <h3>Search your favourite player here!</h3>
      <form
        @submit.prevent="searchPlayerFunction(playerSearch)"
        style="margin-top: 10px; width: 400px"
      >
        <input
          v-model="playerSearch"
          type="text"
          class="form-control"
          placeholder="Search a player"
        />
        <button type="submit" href="#" class="btn btn-success mt-3">
          Search
        </button>
      </form>
    </div>
    <div class="row">
      <h2 style="text-align: center">Find Players Around The World!</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="searchPlayerData in searchPlayerData" class="col">
          <div class="card">
            <img
              v-if="searchPlayerData.profile_img"
              :src="searchPlayerData.profile_img"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p v-if="searchPlayerData.name" class="card-text">
                {{ searchPlayerData.name }}
              </p>
              <p v-if="searchPlayerData.game_info" class="card-text">
                {{ searchPlayerData.game_info.club }}
              </p>
              <p v-if="searchPlayerData.position" class="card-text">
                {{ searchPlayerData.position }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
