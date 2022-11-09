<script>
import { mapActions, mapState } from "pinia";
import TransactionView from "../views/TransactionView.vue";
import {
  useCartStore,
  useCategoriesStore,
  useFoodStore,
} from "../stores/stores";

export default {
  name: "TransactionView",
  methods: {
    ...mapActions(useFoodStore, ["convertPrice"]),
    ...mapActions(useCartStore, ["detailTransaction"]),
  },
  computed: {
    ...mapState(useCartStore, ["transaction"]),
    ...mapState(useCartStore, ["fixDetailTransaction"]),
  },
};
</script>

<template>
  <pre>{{ fixDetailTransaction }}</pre>
  <section class="bg-cover bg-slate-50 bg-fixed">
    <div
      class="flex flex-col items-center justify-center px-64 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div class="w-full px-4 mb-4 lg:w-1/2">
        <div class="p-6 border border-blue-100 bg-gray-50 md:p-8">
          <h2
            class="mb-8 text-3xl font-bold text-gray-700 items-center justify-center"
          >
            Invoice
          </h2>
          <pre>{{ transaction }}</pre>
          <p>{{ transaction.order_id }}</p>

          <div class="flex items-center justify-between pb-4 mb-4">
            <span class="text-gray-700 dark:text-gray-400">Order Total</span>
            <span class="text-xl font-bold text-gray-700 dark:text-gray-400">{{
              transaction.totalPrice
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
  </section>
</template>
