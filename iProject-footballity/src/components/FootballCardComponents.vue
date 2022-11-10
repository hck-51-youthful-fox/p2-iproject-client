<script>
import { mapActions, mapState } from "pinia";
import { useFootballStore } from "../stores/football";

export default {
  name: "FootballCardComponents",
  props: ["players"],
  data() {
    return {
      data: this.players.result,
    };
  },
};
</script>
<template>
  <pre>{{ players.result }}</pre>
  <h2 v-if="players.result.length === 0">Find A Player Around The World!</h2>
  <div
    v-if="players.result.length !== 0"
    class="row row-cols-1 row-cols-md-3 g-4"
  >
    <div v-for="players in players" class="col">
      <div class="card">
        <img
          v-if="players.result.profile_img"
          :src="players.result.profile_img"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p v-if="players.result.name" class="card-text">
            {{ players.result.name }}
          </p>
          <p v-if="players.result.game_info.club" class="card-text">
            {{ players.result.game_info.club }}
          </p>
          <p v-if="players.result.position" class="card-text">
            {{ players.result.position }}
          </p>
        </div>
      </div>
    </div>
    </div>
    <!-- <div class="col">
      <div class="card">
        <img
          src="https://df11img.s3-us-west-1.amazonaws.com/91104807.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">Leon Goretzka</p>
          <p class="card-text">FC Bayern Munchen</p>
          <p class="card-text">Midfielder</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img
          src="https://df11img.s3-us-west-1.amazonaws.com/18083491.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">Leon Bailey</p>
          <p class="card-text">Bayer Leverkusen 04</p>
          <p class="card-text">Midfielder</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img
          src="https://df11img.s3-us-west-1.amazonaws.com/7458272.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">Sergio Ramos</p>
          <p class="card-text">Real Madrid</p>
          <p class="card-text">Right Center Defender</p>
        </div>
      </div>
    </div> -->
</template>
<style>
img {
  width: 60px;
}
p {
  color: black;
}
</style>
