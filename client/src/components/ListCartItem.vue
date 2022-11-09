<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useFoodStore, useCartStore } from "../stores/stores";

export default {
  name: "ListCartItem",
  props: ["cartItem", "qty"],
  data() {
    return {
      lastQty: 1,
    };
  },
  methods: {
    ...mapActions(useFoodStore, ["convertPrice"]),
    ...mapActions(useCartStore, ["updateQuantity"]),
    ...mapActions(useCartStore, ["deleteFoodFromCart"]),
    decreaseQty(id) {
      if (this.currentQuantity === 1) {
        this.currentQuantity = 1;
      } else {
        this.currentQuantity -= 1;
      }
      this.updateQuantity(id, this.currentQuantity);
    },
    increaseQty(id) {
      this.currentQuantity += 1;
      this.updateQuantity(id, this.currentQuantity);
    },
  },
  computed: {
    ...mapWritableState(useCartStore, ["currentQuantity"]),
  },
};
</script>

<template>
  <div class="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
    <div class="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
      <div class="flex flex-wrap items-center -mx-4">
        <div class="w-full px-4 mb-3 md:w-1/3">
          <div class="w-full h-96 md:h-24 md:w-24">
            <img
              :src="cartItem.Food.imageUrl"
              alt=""
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <div class="w-2/3 px-4">
          <h2 class="mb-2 text-xl font-semibold">
            {{ cartItem.Food.name }}
          </h2>
          <button
            @click="deleteFoodFromCart(cartItem.id)"
            class="py-2 hover:text-gray-700 text-gray-400"
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="hidden px-4 lg:block lg:w-2/12">
      <p class="text-lg text-gray-900">
        {{ convertPrice(cartItem.Food.price) }}
      </p>
    </div>
    <div class="w-auto px-4 md:w-1/6 lg:w-2/12">
      <div class="inline-flex items-center font-semibold text-gray-500">
        <button
          @click="decreaseQty(cartItem.id)"
          class="inline-flex items-center justify-center w-8 h-8 mr-2 text-white transition-colors duration-150 bg-[#00B14F] rounded-md focus:shadow-outline hover:bg-[#13984f]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
              clip-rule="evenodd"
            />
            {{ cartItem.quantity }}
          </svg>
        </button>
        <input
          v-model="cartItem.quantity"
          type="number"
          class="w-12 px-2 text-center border-0 rounded-md bg-gray-50 md:text-right"
        />
        <div class="cursor-pointer">
          <button
            @click="increaseQty(cartItem.id)"
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
              {{ cartItem.quantity }}
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="w-auto px-4 text-right md:w-1/6 lg:w-2/12">
      <p class="text-lg text-gray-900">
        {{ convertPrice(cartItem.totalPrice) }}
      </p>
    </div>
  </div>
</template>
