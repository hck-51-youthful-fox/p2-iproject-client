<script>
export default {
  name: "Card",
  props: ["match"],
  methods: {
    // toLocalDate(date) {
    //   return new Date(date).toLocaleDateString("en-US", {
    //     hour12: false,
    //     weekday: "long",
    //     year: "numeric",
    //     month: "long",
    //     day: "numeric",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //   });
    // },
  },
};
</script>

<template>
  <figure
    class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800"
  >
    <blockquote
      class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400"
    >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        Points:
      </h3>
      <p class="my-4 font-light">
        {{ match.homeScoreTeam }}
      </p>
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
    <blockquote
      class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400"
    >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        Solid foundation for any project
      </h3>
      <p class="my-4 font-light">
        Designing with Figma components that can be easily translated to the
        utility classes of Tailwind CSS is a huge timesaver!"
      </p>
    </blockquote>
    <figcaption class="flex justify-center items-center space-x-3">
      <img
        class="w-9 h-9 rounded-full"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
        alt="profile picture"
      />
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>Roberta Casas</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">
          Lead designer at Dropbox
        </div>
      </div>
    </figcaption>
  </figure>
</template>
