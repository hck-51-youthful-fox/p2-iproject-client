<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main";
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "CommunityView",
  computed: {
    ...mapWritableState(useMainStore, ["DbNews", "currentPage", "totalPages"]),
  },
  methods: {
    ...mapActions(useMainStore, ["getPostFromDB"]),
  },
  created() {
    // console.log("afgdfsdgf");
    this.getPostFromDB();
  },
};
</script>

<template>
  <header class="bg-dark py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="text-center text-white">
        <h1 class="display-4 fw-bolder">Communities Posts</h1>
        <p class="lead fw-normal text-white-50 mb-0">
          Be careful with fake news!
        </p>
      </div>
    </div>
  </header>
  <div
    class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center mt-5"
  >
    <div class="col mb-5" style="width: 400px" v-for="(news, index) in DbNews">
      <!-- News Card -->
      <div class="card h-100">
        <!-- Product image-->
        <img class="card-img-top" :src="news.imageUrl" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
          <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">{{ news.title }}</h5>
            <!-- Product price-->
            <span
              style="
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                height: 150px;
              "
            >
              {{ news.content }}
            </span>
          </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
            <RouterLink
              class="btn btn-outline-dark mt-auto"
              :to="`/community/${news.id}`"
              >READ MORE...</RouterLink
            >
          </div>
        </div>
      </div>
      <!-- End News Card -->
    </div>
  </div>
  <div class="pagination-div text-center mt-5">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          @click.prevent="getPostFromDB(currentPage - 1)"
          v-if="currentPage !== 1"
          >Previous</a
        >
      </li>
      <div class="" v-for="index in totalPages">
        <li class="page-item">
          <a class="page-link" @click.prevent="getPostFromDB(index)">{{
            index
          }}</a>
        </li>
      </div>
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          @click.prevent="getPostFromDB(currentPage + 1)"
          v-if="currentPage > 0"
          >Next</a
        >
      </li>
    </ul>
  </div>
</template>
