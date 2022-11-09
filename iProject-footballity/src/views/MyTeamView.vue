<script>
import MyTeamComponents from "../components/MyTeamComponents.vue";
import Navbar from "../components/Navbar.vue";
// import * as htmlToImage from "html-to-image";
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import html2canvas from "html2canvas";

export default {
  name: "MyTeamView",
  components: {
    MyTeamComponents,
    Navbar,
  },
  data() {
    return {
      name: localStorage.username,
    };
  },
  methods: {
    // convert() {
    //   const original = document.querySelector("#original");
    //   const canvasContainer = document.querySelector("#football-pitch");

    //   html2canvas(original, {
    //     scale: 2,
    //     useCORS: true,
    //   }).then((canvas) => {
    //     const base64image = canvas.toDataURL("image/png");
    //     var anchor = document.createElement("a");
    //     anchor.setAttribute("href", base64image);
    //     anchor.setAttribute("download", "my-team.png");
    //     anchor.click();
    //     anchor.remove();
    //   });
    // },
    printToImg() {
      const screenShot = document.getElementById("football-pitch");

      html2canvas(screenShot, {
        useCORS: true,
        allowTaint: true,
        letterRendering: 1,
      }).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        var anchor = document.createElement("a");
        anchor.setAttribute("href", base64image);
        anchor.setAttribute("download", "my-team.png");
        anchor.click();
        anchor.remove();
      });
    },
  },
};
</script>
<template>
  <Navbar />
  <section
    class="bg bg-dark pb-5"
    style="padding-top: 70px; padding-bottom: 110px"
  >
    <div style="padding-left: 20px; padding-bottom: 60px">
      <div class="row">
        <div class="col col-10" style="align-items: flex-end">
          <div
            id="original"
            class="d-flex justify-content-between align-items-end"
          >
            <h2 style="margin-top: 20px; margin-bottom: 20px; color: white">
              My Football Team
            </h2>
            <h4 style="margin-top: 20px; margin-bottom: 20px; color: white">
              Position: 442 Attack
            </h4>
            <h2 style="margin-top: 20px; margin-bottom: 20px; color: white">
              Manager: {{ name }}
            </h2>
          </div>
          <div id="football-pitch" style="height: 900px; width: 1200px">
            <MyTeamComponents />
          </div>
          <a
            @click.prevent="printToImg"
            href="#"
            class="btn mt-3"
            style="color: white; background-color: green"
            >Save your dream team!</a
          >
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
