<script>
import { mapActions, mapState } from "pinia";

import { useDataStore } from "../stores/data";
export default {
  nama: "cardNews",
  data() {
    return {
      date: this.news.publishedAt,
    };
  },
  props: ["news"],
  methods: {
    ...mapActions(useDataStore, ["convertDate"]),
  },
};
</script>
<template>
  <div
    class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
    style="background-position: 50%"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
  >
    <img :src="news.urlToImage" class="w-full h-full" />
    <a :href="news.url" target="_blank">
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.4)"
      >
        <div class="flex justify-start items-end h-full">
          <div class="text-white m-6">
            <h5 class="font-bold text-lg mb-3 break-words">
              {{ news.title }}
            </h5>
            <p>
              <small
                >Published <u>{{ date.slice(0, 10) }}</u> by
                {{ news.author }}</small
              >
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>

  <!-- Container for demo purpose -->
</template>
