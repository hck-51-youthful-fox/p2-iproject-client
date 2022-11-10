<script>
import { mapActions } from "pinia";
import { useGlobalStore } from "../stores/global";

useGlobalStore;
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useGlobalStore, ["login"]),
  },
};
</script>
<template>
  <div class="container mt-5">
    <section>
      <div class="modal-dialog w-50 h-75" role="document">
        <div class="modal-content rounded-4 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <h1 class="fw-bold mb-0 fs-2">Login</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-5 pt-0">
            <form
              class="d-flex flex-column"
              @submit.prevent="login(email, password)"
            >
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="email"
                />
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <p>
                Don't have an account?
                <RouterLink
                  to="/register"
                  class="text-decoration-none text-success"
                  >Sign up</RouterLink
                >
              </p>
              <button
                class="w-50 mb-2 btn btn-lg rounded-3 btn-success align-self-center"
                type="submit"
              >
                Login
              </button>
            </form>
            <div id="buttonDiv"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
