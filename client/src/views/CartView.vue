<script>
import { mapActions, mapState } from "pinia";
import ListCartItem from "../components/ListCartItem.vue";
import { useCartStore, useFoodStore } from "../stores/stores";

export default {
  name: "CartView",
  data() {
    return {
      quantity: 1,
      destination: "",
    };
  },
  components: {
    ListCartItem,
  },
  methods: {
    ...mapActions(useCartStore, ["fetchCart"]),
    ...mapActions(useCartStore, ["fetchCity"]),
    ...mapActions(useFoodStore, ["convertPrice"]),
    ...mapActions(useCartStore, ["findShippingCost"]),
    ...mapActions(useCartStore, ["addTransaction"]),
    // handleAddTransaction() {
    //   this.$router.push({
    //     name: "invoice",
    //     params: {
    //       id: this.product.id,
    //     },
    //   });
    // },
  },
  computed: {
    ...mapState(useCartStore, ["cart"]),
    ...mapState(useCartStore, ["city"]),
    ...mapState(useCartStore, ["cost"]),
    ...mapState(useCartStore, ["totalPriceInCart"]),
    ...mapState(useCartStore, ["totalOrderInCart"]),
    ...mapState(useCartStore, ["totalAllCost"]),
  },
  created() {
    this.fetchCart();
    this.fetchCity();
  },
};
</script>

<template>
  <main class="flex-1 pt-12 pb-24 bg-slate-100">
    <section class="px-44 pt-20 flex items-center bg-slate-100 font-poppin">
      <div
        class="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6"
      >
        <div class="p-8 bg-gray-50">
          <h2 class="mb-8 text-4xl font-bold">Pesanan</h2>
          <div v-if="cart.length === 0" class="h-40">
            <h3
              class="w-full text-2xl font-semibold text-gray-400 text-center pb-2 pt-4"
            >
              Kamu belum memiliki pesanan apapun
            </h3>
            <p class="font-base text-gray-400 text-center text-1xlpt-4">
              Tambahkan makanan kesukaanmu dan pesan sekarang!
            </p>
          </div>
          <div v-if="cart.length !== 0" class="flex flex-wrap -mx-4">
            <div class="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
              <div class="flex flex-wrap items-center mb-4 -mx-4">
                <div
                  class="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0"
                >
                  <h2 class="font-semibold text-gray-700">Makanan</h2>
                </div>
                <div class="hidden px-4 lg:block lg:w-2/12">
                  <h2 class="font-semibold text-gray-700">Harga</h2>
                </div>
                <div class="hidden md:block px-4 md:w-1/6 lg:w-2/12">
                  <h2 class="font-semibold text-gray-700">Jumlah</h2>
                </div>
                <div class="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12">
                  <h2 class="font-semibold text-gray-700">Subtotal</h2>
                </div>
              </div>
              <div class="pt-8 border-t border-b border-gray-200">
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
              <h2
                for="countries"
                class="block mb-4 text-lg font-bold text-gray-900"
              >
                Pilih lokasi pengiriman
              </h2>
              <div class="flex items-center pb-8">
                <label for="simple-search" class="sr-only">Search</label>
                <select
                  v-model="destination"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00B14F] focus:border-[#00B14F] block w-full p-2.5"
                >
                  <option selected value="">Pilih lokasi pengiriman</option>
                  <option
                    v-for="oneCity in city"
                    :key="oneCity.id"
                    :value="oneCity.city_id"
                  >
                    {{ oneCity.city_name }}
                  </option>
                </select>
                <button
                  @click="findShippingCost(this.destination)"
                  type="submit"
                  class="p-2.5 ml-2 text-sm font-medium text-white bg-[#00B14F] rounded-md focus:shadow-outline hover:bg-[#13984f] focus:ring-4 focus:outline-none focus:ring-[#13984f]"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="p-6 border border-[#00B14F] bg-green-50 md:p-8">
                <h2 class="mb-8 text-2xl font-bold text-gray-700">
                  Ringkasan Pesanan
                </h2>
                <div class="flex items-center justify-between pb-4">
                  <span class="text-gray-700">Subtotal</span>
                  <span class="text-xl font-bold text-gray-700">{{
                    convertPrice(totalPriceInCart)
                  }}</span>
                </div>
                <div
                  class="flex items-center justify-between pb-4 mb-4 border-b border-gray-300"
                >
                  <span class="text-gray-700">Ongkos Kirim</span>
                  <span class="text-xl font-bold text-gray-700">{{
                    convertPrice(cost)
                  }}</span>
                </div>

                <div class="flex items-center justify-between pb-4 mb-4">
                  <span class="text-gray-700">Total Pembayaran</span>
                  <span class="text-xl font-bold text-gray-700">{{
                    convertPrice(totalAllCost)
                  }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <button
                    @click="addTransaction(cost)"
                    class="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-[#00B14F] rounded-md focus:shadow-outline hover:bg-[#13984f]"
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
