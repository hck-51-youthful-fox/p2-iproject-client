<script>
import { mapWritableState } from "pinia";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import { useAllStore } from "./stores/all";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
  },
  computed: {
    ...mapWritableState(useAllStore, ["isLogin"]),
  },
  methods: {},
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <!-- Harusnya ini tp kepepet -->
  <!-- <div v-if="isLogin" class="flex flex-row relative">
    <div class="h-screen sticky top-0">
      <Sidebar />
    </div>
    <div class="flex flex-col w-full">
      <Navbar class="sticky top-0 z-50" />
      <RouterView />
    </div>
  </div> -->
  <div v-if="isLogin" class="relative">
    <Navbar class="sticky top-0 z-50" />
    <RouterView />
  </div>

  <!-- Kalau islogin false pake routerview ini -->
  <RouterView v-if="!isLogin" />
</template>
