<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Preloader from "./components/Preloader.vue";
import { useBonfireStore } from "./stores/bonfire";
import { mapWritableState } from "pinia";

export default {
  nama: "App",
  components: {
    RouterView,
    RouterLink,
    NavBar,
    Preloader
  },
  computed : {
    ...mapWritableState(useBonfireStore,['isVerified','isLoggedIn','isLoading'])
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
  <div v-show="isLoading">
    <Preloader />
  </div>
  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<style></style>
