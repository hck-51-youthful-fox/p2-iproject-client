<script>
// import ProductCard from "../components/ProductCard.vue";
import Navbar from "../components/Navbar.vue";
import YouTube from "vue3-youtube";
import SideVideoCard from "../components/SideVideoCard.vue";
import { useAllStore } from "../stores/all";
import { mapState, mapWritableState, mapActions } from "pinia";

export default {
  name: "HomePage",
  data() {
    return {
      // video: {
      //   avatar:
      //     "https://yt3.ggpht.com/3F9st8VUq9fEMpSpxfTp32EMf3ItIDZ2R-k_LdV1ziJzQp9nd0FTng9qbr7nUZJPYTLHA4paCg=s48-c-k-c0x00ffffff-no-rj",
      //   subscribers: 232000,
      //   channel: "low quality",
      //   category: "Entertainment",
      //   description:
      //     "thanks for watching. ˚.༄ | my only social media: tiktok: https://vm.tiktok.com/ZS49ynYc/ - ︿︿ m u s i c ︿︿ how you like that · blackpink. _____________ ☆ #BLACKPINK #HowYouLikeThat #블랙핑크 ☆",
      //   videoId: "pT1M_AjU_Mk",
      //   title: "Blackpink – How You Like That. [DANCE MIRROR]",
      //   keywords: ["BLACKPINK", "DANCE", "LISA"],
      //   publishedDate: "2020-07-05",
      //   commentsCount: 1443,
      //   likesCount: 86684,
      //   viewsCount: 9110400,
      // },
    };
  },
  components: {
    Navbar,
    YouTube,
    SideVideoCard,
  },
  computed: {
    ...mapState(useAllStore, ["videos", "video"]),
    ...mapWritableState(useAllStore, ["isPremium"]),
    formattedDate() {
      return new Date(this.video.publishedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    formattedViews() {
      return this.video.viewsCount
        ? this.video.viewsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : "";
    },
  },
  methods: {
    ...mapActions(useAllStore, [
      "fetchVideos",
      "fetchVideoDetail",
      "showSuccessAlert",
      "addLikes",
    ]),
    onReady() {
      this.$refs.youtube.playVideo();
    },
    formatCount(val) {
      var newValue = val;
      if (val >= 1000) {
        var suffixes = ["", "K", "M", "B", "T"];
        var suffixNum = Math.floor(("" + val).length / 3);
        var shortValue = "";
        for (var precision = 2; precision >= 1; precision--) {
          shortValue = parseFloat(
            (suffixNum != 0
              ? val / Math.pow(1000, suffixNum)
              : val
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
    handleAdd() {
      this.addLikes(this.video.videoId, {
        title: this.video.title,
        link: this.video.thumbnails,
        channel: this.video.channel,
        avatarUrl: this.video.avatarUrl,
        views: this.video.viewsCount,
        publishedDate: this.video.publishedDate,
        isVerified: false,
      });
    },
  },
  created() {
    if (localStorage.isPremium) this.isPremium = true;
    this.fetchVideos();
    this.fetchVideoDetail(this.$route.params.videoId);
  },
};
</script>

<template>
  <main>
    <Navbar page="detail" />
    <!-- tambah searchbar + btn speech recognition, akun, tombol lonceng di navbar  -->
    <section class="container-fluid pt-3" id="home-section">
      <div class="row px-5 py-4">
        <div class="col-md-8">
          <YouTube
            width="720px"
            :src="`https://www.youtube.com/watch?v=${$route.params.videoId}`"
            @ready="onReady"
            ref="youtube"
          />
          <div class="m-2 pe-5">
            <div class="d-flex">
              <a
                v-for="(keyword, i) in video.keywords.slice(0, 5)"
                :key="i"
                href=""
                >#{{ keyword }}
              </a>
            </div>
            <h3 class="mb-2 fs-5">{{ video.title }}</h3>
            <div class="d-flex justify-content-between">
              <div class="">
                <div class="d-flex align-items-bottom">
                  <div class="mx-1">
                    <img :src="video.avatarUrl" class="rounded-circle" />
                  </div>
                  <div class="ms-1 me-2">
                    <h6 class="fw-bold mb-0 fs-14">{{ video.channel }}</h6>
                    <p class="text-muted fs-12">
                      {{ formatCount(video.subscribers) }} subscribers
                    </p>
                  </div>
                  <div class="mx-1">
                    <button
                      class="fs-12 text-decoration-none btn btn-dark fw-bold rounded-pill"
                    >
                      Subscribe
                    </button>
                  </div>
                  <div></div>
                </div>
                <div class="d-flex"></div>
              </div>
              <div v-if="isPremium" class="d-flex">
                <div class="me-2">
                  <button
                    @click="handleAdd"
                    class="text-decoration-none d-flex align-items-center btn btn-light rounded-pill fw-bold fs-12"
                  >
                    <span class="material-symbols-outlined me-2">
                      heart_plus
                    </span>
                    Add to Favorite
                  </button>
                </div>
                <div class="">
                  <button
                    class="d-flex align-items-center text-decoration-none btn btn-light rounded-pill fw-bold fs-12"
                    @click="showSuccessAlert('Item has been downloaded')"
                  >
                    <span class="material-symbols-outlined me-2">
                      download
                    </span>
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div class="p-3 bg-light rounded">
              <p class="fw-bold">
                {{ formattedViews }} views published on
                {{ formattedDate }}
              </p>
              <p>
                {{ video.description }}
              </p>
            </div>
            <div class="fw-bold m-2">{{ video.commentsCount }} Comments</div>
          </div>
        </div>
        <div class="col-md-4">
          <SideVideoCard v-for="(video, i) in videos" :key="i" :video="video" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.fs-12 {
  font-size: 12px;
}
.fs-14 {
  font-size: 14px;
}
</style>
