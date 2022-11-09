<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

export default {
  naem: "App",
  components: {
    NavBar,
  },
};
</script>

<template>
  <NavBar />
  <RouterView />
</template>
