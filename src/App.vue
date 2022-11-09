<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<template>
  <div class="flex flex-row">
    <div class="w-80 h-screen sticky top-0">
      <Sidebar />
    </div>
    <div class="flex flex-col w-full">
      <Navbar class="sticky top-0" />
      <RouterView />
    </div>
  </div>

  <!-- Kalau islogin false pake routerview ini -->
  <!-- <RouterView /> -->
</template>
