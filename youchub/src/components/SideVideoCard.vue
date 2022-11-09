<script>
import moment from "moment";

export default {
  name: "SideVideoCard",
  props: ["video"],
  data() {
    return {};
  },
  computed: {
    miaw() {
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
  <div v-if="video.title" class="card border-0 my-1" style="">
    <div
      role="button"
      @click="$router.push(`/detail/${video.videoId}`)"
      class="card-body"
    >
      <div class="row">
        <div class="col-5">
          <img :src="video.link" class="img-fluid rounded" alt="..." />
        </div>
        <div class="col-7">
          <h5 class="card-title fw-bold mb-0 vid-title">
            {{ video.title.slice(0, 30) + "..." }}
          </h5>
          <p class="card-text mb-0">
            {{ video.channel }}
          </p>
          <p class="card-text">{{ miaw }} views • {{ video.publishedDate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  padding: 4px;
}
.col-5 {
  padding: 0;
}

.vid-title {
  font-size: 14px;
}
</style>
