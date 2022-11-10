<script>
import { mapActions, mapState } from "pinia";
import Card from "../components/Card.vue";
import { useClientStore } from "../stores/client";

export default {
  name: "Cart",
  data() {
    return {
      selectedCity: "",
    };
  },
  components: { Card },
  computed: {
    ...mapState(useClientStore, [
      "datasInCart",
      "totalAllPriceInCart",
      "Allcity",
      "ongkir",
    ]),
  },
  methods: {
    ...mapActions(useClientStore, [
      "fetchProductInCart",
      "updateQuantity",
      "deleteFromCart",
      "fetchCity",
      "checkOngkir",
      "payment",
      "addInvoice",
    ]),
  },
  async created() {
    await this.fetchProductInCart();
    await this.fetchCity();
  },
};
</script>

<template>
  <section id="dashboard" class="p-8 bg-gray-100 w-100">
    <h1>CART</h1>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg mb-10">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >Pilih Kota</label
              >
              <select
                id="countries"
                v-model="selectedCity"
                @click.prevent="checkOngkir(selectedCity)"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option :value="city.city_id" v-for="city in Allcity">
                  {{ city.city_name }}
                </option>
              </select>
            </th>
            <th scope="col" class="py-3 px-6">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >Dari</label
              >
            </th>
            <th scope="col" class="py-3 px-6">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >Ke</label
              >
            </th>
            <th scope="col" class="py-3 px-6">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >Ongkir</label
              >
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >{{ ongkir }}</label
              >
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <!-- dsa -->
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">Product name</th>
            <th scope="col" class="py-3 px-6">Harga Satuan</th>
            <th scope="col" class="py-3 px-6">Kuantitas</th>
            <th scope="col" class="py-3 px-6">Total Harga</th>
            <th scope="col" class="py-3 px-6">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="data in datasInCart"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 w-1/2"
          >
            <td class="p-5 flex flex-row">
              <img class="w-2/12 rounded" :src="data.Product.imageUrl" alt="" />
              <h1 class="items-center justify-center">
                {{ data.Product.name }}
              </h1>
            </td>

            <td class="py-4 px-6">Rp.{{ data.Product.price }}</td>
            <td class="py-4 px-6 flex felx-row">
              <button
                class="p-4 border border-orange-600"
                @click.prevent="
                  updateQuantity(data.quantity - 1, data.Product.id)
                "
              >
                -
              </button>
              <label class="p-4 border border-orange-600">{{
                data.quantity
              }}</label>
              <button
                class="p-4 border border-orange-600"
                @click.prevent="
                  updateQuantity(data.quantity + 1, data.Product.id)
                "
              >
                +
              </button>
            </td>
            <td class="py-4 px-6">
              Rp. {{ data.Product.price * data.quantity }}
            </td>
            <td class="py-4 px-6">
              <a
                @click.prevent="deleteFromCart(data.id)"
                href="#"
                class="font-medium text-red-600 dark:text-blue-500 hover:underline"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- card chekout -->
    <div class="w-full sticky bottom-0 bg-white">
      <div
        class="border rounded overflow-hidden flex flex-row justify-between h-6/12 p-4 justify-center items-center text-center"
      >
        <div>
          <h1>Total Harga</h1>
        </div>
        <div
          class="flex flex-row w-3/12 justify-center items-center text-center"
        >
          <div class="">
            <p class="">Rp.{{ totalAllPriceInCart + ongkir }}</p>
          </div>
          <button
            @click.prevent="addInvoice(ongkir, totalAllPriceInCart + ongkir)"
            class="p-3 w-full border-none border-slate-300 rounded-sm mt-3 text-neutral-50 bg-orange-500 hover:bg-orange-600 ml-4"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
