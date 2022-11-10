<script>
import { mapActions } from "pinia";
import { useGlobalStore } from "../stores/global";

export default {
  data() {
    return {
      id: this.$route.params.id,
      rating: "",
      content: "",
    };
  },
  methods: {
    ...mapActions(useGlobalStore, ["review"]),
  },
};
</script>
<template>
  <div class="container">
    <h1>Review</h1>
    <h4>you review means a lot to us</h4>
    <div class="mb-3">
      <label for="rating" class="form-label mt-3">How would you rate me?</label>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="rating"
        id="rating"
      >
        <option selected disabled>select rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >How do you feel?</label
      >
      <textarea
        v-model="content"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <div class="d-flex flex-row gap-3">
      <button @click="$router.push('/rents')" class="btn btn-outline-danger">
        Cancel
      </button>
      <button @click="review(id)" class="btn btn-outline-warning">
        No thanks
      </button>
      <button
        @click="review(id, rating, content)"
        class="btn btn-outline-success"
      >
        Review
      </button>
    </div>
  </div>
</template>
