<script>
export default {
  name: "MenuCard",
  props: ["beverage"],
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <div class="card-body information mb-3">
      <div class="d-flex justify-content-center">
        <img :src="beverage.imgUrl" width="100" alt="" />
      </div>
      <div class="d-flex justify-content-center">
        <h5 class="card-title">{{ beverage.name }}</h5>
      </div>
      <div class="d-flex justify-content-center text-center">
        <p class="card-text">
          {{ beverage.description }}
        </p>
      </div>
      <div class="d-flex justify-content-center align-items-center mb-1 mt-2">
        <button type="button" class="btn btn-success">
          <h6 class="mx-1 my-1">+ {{ beverage.price }}</h6>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.card-body {
  border: 1px solid;
}

.card {
  border: 0;
}

.information {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
