<script>
import { mapState, mapActions } from 'pinia';
import { useRZStore } from '../stores/RZ';
import Pagination from '../components/Pagination.vue';
import CardProduct from '../components/CardProduct.vue';

export default {
    name: "HomePage",
    components: {
        Pagination,
        CardProduct
    },
    computed: {
        ...mapState(useRZStore, ['products', 'totalPage', 'currentPage'])
    },
    methods: {
        ...mapActions(useRZStore, ['fetchProduct'])
    },
    created() {
        this.fetchProduct()
    }
}
</script>
<template>
<div class="mt-16 grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 ...">
    <div class="w-60 p-2 bg-white rounded-xl">
        <button type="submit" class="mt-4 text-sm bg-sky-400 border border-1 px-2 py-1 rounded-md text-white">Add Product</button>
    </div>
  </div>
  <div class="col-span-2 ...">
    <div class="w-auto p-2 mb-2 bg-white rounded-xl">
      <img src="../assets/pokemon1.jpg" alt="">
    </div>
    <div class="w-2/4 p-2 bg-white rounded-xl">
      <img src="../assets/pokemon.jpg" alt="">
    </div>
  </div>
  <div class="row-span-2 " >
    <div class="grid grid-cols-4 gap-4">
      <CardProduct v-for="product in products" :key="product.id" :product="product" class="mb-5" />
    </div>
    <!-- <CardJob v-for="job in jobs" :key="job.id" :job="job" /> -->
    <Pagination :currentPage="currentPage" :totalPage="totalPage" @fetchProduct="fetchProduct" />
  </div>
</div>
</template>