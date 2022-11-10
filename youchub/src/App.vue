<script>
import { mapWritableState } from "pinia";
import { useAllStore } from "./stores/all";
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  computed: {
    ...mapWritableState(useAllStore, ["isLogin"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
