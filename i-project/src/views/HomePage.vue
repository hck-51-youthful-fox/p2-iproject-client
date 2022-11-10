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
    ...mapState(useDataStore, ["dataNews", "thread", "totalPage", "isLogin"]),
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
    const title = this.$route.query.name;
    const page = this.$route.query.page;
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
  <div
    class="container mx-auto p-10 md:py-2 px-5 md:p-10 md:px-0 grid justify-items-center"
  >
    <div class="relative text-gray-600">
      <input
        v-model="title"
        type="search"
        @click.prevent="getThread()"
        name="serch"
        placeholder="Search the thread ..."
        class="w-96 bg-gray-200 h-12 px-5 pr-10 rounded-full text-sm focus:outline-none"
      />
      <button
        type="submit"
        class="absolute right-0 top-0 mt-4 mr-4 justify-items-center"
        @click.prevent="getThread(title, '')"
      >
        <svg
          class="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style="enable-background: new 0 0 56.966 56.966"
          xml:space="preserve"
          width="512px"
          height="512px"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      </button>
      <button></button>
    </div>
  </div>
  <cardThread
    v-for="listThread in thread"
    :key="listThread.id"
    :listThread="listThread"
  />
  <div class="container mx-auto mb-40">
    <nav aria-label="Page navigation" class="grid justify-items-center">
      <ul class="inline-flex -space-x-px grid-rows gap-4">
        <li v-for="(totalPages, index) in totalPage" :key="totalPages">
          <a
            @click.prevent="getThread('', index)"
            class="py-2 px-3 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 white:bg-gray-800 dark:border-gray-700 text-black dark:hover:bg-gray-700 dark:hover:text-white rounded-lg cursor-pointer"
            >{{ index + 1 }}</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
