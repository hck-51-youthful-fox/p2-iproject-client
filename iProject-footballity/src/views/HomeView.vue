<script>
import Navbar from "../components/Navbar.vue";
import MyTeamView from "./MyTeamView.vue";
import TablesPLComponents from "../components/TablesPLComponents.vue";
import CorouselComponenst from "../components/corouselComponenst.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    MyTeamView,
    TablesPLComponents,
    CorouselComponenst,
  },
};
</script>

<template>
  <Navbar />
  <section class="bg bg-dark" style="padding-top: 70px">
    <div class="row">
      <CorouselComponenst />
    </div>
    <div class="row">
      <div class="col col-8"></div>
      <div class="col col-4">
        <TablesPLComponents />
      </div>
    </div>
  </section>
</template>
