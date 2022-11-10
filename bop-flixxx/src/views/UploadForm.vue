<script>
import { useShowStore } from "../stores/shows";
import { mapActions } from "pinia";
import axios from "axios";
let baseUrl = 'https://bopflix.herokuapp.com/rents'
// let baseUrl = 'http://localhost:3000/rents'

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
      try {
        let access_token = localStorage.access_token;
        const formData = new FormData();
        formData.append("image", this.selectedFile, this.selectedFile.name);
        axios
          .post(
            `${baseUrl}/${this.$route.params.id}`,
            formData,
            {
              headers: {
                access_token,
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((res) => {
            Swal.fire({
              icon: "success",
              title: "Successfully added to your list",
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.push({ name: "rented" });
            console.log(res);
          });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You already has this one on your list",
        });
      }
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
