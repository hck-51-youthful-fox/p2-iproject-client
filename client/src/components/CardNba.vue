<script>
export default {
  name: "CardNba",
  props: ["games"],
  methods: {
    toLocalDate(date) {
      return new Date(date).toLocaleDateString("en-US", {
        hour12: false,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
  computed: {},
};
</script>

<template>
  <figure
    class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <blockquote
      class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400"
    >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        Points:
      </h3>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        {{ games.scoreHomeTeam }}
      </h3>
    </blockquote>
    <figcaption class="flex justify-center items-center space-x-3">
      <img
        class="w-10 h-9 rounded-full"
        :src="games.homeTeamLogo"
        alt="profile picture"
      />
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>{{ games.homeTeam }}</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">
          Developer at Open AI
        </div>
      </div>
    </figcaption>
  </figure>

  <figure
    class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <blockquote
      class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400"
    >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        Points:
      </h3>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        {{ games.scoreAwayTeam }}
      </h3>
    </blockquote>
    <figcaption class="flex justify-center items-center space-x-3">
      <img
        class="w-9 h-9 rounded-full"
        :src="games.awayTeamLogo"
        alt="profile picture"
      />
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>{{ games.awayTeam }}</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">
          Lead designer at Dropbox
        </div>
      </div>
    </figcaption>
  </figure>
</template>
