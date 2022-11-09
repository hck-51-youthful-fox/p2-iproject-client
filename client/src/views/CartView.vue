<script>
import { mapActions, mapState } from "pinia";
import ListCartItem from "../components/ListCartItem.vue";
import { useCartStore, useFoodStore } from "../stores/stores";

export default {
  name: "CartView",
  data() {
    return {
      quantity: 1,
    };
  },
  components: {
    ListCartItem,
  },
  methods: {
    ...mapActions(useCartStore, ["fetchCart"]),
    ...mapActions(useFoodStore, ["convertPrice"]),
  },
  computed: {
    ...mapState(useCartStore, ["cart"]),
    ...mapState(useCartStore, ["totalPriceInCart"]),
    ...mapState(useCartStore, ["totalOrderInCart"]),
  },
  created() {
    this.fetchCart();
  },
};
</script>

<template>
  <main class="flex-1 pt-12 pb-24 bg-slate-100">
    <section class="px-44 pt-20 flex items-center bg-slate-100 font-poppin">
      <div
        class="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6"
      >
        <div class="p-8 bg-gray-50 dark:bg-gray-800">
          <h2 class="mb-8 text-4xl font-bold dark:text-gray-400">Pesanan</h2>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
              <div class="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                <div
                  class="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0"
                >
                  <h2 class="font-bold text-gray-500 dark:text-gray-400">
                    Makanan
                  </h2>
                </div>
                <div class="hidden px-4 lg:block lg:w-2/12">
                  <h2 class="font-bold text-gray-500 dark:text-gray-400">
                    Harga
                  </h2>
                </div>
                <div class="hidden md:block px-4 md:w-1/6 lg:w-2/12">
                  <h2 class="font-bold text-gray-500 dark:text-gray-400">
                    Jumlah
                  </h2>
                </div>
                <div class="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12">
                  <h2 class="font-bold text-gray-500 dark:text-gray-400">
                    Subtotal
                  </h2>
                </div>
              </div>
              <div class="py-4 mb-8 border-t border-b border-gray-200">
                <ListCartItem
                  v-for="cartItem in cart"
                  :key="cartItem.id"
                  :cartItem="cartItem"
                  :qty="cartItem.quantity"
                />
              </div>
            </div>

            <!--Ringkasan Pembayaran-->
            <div class="w-full px-4 xl:w-4/12">
              <div
                class="p-6 border border-blue-100 dark:bg-gray-900 dark:border-gray-900 bg-blue-50 md:p-8"
              >
                <h2 class="mb-8 text-2xl font-bold text-gray-700">
                  Ringkasan Pesanan
                </h2>
                <div class="flex items-center justify-between pb-4">
                  <span class="text-gray-700 dark:text-gray-400"
                    >Jumlah Pesanan</span
                  >
                  <span class="text-xl font-bold text-gray-700">{{
                    totalOrderInCart
                  }}</span>
                </div>

                <div class="flex items-center justify-between pb-4 mb-4">
                  <span class="text-gray-700">Total Pembayaran</span>
                  <span class="text-xl font-bold text-gray-700">{{
                    convertPrice(totalPriceInCart)
                  }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
