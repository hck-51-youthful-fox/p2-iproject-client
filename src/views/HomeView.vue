<script>
import { useBonfireStore } from "../stores/bonfire";
import { mapActions, mapState } from "pinia";
import GameCard from "../components/GameCard.vue";

export default {
  nama: "HomeView",
  components: {
    GameCard,
  },
  methods: {
    ...mapActions(useBonfireStore, ["fetchGames"]),
  },
  computed: {
    ...mapState(useBonfireStore, ["games"]),
  },
  created() {
    this.fetchGames();
  },
};
</script>

<template>
  <div class="card bg-dark mt-2">
    <div class="card-body">
      <form>
        <div class="d-flex justify-content-center align-items-center">
          <div class="col-10 mx-1 form-group text-white">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="search by title..."
            />
          </div>
          <div class="col-1 mx-1">
            <button class="btn btn-warning">Search</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <GameCard v-for="game in games" :key="`game-${game.id}`" :game="game" />
  </div>
</template>
