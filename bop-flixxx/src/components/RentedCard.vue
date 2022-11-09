<script>
import { mapActions } from "pinia";
import { useShowStore } from "../stores/shows";

export default {
  name: "RentedCard",
  props: ["rent"],
  methods: {
    async onClick() {
      window.open(this.rent.imgUrl, "_blank");
    },
    ...mapActions(useShowStore, ["deleteRented"]),
    async deleteButton(id) {
      await this.deleteRented(id);
    },
  },
};
</script>

<template>
  <div class="col">
    <div class="card" style="width: 20rem">
      <img class="card-img-top" :src="rent.showImgUrl" alt="Card image cap" />
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 class="card-title">{{ rent.showName }}</h5>
          <h6>
            <span
              @click.prevent="deleteButton(rent.id)"
              style="color: red; cursor: pointer"
              class="material-symbols-outlined"
            >
              delete_sweep
            </span>
          </h6>
        </div>
        <p class="card-text">
          {{ rent.showSummary }}
        </p>
        <button @click.prevent="onClick" type="button" class="btn btn-dark">
          Payment Receipt
        </button>
      </div>
    </div>
  </div>
</template>
