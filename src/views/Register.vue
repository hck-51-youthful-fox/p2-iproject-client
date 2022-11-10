<script>
import { mapActions } from "pinia";
import { useGlobalStore } from "../stores/global";
export default {
  data() {
    return {
      registerForm: {
        email: "",
        password: "",
        username: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(useGlobalStore, ["register"]),
  },
};
</script>
<template>
  <div class="container mt-3 mb-2">
    <section>
      <div class="modal-dialog w-50 h-75" role="document">
        <div class="modal-content rounded-4 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <h1 class="fw-bold mb-0 fs-2">Register</h1>
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
              @submit.prevent="register(registerForm)"
            >
              <div class="form-floating mb-3">
                <input
                  v-model="registerForm.username"
                  type="text"
                  class="form-control rounded-3"
                  id="floatingUsername"
                  placeholder="Username"
                />
                <label for="floatingInput">Username</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  v-model="registerForm.email"
                  type="email"
                  class="form-control rounded-3"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  v-model="registerForm.password"
                  type="password"
                  class="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  v-model="registerForm.phoneNumber"
                  type="tel"
                  class="form-control rounded-3"
                  id="floatingPhoneInput"
                  placeholder="Phone Number"
                />
                <label for="floatingInput">Phone Number</label>
              </div>

              <div class="form-floating mb-3">
                <textarea
                  v-model="registerForm.address"
                  class="form-control rounded-3"
                  placeholder="Address"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Address</label>
              </div>
              <p>
                Already have an account?
                <RouterLink
                  to="/login"
                  class="text-decoration-none text-success"
                  >Login</RouterLink
                >
              </p>
              <button
                class="w-50 btn btn-lg rounded-3 btn-success align-self-center"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
