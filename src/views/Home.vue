<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import PetCard from "../components/PetCard.vue";
import { useGlobalStore } from "../stores/global";
export default {
  components: {
    PetCard,
  },
  computed: {
    ...mapState(useGlobalStore, ["pets", "pagination", "loggedIn", "username"]),
    ...mapWritableState(useGlobalStore, ["loading"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["fetchPets"]),
  },
  created() {
    this.loading = false;
    this.fetchPets();
  },
};
</script>
<template>
  <div class="container-fluid mb-3 mt-3 d-flex flex-column">
    <div
      class="mb-3 align-self-center d-flex justify-content-start flex-column"
      style="
        height: 50vh;
        width: 80vw;
        background-size: 100% 100%;
        background-image: url(https://t3.ftcdn.net/jpg/04/47/79/04/240_F_447790481_poh2Tlm9bOTNSaRIyfL3yrH0gFpcsh5s.jpg);
      "
    >
      <h1 class="text-white mt-3 ms-5 text-center">Welcome to Rent-A-Pet!</h1>
      <h1 class="text-white mt-2 text-center ms-5" v-if="loggedIn">
        {{ username }}
      </h1>
    </div>

    <div class="row"></div>

    <div class="row border-top border-bottom">
      <div class="container mt-3 w-75 mb-3">
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <PetCard v-for="pet in pets" :key="pet.id" :pet="pet" />
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-md-3"></div>
      <div class="col-md-6 justify-content-between d-flex">
        <button
          class="btn btn-success"
          v-if="pagination.current_page > 1"
          @click="
            fetchPets(pagination.current_page - 1);
            $router.push('/');
          "
        >
          Prev
        </button>
        <button class="btn btn-success disabled" v-else>Prev</button>
        <h6 class="align-self-center">{{ pagination.current_page }}</h6>
        <button
          class="btn btn-success"
          v-if="pagination.current_page != pagination.total_page"
          @click="
            fetchPets(pagination.current_page + 1);
            $router.push('/');
          "
        >
          Next
        </button>

        <button
          class="btn btn-success disabled"
          v-else
          v-if="pagination.current_page != pagination.total_page"
        >
          Next
        </button>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>
