<script>
import { mapState, mapActions, mapWritableState } from "pinia";
import { useShowStore } from "../stores/shows";
import { useUserStore } from "../stores/user";

export default {
  name: "Detail",
  data() {
    return {
      apakek: {},
    };
  },
  computed: {
    ...mapState(useShowStore, ["show"]),
    ...mapState(useUserStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useShowStore, ["fetchShowById"]),
  },
  created() {
    this.fetchShowById(this.$route.params.id);
  },
};
</script>

<template>
  <div class="row justify-content-center mt-5">
    <div class="row gx-5">
      <div class="col">
        <img :src="show.image.original" alt="" class="w-100" />
      </div>
      <div class="col">
        <div class="ml-5">
          <h1>{{ show.name }}</h1>
          <div class="row">
            <p class="col">{{ show.summary }}</p>
            <h6 class="col" v-if="isLogin">
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
          <h3>Genres: {{ show.genres }}</h3>
          <h3>Rating: {{ show.rating.average }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
