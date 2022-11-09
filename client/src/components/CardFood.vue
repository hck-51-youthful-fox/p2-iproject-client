<script>
import { mapActions, mapState } from "pinia";
import { useCartStore, useFoodStore } from "../stores/stores";

export default {
  name: "CardFood",
  props: ["food"],
  methods: {
    ...mapActions(useFoodStore, ["convertPrice"]),
    ...mapActions(useCartStore, ["addFoodToCart"]),
    addFoodHandler(id) {
      this.addFoodToCart(id);
    },
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
          <button
            @click="addFoodHandler(food.id)"
            class="inline-flex items-center justify-center w-8 h-8 mr-2 text-white transition-colors duration-150 bg-[#00B14F] rounded-md focus:shadow-outline hover:bg-[#13984f]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
