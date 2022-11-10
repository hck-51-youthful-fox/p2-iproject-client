<script>
import { mapActions, mapState } from "pinia";
import RentCard from "../components/rentCard.vue";
import { useGlobalStore } from "../stores/global";

export default {
  computed: {
    ...mapState(useGlobalStore, ["rentList", "historyList"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["fetchRents", "fetchRecentRents"]),
  },
  created() {
    this.fetchRents();
    this.fetchRecentRents();
  },
  components: { RentCard },
};
</script>
<template>
  <div class="container">
    <h1 class="mb-5">Your Rents</h1>
    <div class="card mb-5">
      <div class="card-header">Currently Renting</div>
      <div class="card-body d-flex flex-row gap-3">
        <h4 v-if="!rentList[0]">Not currently renting</h4>
        <RentCard v-for="rent in rentList" :key="rent.id" :pet="rent" />
      </div>
    </div>
    <div class="card mb-5">
      <div class="card-header">Recent rents</div>
      <div class="card-body d-flex flex-row gap-3">
        <h4 v-if="!historyList[0]">No history yet</h4>
        <RentCard
          v-for="history in historyList"
          :key="history.id"
          :pet="history"
        />
      </div>
    </div>
  </div>
</template>
