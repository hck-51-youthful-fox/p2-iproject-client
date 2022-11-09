import { defineStore } from "pinia";
import axios from "../configs/axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLogin: false,
    username: "",
  }),
  actions: {
    async login(payload) {
      try {
        let { email, password } = payload;
        let { data } = await axios.post("/users/login", { email, password });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("id", data.id);
        localStorage.setItem("email", data.email);
        localStorage.setItem("username", data.username);
        this.isLogin = true;
        this.username = localStorage.username;
        this.router.push({ name: "home" });
        Swal.fire({
          icon: "success",
          title: "Your are logged in",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
    async register(payload) {
      try {
        await axios.post("/users/register", payload);
        this.router.push({ name: "login" });
        Swal.fire({
          icon: "success",
          title: "Your are registered",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
    async logout() {
      try {
        localStorage.clear();
        this.isLogin = false;
        this.router.push({ name: "login" });
        Swal.fire({
          icon: "success",
          title: "Your are logged out",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
    async handleCredentialResponse(response) {
      try {
        let { data } = await axios.post(
          "/users/google-signin",
          {},
          {
            headers: { id_token: response.credential },
          }
        );
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("id", data.id);
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);
        Swal.fire({
          icon: "success",
          title: "Your are logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        this.isLogin = true;
        this.username = localStorage.username;
        this.router.push({ name: "home" });
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: "Failed to login with google",
          icon: "error",
          confirmButtonText: "Back",
        });
      }
    },
  },
});
