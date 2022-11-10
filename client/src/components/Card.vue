<script>
export default {
  name: "Card",
  props: ["match"],
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
        {{ match.scoreHomeTeam }}
      </h3>
    </blockquote>
    <figcaption class="flex justify-center items-center space-x-3">
      <img
        class="w-10 h-9 rounded-full"
        :src="match.homeTeamLogo"
        alt="profile picture"
      />
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>{{ match.homeTeam }}</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">
          Developer at Open AI
        </div>
      </div>
    </figcaption>
  </figure>

  <figure
    class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <h3 class="text-xs font-semibold text-gray-900 dark:text-white mb-5">
      {{ toLocalDate(match.date) }}
    </h3>
    <blockquote
      class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400"
    >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        <img
          class="w-10"
          src="https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png?20200807133458"
          alt=""
        />
      </h3>
    </blockquote>
    <figcaption class="flex justify-center items-center space-x-3">
      {{ match.arena }}
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>{{ match.city }}</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">
          {{ match.status }}
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
        {{ match.scoreAwayTeam }}
      </h3>
    </blockquote>
    <figcaption class="flex justify-center items-center space-x-3">
      <img
        class="w-9 h-9 rounded-full"
        :src="match.awayTeamLogo"
        alt="profile picture"
      />
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>{{ match.awayTeam }}</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">
          Lead designer at Dropbox
        </div>
      </div>
    </figcaption>
  </figure>
</template>
