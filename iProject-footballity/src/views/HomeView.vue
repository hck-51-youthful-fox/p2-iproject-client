<script>
import Navbar from "../components/Navbar.vue";
import MyTeamView from "./MyTeamView.vue";
import TablesPLComponents from "../components/TablesPLComponents.vue";
import CorouselComponents from "../components/CorouselComponents.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    MyTeamView,
    TablesPLComponents,
    CorouselComponents,
  },
};
</script>

<template>
  <Navbar />
  <section class="bg bg-dark" style="padding-top: 70px">
    <div class="row">
      <CorouselComponents />
    </div>
    <div class="row">
      <div class="col col-8"></div>
      <div class="col col-4">
        <TablesPLComponents />
      </div>
    </div>
  </section>
</template>
