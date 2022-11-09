<script>
import navBar from "../components/Navbar.vue";
import cardThread from "../components/cardThread.vue";
import cardVGA from "../components/CardVGA.vue";
export default {
  name: "Homepage",
  components: {
    navBar,
    cardThread,
    cardVGA,
  },
};
</script>
<template>
  <navBar />
  <section class="container mx-auto p-10 px-0 md:p-10 md:py-12 md:px-0">
    <section class="p-5 md:p-0 xl:grid xl:grid-cols-12 xl:grid-rows-6 xl:h-200">
      <section
        class="row-start-1 row-end-5 col-start-1 col-end-9 bg-orange-100"
      >
        <article class="p-5 flex justify-between items-center h-full">
          <div class="space-y-5">
            <h2 class="text-3xl md:text-5xl max-w-md">NVIDIA 3090</h2>
            <button
              class="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Read More
            </button>
          </div>
          <div>
            <img class="h-auto w-96" src="" alt="" />
          </div>
        </article>
      </section>
      <section
        class="row-start-5 row-end-7 col-start-1 col-end-4 bg-purple-300"
      >
        <article class="flex items-center h-full bg-green-900 p-6">
          <div>
            <p class="text-3xl font-xl text-white mt-2">NVIDIA 3090</p>
          </div>
        </article>
      </section>
      <section class="row-start-5 row-end-7 col-start-4 col-end-9 bg-gray-200">
        <article class="p-10 flex justify-between items-center h-full">
          <div class="space-y-5">
            <h2 class="text-3xl max-w-xs">NVIDIA 3090</h2>

            <button
              class="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Read More
            </button>
          </div>
          <div>
            <img class="h-auto w-full ml-10 -mt-5" src="" alt="" />
          </div>
        </article>
      </section>
      <section class="row-start-1 row-end-4 col-start-9 col-end-13 bg-teal-100">
        <article class="p-10 flex justify-between items-center h-full">
          <div class="space-y-5">
            <h2 class="text-2xl max-w-sm">NVIDIA 3090</h2>

            <button
              class="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Read More
            </button>
          </div>
          <div>
            <img class="h-auto w-80" src="" alt="" />
          </div>
        </article>
      </section>
      <section
        class="row-start-4 row-end-7 col-start-9 col-end-13 bg-purple-100"
      >
        <article class="p-10 flex justify-between items-center h-full">
          <div class="space-y-5">
            <h2 class="text-2xl max-w-sm">NVIDIA 3090</h2>

            <button
              class="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              Read More
            </button>
          </div>
          <div>
            <img class="h-auto w-80" src="" alt="" />
          </div>
        </article>
      </section>
    </section>
  </section>
  <cardVGA />
  <cardThread />
</template>
