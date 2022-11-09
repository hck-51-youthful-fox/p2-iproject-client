<script>
import { RouterLink } from "vue-router";

export default {
  name: "CardVGA",
  props: ["listVga"],
};
</script>
<template>
  <a
    :href="listVga.source"
    target="_blank"
    class="mx-auto max-w-sm h-72 pb-8 bg-cover bg-center cursor-pointer transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl"
  >
    <h2 class="text-center text-3xl mt-8 font-bold min-h-18 px-12">
      {{ listVga.type }}
    </h2>
    <p class="m-4 text-lg p-4 leading-relaxed text-center">
      Ranking {{ listVga.ranking }}
    </p>
    <p class="leading-relaxed text-center">
      Benchmark (by UserBencmark) :
      {{ listVga.bechmark }}
    </p>
    <p class="leading-relaxed text-center">By : GPU UserBencmark</p>
  </a>
</template>
