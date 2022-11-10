<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<template>
  <Navbar />
  <!-- <DashboardVue /> -->
  <!-- <DetailMovie /> -->
  <!-- <Favorite /> -->
  <!-- <Login /> -->
  <!-- <Register /> -->
  <!-- <h1 class="text-center font-bold text-4xl">LONTONG</h1> -->

  <RouterView />
</template>
