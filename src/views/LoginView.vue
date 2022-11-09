<script>
export default {
  name: "LoginView",
};
</script>

<template>
  <div class="card p-5 mt-3">
    <h3 class="text-center mb-3">Login</h3>
    <form @submit.prevent="loginUser">
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" name="email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" name="password" />
      </div>
      <button
        type="submit"
        class="btn btn-outline-dark btn-block rounded-pill mt-3"
      >
        Login
      </button>
    </form>
    <div id="buttonDiv"></div>
  </div>
</template>
