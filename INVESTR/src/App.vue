<script>
import { mapActions, mapState } from "pinia";
import { RouterView } from "vue-router";
import { useInvestrStore } from "./stores";

export default {
  name: "app",
  methods: {
    ...mapActions(useInvestrStore, [
      "fetchRealtimeData",
      "fecthData",
      "checkLogin",
    ]),
  },
  created() {
    this.fetchRealtimeData();
    this.fecthData();
    this.checkLogin();
  },
};
</script>

<template>
  <RouterView />
</template>
