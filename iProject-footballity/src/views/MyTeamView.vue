<script>
import MyTeamComponents from "../components/MyTeamComponenst.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "MyTeamView",
  components: {
    MyTeamComponents,
    Navbar,
  },
};
</script>
<template>
  <Navbar />
  <section
    class="bg bg-dark pb-5"
    style="margin-top: 50px; padding-bottom: 100px"
  >
    <div class="container" style="padding-bottom: 60px">
      <div class="row">
        <div class="col col-10" style="align-items: flex-end">
          <div class="d-flex justify-content-between align-items-end">
            <h2 style="margin-top: 20px; margin-bottom: 20px; color: white">
              My Football Team
            </h2>
            <h4 style="margin-top: 20px; margin-bottom: 20px; color: white">
              Position: 442 Attack
            </h4>
            <h2 style="margin-top: 20px; margin-bottom: 20px; color: white">
              Manager: Bopak
            </h2>
          </div>
          <div id="football-pitch" style="height: 720px; width: 1000px">
            <MyTeamComponents />
            <a
              href="#"
              class="btn mt-3"
              style="color: white; background-color: green"
              >Save your dream team!</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
#football-pitch {
  background-image: url("../assets/football_pitch-wallpaper-1280x720.jpg");
  background-size: 100% 100%;
}
td {
  color: white;
}
</style>
