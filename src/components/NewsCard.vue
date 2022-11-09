<script>
export default {
  name: "NewsCard",
  props: ["news", "index"],
};
</script>

<template>
  <div class="card h-100">
    <!-- Product image-->
    <img class="card-img-top" :src="news.image" alt="..." />
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
          {{ news.body }}
        </span>
      </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div class="text-center">
        <a class="btn btn-outline-dark mt-auto" :href="news.url" target="_blank"
          >READ MORE...</a
        >
      </div>
    </div>
  </div>
</template>
