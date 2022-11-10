<script>
import { mapState, mapWritableState } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import { useDataStore } from "./stores/data";

export default {
  computed: {
    ...mapWritableState(useDataStore, ["isLogin"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <!-- Detail Thread -->

  <RouterView />
</template>
