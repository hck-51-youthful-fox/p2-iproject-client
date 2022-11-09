<script>
import MyTeamComponents from "../components/MyTeamComponenst.vue";
import Navbar from "../components/Navbar.vue";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

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
    printHTML(element) {
      htmlToImage
        .toPng(document.getElementById(element))
        .then(function (dataUrl) {
          download(dataUrl, "my-node.png");
        });
    },
    printToJPEG() {
      htmlToImage
        .toJpeg(document.getElementById("football-pitch"), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement("a");
          link.download = "my-team.jpeg";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<template>
  <Navbar />
  <section
    class="bg bg-dark pb-5"
    style="margin-top: 50px; padding-bottom: 110px"
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
              Manager: {{ name }}
            </h2>
          </div>
          <div id="football-pitch" style="height: 720px; width: 1000px">
            <MyTeamComponents />
          </div>
          <a
            @click.prevent="printToJPEG"
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
