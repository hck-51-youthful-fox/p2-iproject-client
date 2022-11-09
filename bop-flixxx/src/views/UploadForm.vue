<script>
import { useShowStore } from "../stores/shows";
import { mapActions } from "pinia";
import axios from "axios";

export default {
  name: "UploadForm",
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    ...mapActions(useShowStore, ["addRent"]),
    handleSubmit() {
      let access_token = localStorage.access_token;
      const formData = new FormData();
      formData.append("image", this.selectedFile, this.selectedFile.name);
      axios
        .post(
          `http://localhost:3000/rents/${this.$route.params.id}`,
          formData,
          {
            headers: { access_token },
          }
        )
        .then((res) => {
          console.log(res);
        });
    },
    // async submitForm(id) {
    //   await this.addRent(id);
    // },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
  },
};
</script>

<template>
  <div class="mb-3">
    <form
      method="post"
      enctype="multipart/form-data"
      @submit.prevent="handleSubmit"
    >
      <label for="formFile" class="form-label"
        >Upload proof of transaction (jpg/png) max 2MB</label
      >
      <input
        @change="onFileSelected"
        class="form-control"
        type="file"
        id="formFile"
      />
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
