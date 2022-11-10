<script>
import { RouterView } from 'vue-router';
import { mapWritableState } from 'pinia';
import { useRZStore } from './stores/RZ';
import NavBar from './views/NavBar.vue';

export default {
  name: "App",
  components: {
    NavBar
  },
  computed: {
    ...mapWritableState(useRZStore, ['checkLogin'])
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.checkLogin = true
    }
  }
}
</script>

<template>
  <NavBar />

  <RouterView />
</template>

