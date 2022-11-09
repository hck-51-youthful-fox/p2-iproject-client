<script>
import { mapActions, mapState } from "pinia";
import { RouterView } from "vue-router";
import { useInvestrStore } from "./stores";

export default {
  name: "app",
  methods: {
    ...mapActions(useInvestrStore, ["fetchRealtimeData"]),
  },
  created() {
    this.fetchRealtimeData();
  },
};
</script>

<template>
  <RouterView />
</template>
