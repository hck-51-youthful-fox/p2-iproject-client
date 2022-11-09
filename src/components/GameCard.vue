<script>
import { computed } from "@vue/reactivity";

export default {
  nama: "GameCard",
  props: ["game"],
  computed: {
    getReleaseDate() {
      return this.game.releaseDate.split("T")[0];
    },
    backgroundImage() {
      return `background-image: url(${this.game.imageUrl});background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;`;
    },
  },
};
</script>

<template>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body" :style="backgroundImage">
        <h5 class="card-title">{{ game.name }}</h5>
        <p class="card-text">Release Date : {{ getReleaseDate }}</p>
        <a href="#" class="btn btn-primary">{{ game.rating }}</a>
      </div>
    </div>
  </div>
</template>
