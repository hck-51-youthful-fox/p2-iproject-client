<script>
import { useBonfireStore } from "../stores/bonfire";
import { mapActions, mapState } from "pinia";
import GameCard from "../components/GameCard.vue";

export default {
  nama: "HomeView",
  components : {
    GameCard
  },
  methods: {
    ...mapActions(useBonfireStore,['fetchGames'])
  },
  computed: {
    ...mapState(useBonfireStore,['games'])
  },
  created() {
    this.fetchGames()
  }
};
</script>

<template>
ini {{ $route.fullPath }}

<div class="row">
  
  <GameCard
    v-for="game in games"
    :key="`game-${game.id}`"
    :game="game"
  />

  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>


</template>
