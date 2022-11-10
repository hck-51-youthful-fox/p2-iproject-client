<script>
import { mapActions } from "pinia";
import { RouterView } from "vue-router";
import { useFootballStore } from "./stores/football";

export default {
  name: "App",
  data() {
    return {
      token: localStorage.access_token,
    };
  },
  methods: {
    ...mapActions(useFootballStore, ["changePage"]),
  },
  created() {
    if (!this.token) {
      this.changePage("/login");
    }
  },
};
</script>
<template>
  <RouterView />
</template>
