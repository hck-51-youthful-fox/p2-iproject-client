<script>
import { mapActions, mapState } from "pinia";
import { useFoodStore } from "../stores/stores";

export default {
  name: "CardFood",
  props: ["food"],
  methods: {
    ...mapActions(useFoodStore, ["convertPrice"]),
  },
};
</script>

<template>
  <div class="w-full h-full">
    <div>
      <img class="object-fill border" :src="food.imageUrl" />
    </div>
    <div class="py-4 pb-5">
      <h5 class="text-xl font-semibold tracking-tight text-gray-90">
        {{ food.name }}
      </h5>
      <div class="flex justify-between items-center pt-2">
        <span
          class="bg-gray-200 text-gray-800 text-sm font-semibold px-2.5 py-0.5 rounded"
          >{{ food.Category.name }}</span
        >
        <div>
          <span class="font-semibold px-2.5 py-0.5 rounded ml-3"></span>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-2xl font-bold text-gray-900">{{
          convertPrice(food.price)
        }}</span>
        <div class="cursor-pointer">
          <a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
