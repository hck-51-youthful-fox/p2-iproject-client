<script>
import RentedCard from "../components/RentedCard.vue";
import { mapActions, mapState } from "pinia";
import { useShowStore } from "../stores/shows";

export default {
  name: "Rented",
  components: {
    RentedCard,
  },
  computed: {
    ...mapState(useShowStore, ["rented"]),
  },
  methods: {
    ...mapActions(useShowStore, ["fetchRented"]),
  },
  created() {
    this.fetchRented();
  },
};
</script>

<template>
  <div class="mb-5">
    <img
      src="../assets/unnamed-removebg-preview.png"
      class="d-block w-100"
      alt="Banner"
      style="height: 850px"
    />
  </div>
  <div class="col-10">
    <div class="row row-cols-3 row-cols-xs-3 g-4">
      <RentedCard v-for="rent in rented" :key="rent.id" :rent="rent" />
    </div>
  </div>
</template>
