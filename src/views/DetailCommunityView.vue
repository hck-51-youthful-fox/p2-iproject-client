<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main";
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "DetailCommunityView",
  computed: {
    ...mapState(useMainStore, ["selectedNews"]),
    ...mapWritableState(useMainStore, ["comment"]),
  },
  methods: {
    ...mapActions(useMainStore, ["getPostById", "postComment"]),
  },
  created() {
    let id = this.$route.params.id;
    this.getPostById(id);
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ selectedNews.title }}</h1>

    <img :src="selectedNews.imageUrl" alt="img" />

    <p>{{ selectedNews.content }}</p>

    <h3>User Comment</h3>
    <div class="" v-for="comment in selectedNews.Comments">
      <hr class="bg-danger border-2 border-top border-danger" />
      <p>From User : {{ comment.User.username }}</p>
      <p>{{ comment.comment }}</p>
      <hr class="bg-danger border-2 border-down border-danger" />
    </div>

    <form @submit.prevent="postComment(selectedNews.id)">
      <div class="form-outline">
        Comment :
        <textarea
          class="form-control"
          id="textAreaExample"
          rows="4"
          v-model="comment"
        ></textarea>
      </div>
      <button
        type="submit"
        class="btn btn-outline-dark btn-block rounded-pill mt-3"
      >
        Post Comment
      </button>
    </form>
  </div>
</template>
