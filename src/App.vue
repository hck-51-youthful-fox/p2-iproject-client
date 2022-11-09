<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { useBonfireStore } from "./stores/bonfire";
import { mapWritableState } from "pinia";

export default {
  nama: "App",
  components: {
    RouterView,
    RouterLink,
    NavBar,
  },
  computed : {
    ...mapWritableState(useBonfireStore,['isVerified','isLoggedIn'])
  },
  created() {
    if(localStorage.getItem("access_token")) {
      this.isLoggedIn = true
      console.log(localStorage.getItem.verified)
      this.isVerified = localStorage.getItem('verified')
    }
  }
};
</script>

<template>
  <NavBar />
  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<style></style>
