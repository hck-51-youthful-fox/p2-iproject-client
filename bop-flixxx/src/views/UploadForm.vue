<script>
import { useShowStore } from "../stores/shows";
import { mapActions } from "pinia";

export default {
  name: "UploadForm",
  methods: {
    ...mapActions(useShowStore, ["addRent"]),
    async submitForm(id) {
      await this.addRent(id);
    },
  },
};
</script>

<template>
  <div class="mb-3">
    <form
      method="post"
      enctype="multipart/form-data"
      @submit.prevent="submitForm($route.params.id)"
    >
      <label for="formFile" class="form-label"
        >Upload proof of transaction (jpg/png)</label
      >
      <input class="form-control" type="file" id="formFile" />
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
