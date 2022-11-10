<script>
import { mapState, mapActions } from 'pinia';
import { useRZStore } from '../stores/RZ';

export default{
    name: "Card Product",
    props: ['product'],
    computed: {
      displayRupiah(){
        return this.convertCurrencyRupiah(this.product.price)
      },
      ...mapState(useRZStore, ['checkLogin'])
    },
    methods: {
      ...mapActions(useRZStore, ['convertCurrencyRupiah']),

    }

}
</script>
<template>
    <div>
     <div class="w-auto p-2 bg-white rounded-xl">
       <img class="h-40-object-cover rounded-xl" :src="product.img" alt="">
       <div class="p-2">
       <h2 class="font-bold text-lg">{{ product.name }}</h2>
       <p class="text-sm text-gray-600">{{ product.description }}</p>
      </div>
       <div class="m-2">
        <p class="text-sm text-gray-600">{{ displayRupiah}}</p>
        <button class="text-white bg-amber-300 px-3 py-1 rounded-md">{{ product.status}}</button>
         </div>
       <div class="m-2">
        <button role="button" href="" class="text-white bg-sky-600 px-3 py-1 rounded-md" v-if="checkLogin">Buy</button>
       </div>
     </div>  
     </div>  
</template>