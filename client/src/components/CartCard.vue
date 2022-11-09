<script>
import { setTransitionHooks } from "vue";

export default {
  name: "CartCard",
  props: ["transaction"],
  data() {
    return {
      totalPrice: 0,
    };
  },
  methods: {
    total() {
      this.totalPrice =
        this.transaction.quantity * this.transaction.Beverage.price;
    },
  },
};
</script>

<template>
  <div class="d-flex justify-content-between align-items-center cart-card mb-3">
    <img :src="transaction.Beverage.imgUrl" alt="" />
    <h5 class="card-title">{{ transaction.Beverage.name }}</h5>
    <h5 class="card-title">{{ transaction.Beverage.price }}</h5>
    <h5 class="card-title">{{ transaction.quantity }}</h5>
  </div>
</template>

<style>
.cart-card {
  height: 130px;
}

.cart-card img {
  width: 100px;
  height: 100px;
}
</style>
