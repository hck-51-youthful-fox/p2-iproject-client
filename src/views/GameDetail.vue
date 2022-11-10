<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useAllStore } from "../stores/all";

export default {
  name: "GameDetail",
  data() {
    return {
      localGame: {},
    };
  },
  props: [""],
  emits: [""],
  computed: {
    ...mapState(useAllStore, ["game"]),
  },
  watch: {},
  methods: {
    ...mapActions(useAllStore, ["fetchGameDetail", "fetchFreeGameDetail"]),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchGameDetail(id);
  },
};
</script>

<template>
  <p class="text-2xl font-black">Ini halaman Game Detail</p>
  <p>Title: {{ game.name }}</p>
  <p>Released: {{ game.released }}</p>
  <p>Website: {{ game.gameUrl }}</p>
  <p>Description: {{ game.description }}</p>
  <p>Publisher: {{ game.publisher }}</p>
  <img :src="game.imgUrl" alt="" />
  <img :src="game.thumbnailUrl" alt="" />
</template>
