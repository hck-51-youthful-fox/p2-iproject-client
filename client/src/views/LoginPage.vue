<script>
import { mapActions, mapState } from "pinia";
import axios from "../apis/axios";
import { useAllStore } from "../stores/all";

export default {
  name: "LoginView",
  data() {
    return {
      formLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useAllStore, ["changeLoginStatus"]),
    moveToLandingPage() {
      this.$router.push({
        name: "landing-page",
      });
    },
    moveToHome() {
      this.$router.push({
        name: "menu-page",
      });
    },
    async getPosition() {
      try {
        function success(pos) {
          const crd = pos.coords;

          localStorage.setItem("latitude", crd.latitude);
          localStorage.setItem("longitude", crd.longitude);
        }

        navigator.geolocation.getCurrentPosition(success);
      } catch (err) {
        console.log(err);
      }
    },
    async login() {
      try {
        const { data } = await axios({
          method: "post",
          url: "/login",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            email: this.formLogin.email,
            password: this.formLogin.password,
          },
        });

        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.getPosition();
        console.log(localStorage.getItem("latitude"));
        this.moveToHome();
      } catch (err) {
        console.log(err);
      }
    },
    async handleCredentialResponse(response) {
      const { data } = await axios({
        method: "post",
        url: "/google-login",
        headers: {
          google_token: response.credential,
        },
      });

      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("email", data.email);
      this.isLogin = true;
      this.getPosition();
      this.moveToHome();
    },
  },
  mounted() {
    const cb = this.handleCredentialResponse;
    window.onload = function () {
      google.accounts.id.initialize({
        client_id:
          "723988953832-12inm61pnt4s4qnknofrgl6en4pb5rr4.apps.googleusercontent.com",
        callback: cb,
      });
      google.accounts.id.renderButton(
        document.getElementById("google-button-login"),
        {
          theme: "outline",
          size: "large",
        }
      );
    };
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
      <div class="modal-content shadow">
        <div class="modal-header p-5 pb-4 border-bottom-0">
          <h1 class="fw-bold mb-0 fs-2">Login to buy your coffee!</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="moveToLandingPage"
          ></button>
        </div>

        <div class="modal-body p-5 pt-0">
          <form class="" @submit.prevent="login">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="formLogin.email"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                v-model="formLogin.password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button class="w-100 mb-2 btn btn-lg btn-primary" type="submit">
              Login
            </button>

            <hr class="my-4" />
            <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
            <div id="google-button-login" style="margin-top: 15px"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
