<script>
import { mapActions, mapState } from "pinia";
import { useGlobalStore } from "../stores/global";
export default {
  computed: {
    ...mapState(useGlobalStore, ["petDetail", "reviews", "loggedIn"]),
    checkDesc() {
      if (!this.petDetail.description) {
        return "There is no description regarding this pet.";
      } else {
        return this.petDetail.description;
      }
    },
    changeImg() {
      if (!this.petDetail.photos[0]) {
        if (this.petDetail.type === "Dog") {
          return "https://i1.sndcdn.com/artworks-noS4lr2F587QJOcE-sRfyhQ-t500x500.jpg";
        }
        if (this.petDetail.type === "Cat") {
          return "https://pbs.twimg.com/media/Eyj1WpHXMAAkKTU.jpg";
        }
      } else {
        return this.petDetail.photos[0].medium;
      }
    },
  },
  methods: {
    ...mapActions(useGlobalStore, [
      "fetchReviews",
      "fetchPetDetail",
      "clearingDetails",
      "rent",
    ]),
  },
  created() {
    this.fetchPetDetail(this.$route.params.id);
    this.fetchReviews(this.$route.params.id);
  },
  unmounted() {
    this.clearingDetails();
  },
};
</script>
<template>
  <div class="container-fluid">
    <h1>Pet Details</h1>
    <div class="border-top d-flex flex-row">
      <div class="row w-100 mt-3">
        <div class="col-3">
          <img :src="changeImg" alt="" class="w-100" />
        </div>
        <div class="col-6">
          <div class="ms-4">
            <h3>{{ petDetail.name }}</h3>
            <h5>
              {{ petDetail.gender }} {{ petDetail.age }} {{ petDetail.type }}
            </h5>
            <p>{{ checkDesc }}</p>
          </div>
        </div>
        <div
          class="col-3 justify-content-end d-flex"
          v-if="loggedIn"
          @click="rent(petDetail.id)"
        >
          <button class="btn btn-success align-self-center">Rent Pet</button>
        </div>
      </div>
    </div>
    <div class="row w-100 mt-4">
      <div class="card bg-secondary bg-opacity-10">
        <div class="card-header mb-2"><h3>Reviews</h3></div>
        <div
          v-if="reviews[0]"
          v-for="review in reviews"
          :key="review.id"
          class="card-body bg-white border-bottom border-top"
        >
          <h6 class="card-title">{{ review.User.username }}</h6>

          <i
            v-if="review"
            v-for="n in review.rating"
            class="bi bi-star-fill text-warning"
          ></i>
          <i
            v-for="n in 5 - review.rating"
            v-if="review"
            class="bi bi-star text-warning"
          ></i>

          <p class="card-text">
            {{ review.content }}
          </p>
        </div>
        <div v-else class="card-body bg-white border-bottom border-top">
          <h6 class="card-title">No reviews yet</h6>
        </div>
      </div>
    </div>
  </div>
</template>
