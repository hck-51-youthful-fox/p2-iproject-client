<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main";
export default {
  name: "EditView",
  computed: {
    ...mapState(useMainStore, ["selectedNews"]),
    ...mapWritableState(useMainStore, ["post"]),
  },
  methods: {
    ...mapActions(useMainStore, ["getPostById", "editPost"]),
  },
  created() {
    let id = this.$route.params.id;
    this.getPostById(id);
  },
};
</script>

<template>
  <div class="card p-5 mt-3">
    <h3 class="text-center mb-3">Edit Form</h3>
    <form @submit.prevent="editPost(this.$route.params.id)">
      <div class="form-group">
        <label>Title</label>
        <input
          type="text"
          class="form-control"
          name="email"
          v-model="post.title"
        />
      </div>
      <div class="form-group">
        <div class="mb-3">
          <label for="" class="form-label">Content</label>
          <textarea
            class="form-control"
            name=""
            id=""
            rows="3"
            v-model="post.content"
          ></textarea>
        </div>
      </div>
      <div class="form-group">
        <label>Image Url</label>
        <input
          type="text"
          class="form-control"
          name="Image URL"
          v-model="post.imageUrl"
        />
      </div>
      <div class="form-group">
        <label>Tag</label>
        <input type="text" class="form-control" name="Tag" v-model="post.tag" />
      </div>
      <button
        type="submit"
        class="btn btn-outline-dark btn-block rounded-pill mt-3"
      >
        Edit
      </button>
    </form>
  </div>
</template>
