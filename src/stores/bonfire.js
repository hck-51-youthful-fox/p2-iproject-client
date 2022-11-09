import { defineStore } from "pinia";
import axios, { Axios } from "axios";
import Swal from "sweetalert2";

const baseUrl = `http://localhost:3000`;

export const useBonfireStore = defineStore("bonfire", {
  state: () => ({
    isLoggedIn: false,
    games: [],
  }),
  actions: {
    async postLogin(payload) {
      try {
        console.log(payload);
        const { data } = await axios.post(`${baseUrl}/users/login`, {
          email: payload.email,
          password: payload.password,
        });
        localStorage.setItem(`access_token`, data.access_token);
        localStorage.setItem(`username`, data.username);
        localStorage.setItem(`verified`, data.verified);
        this.isLoggedIn = true;
        Swal.fire({
          title: "Success!",
          icon: "success",
          text: `Welcome back, ${data.username}!`,
        });
        this.router.push("/");
      } catch (err) {
        console.log(err);
        Swal.fire({
          title: "An Error has occured...",
          icon: "error",
          text: err.response.data.message,
        });
      }
    },
    async postregister(payload) {
      try {
        console.log(payload);
        await axios.post(`${baseUrl}/users/register`, {
          username: payload.username,
          email: payload.email,
          password: payload.password,
        });

        let result = await Swal.fire({
          icon: "success",
          title: "Register successful!",
          text: "Do you want to login immediately?",
          showCancelButton: true,
          confirmButtonText: "Login",
        });

        if (result.isConfirmed) {
          const loginForm = {
            email: payload.email,
            password: payload.password,
          };
          await this.postLogin(loginForm);
        }
      } catch ({ response }) {
        Swal.fire({
          title: "An Error has occured...",
          icon: "error",
          html: response.data.message.join("<br>"),
        });
      }
    },
    logout() {},
    async fetchGames() {
      try {
        let { data } = await axios.get(`${baseUrl}/games`, {});
        this.games = data
        console.log(data);
      } catch (error) {
        console.log(err);
      }
    },
  },
});
