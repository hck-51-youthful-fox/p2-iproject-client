<script>
import { RouterLink, RouterView } from "vue-router";
import { useCartStore, useCustomerStore } from "./stores/stores";
import { mapActions, mapState, mapWritableState } from "pinia";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    RouterView,
    Navbar,
  },
  methods: {
    ...mapActions(useCartStore, ["fetchCart"]),
  },
  computed: {
    ...mapWritableState(useCustomerStore, ["isLogin"]),
    ...mapWritableState(useCartStore, ["totalOrderInCart"]),
    ...mapState(useCartStore, ["cart"]),
    totalItemInCart() {
      return this.cart.length > 0 ? this.cart.length : 0;
    },
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
      this.fetchCart();
    }
  },
};
</script>

<template>
  <section class="flex h-full bg-slate-50 font-poppin">
    <div class="flex-1 max-h-full overflow-hidden overflow-y-hidden">
      <Navbar :totalOrderInCart="totalOrderInCart" />
      <RouterView />
    </div>
  </section>
</template>
