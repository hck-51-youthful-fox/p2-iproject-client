<script>
import { mapState, mapActions } from "pinia";
import { useAllStore } from "../stores/all";
import NavBar from "../components/NavBar.vue";
import MenuCard from "../components/MenuCard.vue";

export default {
  name: "MenuPage",
  components: { NavBar, MenuCard },
  computed: {
    ...mapState(useAllStore, ["beverages", "weather"]),
  },
  methods: {
    ...mapActions(useAllStore, ["getBeverages", "getWeather"]),
  },
  created() {
    this.getBeverages();
    this.getWeather();
  },
};
</script>

<template>
  <NavBar />
  <div class="container-fluid">
    <div class="card">
      <div class="d-flex justify-content-center row mt-4 mb-4">
        <h5 class="text-center">{{ weather }}</h5>
      </div>
      <div class="d-flex flex-wrap justify-content-center row">
        <div
          class="d-flex flex-wrap justify-content-between d-grid gap-3 col-9"
        >
          <MenuCard
            v-for="beverage in beverages"
            :key="beverage.id"
            :beverage="beverage"
          />
        </div>
      </div>
    </div>
  </div>
</template>
