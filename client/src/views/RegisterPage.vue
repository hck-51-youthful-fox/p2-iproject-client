<script>
import axios from "../apis/axiosRegister";

export default {
  name: "RegisterView",
  data() {
    return {
      formRegister: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async moveToHome() {
      this.$router.push({
        name: "menu-page",
      });
    },
    async register() {
      try {
        const { data } = await axios.post("/register", {
          username: this.formRegister.username,
          email: this.formRegister.email,
          password: this.formRegister.password,
        });

        this.moveToHome();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<template>
  <div
    class="modal modal-signin d-block bg-secondary py-5"
    tabindex="-1"
    role="dialog"
    id="modalSignin"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content rounded-4 shadow">
        <div class="modal-header p-5 pb-4 border-bottom-0">
          <h1 class="fw-bold mb-0 fs-2">Sign up for free!</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="moveToHome"
          ></button>
        </div>

        <div class="modal-body p-5 pt-0">
          <form class="" @submit.prevent="register">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control rounded-3"
                id="floatingUsername"
                placeholder="johndoe"
                v-model="formRegister.username"
              />
              <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control rounded-3"
                id="floatingEmail"
                placeholder="name@example.com"
                v-model="formRegister.email"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control rounded-3"
                id="floatingPassword"
                placeholder="Password"
                v-model="formRegister.password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button
              class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
              type="submit"
            >
              Sign up
            </button>
            <small class="text-muted"
              >By clicking Sign up, you agree to the terms of use.</small
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
