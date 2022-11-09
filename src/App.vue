<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

export default {
  nama: "App",
  components: {
    RouterView,
    RouterLink,
    NavBar,
  },
};
</script>

<template>
  <NavBar />
  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<style></style>
