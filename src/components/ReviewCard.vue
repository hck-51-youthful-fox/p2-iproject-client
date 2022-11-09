<script>
import { useBonfireStore } from "../stores/bonfire";
import { mapState } from "pinia";
import { RouterLink } from "vue-router";

export default {
  nama: "ReviewCard",
  components: { RouterLink },
  props: ["review"],
  computed: {
    getPostedDate() {
      return this.review.createdAt.split("T")[0];
    },
    ...mapState(useBonfireStore, ["isVerified", "explore"]),
  },
  methods: {},
  created() {},
};
</script>

<template>
  <div class="card my-3">
    <div
      class="card-header d-flex justify-content-between align-items-center bg-dark text-white"
    >
      <h5 class="card-title mx-1 mb-0">
        Posted By : {{ review.User.username }}
      </h5>
      <p class="card-text mx-1 mb-0">Posted On : {{ getPostedDate }}</p>
    </div>
    <div class="card-body bg-secondary d-flex justify-content-start">
      <p>{{ review.review }}</p>
    </div>
    <div
      class="card-footer d-flex justify-content-between bg-dark align-items-center"
    >
      Score : {{ review.score }} / 100
      <div></div>
    </div>
  </div>
</template>
