<script>
import { mapActions, mapState } from "pinia";
import { useAllStore } from "../stores/all";
import GameCard from "./GameCard.vue";

export default {
  name: "Section",
  data() {
    return {
      localGames: [],
    };
  },
  components: {
    GameCard,
  },
  props: ["section"],
  emits: [""],
  computed: {
    ...mapState(useAllStore, ["games"]),
  },
  watch: {},
  methods: {
    ...mapActions(useAllStore, ["fetchGames", "fetchFreeGame"]),
    async whichSection() {
      let query = {};
      switch (this.section) {
        case "Most Popular":
          query.page_size = 4;
          await this.fetchGames(query);
          this.localGames = this.games;
          break;
        case "Free to Play":
          query["sort-by"] = "relevance";
          await this.fetchFreeGame(query);
          this.localGames = this.games;
          break;

        default:
          break;
      }
    },
  },
  created() {
    this.whichSection();
  },
};
</script>

<template>
  <div class="p-5">
    <p class="text-2xl font-bold">{{ section }}</p>
    <section class="container mx-auto mb-10 p-5">
      <section
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 h-96"
      >
        <GameCard
          :section="section"
          v-for="game in localGames"
          :key="game.id"
          :game="game"
          :class="'relative file:min-h-116 bg-orange-600 max-w-xl w-full rounded-xl text-gray-100 bg-cover bg-center transform duration-500 hover:-translate-y-1 cursor-pointer'"
        />
      </section>
    </section>
  </div>
</template>
