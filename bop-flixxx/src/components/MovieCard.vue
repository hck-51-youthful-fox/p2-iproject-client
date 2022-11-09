<script>
import { mapState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  name: "MovieCard",
  props: ["show"],
  computed: {
    ...mapState(useUserStore, ["isLogin"]),
  },
};
</script>

<template>
  <div class="col">
    <div class="card" style="width: 20rem">
      <img
        class="card-img-top"
        :src="show.image.medium"
        alt="Card image cap"
      />
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 class="card-title">{{ show.name }}</h5>
          <h6 v-if="isLogin">
            <span
              @click.prevent="
                $router.push({ name: 'upload', params: { id: show.id } })
              "
              style="color: green; cursor: pointer"
              class="material-symbols-outlined"
            >
              add_shopping_cart
            </span>
          </h6>
        </div>
        <!-- <p class="card-text">
          {{ show.description }}
        </p> -->
        <a
          class="btn btn-primary"
          @click.prevent="
            $router.push({ name: 'detail', params: { id: show.id } })
          "
          >See Detail</a
        >
      </div>
    </div>
  </div>
</template>
