import { defineStore } from "pinia";
import axios from "axios";

export const useRZStore = defineStore("RZ", {
  state: () => ({
    checkLogin: false,
    user: {
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    },
  }),
  getters: {},
  actions: {
    async logout() {
      localStorage.clear();
      this.checkLogin = false;
      this.router.push("/login");
    },

    async loginToSite(email, password) {
      try {
        let { data } = await axios.post(`${baseUrl}/pub/login`, {
          email,
          password,
        });
        localStorage.setItem(`access_token`, data.access_token);
        localStorage.setItem(`username`, data.username);

        this.checkLogin = true;
        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },

    async register() {
      try {
        const { data } = await axios.post(`${baseUrl}/register`, this.user);
        this.checkLogin = false;
        this.router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },
  },
});
