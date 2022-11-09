<script>
import { mapState, mapActions } from "pinia";
import { useAllStore } from "../stores/all";
import CartCard from "../components/CartCard.vue";

export default {
  name: "CartModal",
  computed: {
    ...mapState(useAllStore, ["transactions"]),
  },
  methods: {
    ...mapActions(useAllStore, ["getTransaction"]),
  },
  created() {
    this.getTransaction();
  },
  components: { CartCard },
};
</script>

<template>
  <div class="container-fluid-1 mb-2 mt-2 me-2 ms-2">
    <div class="row">
      <div class="col-11 ms-4">
        <div class="card">
          <CartCard
            v-for="transaction in transactions"
            :key="transaction.id"
            :transaction="transaction"
          />
          <div class="btn btn-6 ms-4">bayar</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container-fluid-1 {
  height: 80%;
  width: 75%;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border: 5px solid #000;
}
</style>
