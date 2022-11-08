<script>
import { RouterView } from 'vue-router';
import { mapWritableState } from 'pinia';
import { useRZStore } from './stores/RZ';

export default {
  name: "App",
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
</template>

