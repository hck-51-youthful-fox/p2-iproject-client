<script>
import navBar from "../components/Navbar.vue";
import cardThread from "../components/cardThread.vue";
import cardVGA from "../components/CardVGA.vue";
import cardNews from "../components/CardNews.vue";
import { useDataStore } from "../stores/data";
import { mapActions, mapState } from "pinia";
import formPost from "../components/FormPost.vue";
export default {
  name: "Homepage",
  computed: {
    ...mapState(useDataStore, ["dataNews", "thread", "totalPages", "isLogin"]),
  },
  methods: {
    ...mapActions(useDataStore, ["news", "getThread"]),
  },
  components: {
    navBar,
    cardThread,
    cardVGA,
    cardNews,
    formPost,
  },
  created() {
    this.news();
    this.getThread();
  },
};
</script>
<template>
  <navBar />
  <div class="container my-12 px-6 mx-auto">
    <section class="mb-32 text-gray-800">
      <h2 class="text-3xl font-bold mb-12 text-center">NEWS</h2>
      <div class="grid lg:grid-cols-4 gap-6">
        <cardNews v-for="news in dataNews.news" :key="news.id" :news="news" />
      </div>
    </section>
  </div>
  <section class="container mx-auto py-6 md:py-10 antialiased">
    <h2 class="text-3xl font-bold mb-20 text-center">TOP PEFORMANCE VGA</h2>
    <section class="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-8">
      <cardVGA
        v-for="listVga in dataNews.topVGA"
        :key="listVga.id"
        :listVga="listVga"
      />
    </section>
  </section>
  <h2 class="text-3xl font-bold mt-20 mb-20 text-center">PC PEEKER FORUM</h2>
  <formPost v-if="isLogin !== false" />
  <cardThread
    v-for="listThread in thread"
    :key="listThread.id"
    :listThread="listThread"
  />
</template>
