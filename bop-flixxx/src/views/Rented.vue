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
    ...mapActions(useShowStore,["fetchRented"]),
  },
  created(){
    this.useShowStore()
  }
};
</script>

<template>
  <div class="mb-5">
    <img
      src="https://irpp.org/wp-content/uploads/2022/02/Finding-the-Right-Job-A-Skills-Based-Approach-to-Career-Planning.jpg"
      class="d-block w-100"
      alt="Banner"
      style="height: 250px"
    />
  </div>
  <div class="col-10">
    <div class="row row-cols-3 row-cols-xs-3 g-4">
      <RentedCard
        v-for="rent in rented"
        :key="rent.id"
        :rent="rent"
      />
    </div>
  </div>
</template>
