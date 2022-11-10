<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useMainStore } from "./stores/main";

export default {
  naem: "App",
  components: {
    NavBar,
  },
  computed: {
    ...mapWritableState(useMainStore, ["isLogin", "isPremium"]),
  },
  created() {
    this.isLogin = localStorage.getItem("isPremium")
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
};
</script>

<template>
  <NavBar />
  <RouterView />
</template>
