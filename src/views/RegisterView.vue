<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useMainStore } from "../stores/main";
export default {
  name: "RegisterView",
  computed: {
    ...mapWritableState(useMainStore, ["user"])
  },
  methods: {
    ...mapActions(useMainStore, ["registerUser"])
  }
};
</script>

<template>
  <div class="card p-5 mt-3">
    <h3 class="text-center mb-3">Login</h3>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" name="email" v-model="user.email" />
      </div>
      <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" name="password" v-model="user.username" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" name="password" v-model="user.password" />
      </div>
      <button
        type="submit"
        class="btn btn-outline-dark btn-block rounded-pill mt-3"
      >
        Register
      </button>
    </form>
  </div>
</template>
