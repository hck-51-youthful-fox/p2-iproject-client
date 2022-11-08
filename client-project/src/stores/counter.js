import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";

export const useNoteStore = defineStore("note", {
  state: () => ({
    isLogin: false,
    isPremium: false,
  }),
  actions: {
    checkLogin() {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    async register(result) {
      try {
        const dataRegist = await axios({
          url: `${baseUrl}/register`,
          method: "POST",
          data: {
            username: result.username,
            email: result.email,
            password: result.password,
          },
        });
        Swal.fire({
          icon: "success",
          title: `You have been registered!`,
          text: "Now you may sign in to use our services",
          confirmButtonText: "Sign in now",
        });
        this.router.push("/login");
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: `${error.response.data.error.message}`,
        });
      }
    },
    async login(result) {
      try {
        // console.log(this.router, "ini dari login");
        const response = await axios({
          url: `${baseUrl}/login`,
          method: "POST",
          data: {
            email: result.email,
            password: result.password,
          },
        });
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("status", response.data.status);

        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: `${error.response.data.error.message}`,
        });
      }
    },
    async payment() {},
  },
});
