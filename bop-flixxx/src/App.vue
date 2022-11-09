<script>
import { mapWritableState } from "pinia";
import { useUserStore } from "./stores/user";
import { RouterView } from "vue-router";
import Navbar from "./components/NavBar.vue";

export default {
  name: "App",
  computed: {
    ...mapWritableState(useUserStore, ["isLogin", "username"]),
  },
  components: {
    RouterView,
    Navbar,
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
      this.username = localStorage.username;
    } else {
      this.isLogin = false;
    }
  },
};
</script>

<template>
  <Navbar />
  <RouterView />
</template>
