<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { useGlobalStore } from "../stores/global";

export default {
  components: {
    RouterLink,
  },
  props: ["pet"],
  computed: {
    changeImg() {
      if (!this.pet.imgUrl) {
        if (this.pet.type === "Dog") {
          return "https://i1.sndcdn.com/artworks-noS4lr2F587QJOcE-sRfyhQ-t500x500.jpg";
        }
        if (this.pet.type === "Cat") {
          return "https://pbs.twimg.com/media/Eyj1WpHXMAAkKTU.jpg";
        }
      } else {
        return this.pet.imgUrl;
      }
    },
  },
  methods: {
    ...mapActions(useGlobalStore, ["fetchPetDetail"]),
  },
};
</script>

<template>
  <div class="card d-flex" style="width: 18rem">
    <img
      style="height: 100px; width: 100px"
      :src="changeImg"
      class="rounded-circle align-self-center mt-2"
      alt="..."
    />
    <div
      class="card-body d-flex justify-content-center flex-column text-center"
    >
      <h6 class="mb-2">{{ pet.name }}</h6>
      <button
        v-if="pet.rented === true"
        type="button"
        class="btn btn-outline-success w-50 align-self-center"
        @click="$router.push(`/form/${pet.id}`)"
      >
        Finish Rent
      </button>
      <button
        v-if="pet.rented === false"
        type="button"
        class="btn btn-outline-success w-50 align-self-center"
        @click="fetchPetDetail(pet.PetId)"
      >
        See Details
      </button>
    </div>
  </div>
</template>
