<script>
import { mapActions } from "pinia";
import { useAllStore } from "../stores/all";

export default {
  name: "LoginPage",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useAllStore, ["login"]),
  },
  created() {
    this.user = {
      email: "",
      password: "",
    };
  },
};
</script>

<template>
  <div class="form-login px-lg-5">
    <div class="row px-5">
      <div
        class="ps-5 col-12 col-md-6 jumbotron d-flex align-items-start pt-5 bg-transparent my-0 py-0 pr-4 border-0 login-text"
      >
        <h2 class="d-block fw-bolder">
          Login to your <br />
          YOUTUBE Account
        </h2>
      </div>
      <div class="col-12 col-md-6">
        <div
          class="col-sm-12 col-md-12 d-flex flex-column justify-content-sm-center align-items-sm-center align-items-md-center"
        >
          <form class="w-100" @submit.prevent="login(user)">
            <div class="form-group mb-2">
              <label for="login-email">Email </label>
              <label class="text-danger text-end fw-bold"> *</label>
              <input
                type="email"
                required
                v-model="user.email"
                class="form-control"
                id="login-email"
                placeholder="yourname@example.com"
                autocomplete="off"
              />
            </div>
            <div class="form-group">
              <label for="login-password">Password</label>
              <label class="text-danger text-end fw-bold"> *</label>
              <div class="input-group">
                <input
                  type="password"
                  required
                  v-model="user.password"
                  class="form-control"
                  id="login-password"
                  placeholder="enter your password"
                  autocomplete="off"
                />
              </div>
            </div>
            <button class="btn btn-dark fw-bold w-100 btn-lg mt-3 rounded-pill">
              Log in
            </button>
          </form>
          <p class="mt-5">
            <a
              href=""
              @click.prevent="$router.push('/register')"
              class="text-blue text-decoration-none"
              >Register a new account</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-login {
  margin: 25vh 100px;
}
</style>
