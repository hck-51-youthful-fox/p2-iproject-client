<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";
import { GoogleLogin } from "vue3-google-login";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    ...mapActions(useUserStore, ["login", "handleCredentialResponse"]),
    async logginButton() {
      let payload = {
        email: this.email,
        password: this.password,
      };
      await this.login(payload);
    },
    callback(response) {
      this.handleCredentialResponse(response);
    },
  },
};
</script>

<template>
  <section
    id="login-section"
    style="
      background-image: url('https://external-preview.redd.it/B6MrrY-dyD1lnvvrb2BCISx1xQwGx-e7pjm-qeXwAkE.jpg?auto=webp&s=ade83a5a759042ffed5324e5172c9a59a27aaaa9');
    "
  >
    <div class="container-fluid login">
      <form
        @submit.prevent="logginButton"
        id="login-form"
        style="background-color: whitesmoke; padding: 50px; border-radius: 50px"
      >
        <h1 style="margin-bottom: 45px">LOG IN HERE</h1>
        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            class="form-control"
            id="login-email"
            placeholder="Enter email"
            required
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="login-password"
            placeholder="Password"
            required
            v-model="password"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Remember me</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <div id="buttonDiv" style="padding-top: 15px"></div>
        <GoogleLogin :callback="callback" />
      </form>
    </div>
  </section>
</template>

<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 35px;
}
</style>
