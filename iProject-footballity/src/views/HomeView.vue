<script>
import Navbar from "../components/Navbar.vue";
import MyTeamView from "./MyTeamView.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    MyTeamView,
  },
};
</script>

<template>
  <Navbar />
  <section class="bg bg-dark" style="margin-top: 50px">
    <div class="container">
      <h1 style="color: white">HELLOOOOi</h1>
    </div>
  </section>
</template>
