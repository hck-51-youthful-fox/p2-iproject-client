<script>
export default {
  name: "AddView",
};
</script>

<template>
  <div class="card p-5 mt-3">
    <h3 class="text-center mb-3">Edit / Add Form</h3>
    <form @submit.prevent="loginUser">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" name="email" />
      </div>
      <div class="form-group">
        <div class="mb-3">
          <label for="" class="form-label">Content</label>
          <textarea class="form-control" name="" id="" rows="3"></textarea>
        </div>
      </div>
      <div class="form-group">
        <label>Image Url</label>
        <input type="text" class="form-control" name="password" />
      </div>
      <div class="form-group">
        <label>Tag</label>
        <input type="text" class="form-control" name="password" />
      </div>
      <button
        type="submit"
        class="btn btn-outline-dark btn-block rounded-pill mt-3"
      >
        Add/Edit
      </button>
    </form>
  </div>
</template>
