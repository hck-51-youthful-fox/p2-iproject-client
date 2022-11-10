<script>
import { mapActions } from "pinia";
import { useInvestrStore } from "../stores";

export default {
  name: "signin",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useInvestrStore, ["signUp"]),
  },
};
</script>
<template>
  <div class="container-fluid position-relative d-flex p-0">
    <!-- Sign In Start -->
    <div class="container-fluid">
      <div
        class="row h-100 align-items-center justify-content-center"
        style="min-height: 100vh"
      >
        <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <a href="index.html" class="">
                <h3 class="text-primary">INVESTR</h3>
              </a>
              <h5>Sign Up</h5>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingText"
                placeholder="jhondoe"
                v-model="user.username"
              />
              <label for="floatingText">Username</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="user.email"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                v-model="user.password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <button
              type="submit"
              class="btn btn-primary py-3 w-100 mb-4"
              @click="signUp(user)"
            >
              Sign Up
            </button>
            <p class="text-center mb-0">
              Already have an Account?
              <a href="" @click.prevent="this.$router.push('/signin')"
                >Sign In</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Sign In End -->
  </div>
</template>
