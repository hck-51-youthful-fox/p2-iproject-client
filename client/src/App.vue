<script>
import { RouterLink, RouterView } from "vue-router";
import { useCustomerStore } from "./stores/stores";
import { mapWritableState } from "pinia";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    RouterView,
    Navbar,
  },
  computed: {
    ...mapWritableState(useCustomerStore, ["isLogin"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <section class="flex h-full bg-slate-50">
    <div class="flex-1 max-h-full overflow-hidden overflow-y-hidden">
      <Navbar />
      <RouterView />
    </div>
  </section>
</template>
