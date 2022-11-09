<script>
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";
import { mapActions, mapState } from "pinia";
import { useMatchStore } from "../stores/match";
import { useUserStore } from "../stores/user";
export default {
  name: "HomeView",
  components: { Navbar, Card },
  methods: {
    ...mapActions(useMatchStore, ["fetchLiveScore"]),
    ...mapActions(useUserStore, ["loginState"]),
  },
  computed: {
    ...mapState(useMatchStore, ["liveData"]),
  },
  created() {
    this.loginState();
    this.fetchLiveScore();
  },
};
</script>

<template>
  <Navbar />

  <div class="flex justify-center mt-6">
    <h4 class="" v-if="liveData.length === 0">
      Sorry, there is no live match now
    </h4>
    <div
      v-for="match in liveData"
      :key="match.id"
      :match="match"
      class="grid mb-5 mt-5 rounded-lg border md:mb-12 md:grid-cols-2 mx-10"
    >
      <Card />
    </div>
  </div>
</template>
<!-- v-for="match in liveData" :key="match.id" :match="match" -->
