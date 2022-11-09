<script>
import moment from "moment";

export default {
  name: "VideoCard",
  props: ["video"],
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
    since() {
      return moment(this.video.publishedDate, "YYYYMMDD")
        .startOf("hour")
        .fromNow();
    },
  },
};
</script>

<template>
  <div class="card col-md-3 border-0" style="max-width: 18rem">
    <img :src="video.link" class="img-fluid rounded" alt="..." />
    <div class="card-body">
      <h5 class="card-title fw-bold fs-6 mb-0">
        {{ video.title.slice(0, 35) + "..." }}
      </h5>
      <p class="card-text mb-0">
        {{ video.channel }}
      </p>
      <p class="card-text">{{ video.views }} • {{ since }}</p>
    </div>
  </div>
</template>
