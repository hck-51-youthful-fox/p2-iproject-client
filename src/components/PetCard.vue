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
      if (!this.pet.photos[0]) {
        if (this.pet.type === "Dog") {
          return "https://i1.sndcdn.com/artworks-noS4lr2F587QJOcE-sRfyhQ-t500x500.jpg";
        }
        if (this.pet.type === "Cat") {
          return "https://pbs.twimg.com/media/Eyj1WpHXMAAkKTU.jpg";
        }
      } else {
        return this.pet.photos[0].medium;
      }
    },
  },
  methods: {
    ...mapActions(useGlobalStore, ["fetchPetDetail"]),
  },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-body text-center shadow">
        <p>
          <img
            class="img-fluid rounded-circle"
            style="height: 200px; width: 200px"
            :src="changeImg"
            :alt="pet.name"
          />
        </p>
        <h4 class="card-title">{{ pet.name }}</h4>
        <p class="card-text">{{ pet.gender }} {{ pet.age }} {{ pet.type }}</p>
        <RouterLink
          :to="{ path: `/details/${pet.id}` }"
          href="#"
          class="btn btn-outline-success btn-sm"
        >
          See Details
        </RouterLink>
      </div>
    </div>
  </div>
</template>
