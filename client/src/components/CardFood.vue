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
    <div class="flex justify-center shadow-sm">
      <div
        class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white w-full"
      >
        <div class="w-56 rounded-lg relative mx-auto overflow-hidden">
          <img
            class="p-4 w-full h-32 rounded-lg border-none object-cover relative mx-auto overflow-hidden"
            :src="food.imageUrl"
            alt=""
          />
        </div>
        <div class="py-3 flex flex-col justify-between w-full">
          <p class="text-gray-700 text-lg font-regular">{{ food.name }}</p>
          <div class="flex pt-2 flex-row justify-between">
            <span class="text-xl font-bold text-gray-800">{{
              convertPrice(food.price)
            }}</span>
            <div class="cursor-pointer pr-2">
              <button
                @click="addFoodHandler(food.id)"
                class="inline-flex items-center justify-center w-7 h-7 mr-2 text-white transition-colors duration-150 bg-[#00B14F] rounded-md focus:shadow-outline hover:bg-[#13984f]"
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
    </div>
  </div>
</template>
