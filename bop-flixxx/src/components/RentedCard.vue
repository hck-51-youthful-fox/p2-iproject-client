<script>
export default {
  name: "RentedCard",
  props: ["rent"],
};
</script>

<template>
  <div class="col">
    <div class="card" style="width: 20rem">
      <img class="card-img-top" :src="rent.showImgUrl" alt="Card image cap" />
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 class="card-title">{{ rent.showName }}</h5>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Payment receipt
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Payment receipt
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body"><img :src="rent.imgUrl" /></div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- <h6>
            <span
              @click.prevent="deleteBookmark(bookmark.id)"
              style="color: red; cursor: pointer"
              class="material-symbols-outlined"
            >
              delete_sweep
            </span>
          </h6> -->
        </div>
        <p class="card-text">
          {{ rent.showSummary }}
        </p>
        <a
          class="btn btn-primary"
          @click.prevent="
            $router.push({ name: 'detail', params: { id: bookmark.Job.id } })
          "
          >See Detail</a
        >
      </div>
    </div>
  </div>
</template>
