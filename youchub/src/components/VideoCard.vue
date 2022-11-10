<script>
import moment from "moment";

export default {
  name: "VideoCard",
  props: ["video", "date", "page"],
  data() {
    return {
      //   video: {
      //     link: "",
      //     title: "",
      //     channel: "",
      //     views: "",
      //     publishedDate: "",
      //	isVerified: false
      //   },
    };
  },
  computed: {
    views() {
      var newValue = this.video.views;
      if (this.video.views >= 1000) {
        var suffixes = ["", "K", "M", "B", "T"];
        var suffixNum = Math.floor(("" + this.video.views).length / 3);
        var shortValue = "";
        for (var precision = 2; precision >= 1; precision--) {
          shortValue = parseFloat(
            (suffixNum != 0
              ? this.video.views / Math.pow(1000, suffixNum)
              : this.video.views
            ).toPrecision(precision)
          );
          var dotLessShortValue = (shortValue + "").replace(
            /[^a-zA-Z 0-9]+/g,
            ""
          );
          if (dotLessShortValue.length <= 2) {
            break;
          }
        }
        if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
        newValue = shortValue + suffixes[suffixNum];
      }
      return newValue;
    },
    // since() {
    //   return moment(this.video.publishedDate, "YYYYMMDD")
    //     .startOf("hour")
    //     .fromNow();
    // },
  },
};
</script>

<template>
  <div
    role="button"
    @click="$router.push(`/detail/${video.videoId}`)"
    v-if="video.title"
    class="card col-md-3 border-0 my-1"
    style="max-width: 18rem"
  >
    <img :src="video.link" class="img-fluid rounded" alt="..." />
    <div class="card-body row">
      <div class="col-2">
        <img :src="video.avatarUrl" class="w-100 p-1 rounded-circle" alt="" />
      </div>
      <div class="col-10">
        <h5 class="card-title fw-bold fs-6 mb-0">
          {{ video.title.slice(0, 30) + "..." }}
        </h5>
        <p class="card-text mb-0">
          {{ video.channel }}
        </p>
        <p class="card-text">
          {{ views }} views •
          {{ page === "likes" ? date : video.publishedDate }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  padding: 4px;
}
.col-10,
.col-2 {
  padding: 0;
}
</style>
