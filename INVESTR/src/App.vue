<script>
import { mapActions, mapState } from "pinia";
import { RouterView } from "vue-router";
import { useInvestrStore } from "./stores";

export default {
  name: "app",
  methods: {
    ...mapActions(useInvestrStore, ["fetchRealtimeData", "fecthData"]),
  },
  created() {
    this.fetchRealtimeData();
    this.fecthData();
  },
};
</script>

<template>
  <RouterView />
</template>
