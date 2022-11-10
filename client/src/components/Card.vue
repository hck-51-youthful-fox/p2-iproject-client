<script>
import { mapState, mapActions } from "pinia";
import { useClientStore } from "../stores/client";

export default {
  name: "Card",
  methods: {},
  props: ["product"],
  methods: {
    ...mapActions(useClientStore, ["addQuantity"]),
  },
};
</script>

<template>
  <!-- This is an example component -->
  <div
    class="bg-white w-48 relative shadow overflow-hidden my-10 hover:scale-110 ease-out duration-200 cursor-pointer"
    @click.prevent="addQuantity(1, product.id)"
  >
    <div class="absolute text-white bg-orange-500 rounded-r-sm">
      <span class="p-4">Star</span>
    </div>

    <img
      class="w-64"
      :src="product.imageUrl"
      alt="AGLAONEMA RED ANJAMANI / AGLONEMA RED ANJAMANI MURMER"
    />
    <img
      class="absolute top-0 left-0"
      src="https://cf.shopee.co.id/file/8c4268085e96a98ff5e16002cbe5f564"
    />
    <div class="pt-3 pb-4 px-2">
      <div class="text-sm overflow-hidden h-8 leading-4">
        {{ product.name }}
      </div>
      <div class="flex justify-between items-center mt-1">
        <div class="text-orange-500">
          <span class="text-sm">Rp</span
          ><span class="text-md">{{ product.price }}</span>
        </div>
        <div class="text-sm text-gray-600">Stok Unlimited</div>
      </div>
    </div>
  </div>
</template>
