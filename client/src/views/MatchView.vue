<script>
import Navbar from "../components/Navbar.vue";
import CardNba from "../components/CardNba.vue";
import { mapActions, mapState } from "pinia";
import { useMatchStore } from "../stores/match";
export default {
  name: "MatchView",
  components: { Navbar, CardNba },
  methods: {
    ...mapActions(useMatchStore, ["fetchNbaMatch"]),
  },
  computed: {
    ...mapState(useMatchStore, ["nbaData"]),
  },
  created() {
    this.fetchNbaMatch();
  },
};
</script>

<template>
  <Navbar />

  <div class="flex flex-row justify-center">
    <div
      class="grid mb-5 mt-5 rounded-lg border md:mb-12 md:grid-cols-3 mx-10 w-[80%]"
    >
      <CardNba v-for="games in nbaData" :key="games.id" :games="games" />
    </div>
  </div>
</template>
<!-- v-for="games in nbaData" :key="games.id" :games="games" -->
