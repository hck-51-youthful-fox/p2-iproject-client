<script>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
import LoginPage from "./views/LoginPage.vue";
import RegisterPage from "./views/RegisterPage.vue";
import MatchView from "./views/MatchView.vue";
import Standings from "./views/Standings.vue";
export default {
  name: "App",
  components: {
    HomeView,
    LoginPage,
    RegisterPage,
    MatchView,
    Standings,
    RouterLink,
  },
};
</script>

<template>
  <RouterView />
</template>
