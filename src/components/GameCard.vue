<script>
export default {
  name: "GameCard",
  data() {
    return {};
  },
  props: ["game", "class", "section"],
  emits: [""],
  computed: {},
  watch: {},
  methods: {},
  created() {},
};
</script>

<template>
  <article
    @click.prevent="$router.push(`/games/${game.id}`)"
    v-if="section !== 'Free to Play'"
    :class="class"
    :style="{
      'background-image': 'url(' + game['background_image'] + ')',
    }"
  >
    <div
      class="bg-black bg-opacity-20 hover:bg-opacity-0 p-10 rounded-xl h-full"
    >
      <div
        class="px-5 absolute inset-x-0 bottom-0 align-middle flex justify-center"
      >
        <h1
          class="text-2xl text-center drop-shadow-2xl font-bold mb-5 text-gray-100 leading-snug min-h-33"
        >
          {{ game.name }}
        </h1>
      </div>
    </div>
  </article>
  <article
    @click.prevent="$router.push(`/games/${game.id}`)"
    v-if="section === 'Free to Play'"
    :class="class"
    :style="{
      'background-image': 'url(' + game.thumbnail + ')',
    }"
  >
    <div
      class="bg-black bg-opacity-20 hover:bg-opacity-0 p-10 rounded-xl h-full"
    ></div>
  </article>
</template>
