import { defineStore } from "pinia";
import axios from "../config/apis";
import Swal from "sweetalert2";

export const useMainStore = defineStore("main", {
  state: () => ({
    ApiNews: [],
    totalPages: 0,
    currentPage: 0,
    user: {
      email: "",
      username: "",
      password: "",
    },
    isLogin: false,
    username: localStorage.getItem("username"),
    isPremium: localStorage.getItem("isPremium"),
  }),

  actions: {
    async FetchNewsFromAPI(page) {
      try {
        if (!page) {
          page = 1;
        }

        let { data } = await axios.get(`/api/news?page=${page}`);

        this.ApiNews = data.articles.results;
        this.totalPages = data.pages;
        this.currentPage = data.articles.page;
        console.log(this.ApiNews);
        console.log(this.currentPage);
      } catch (error) {
        console.log(error);
      }
    },

    async loginUser() {
      try {
        let { data } = await axios.post("/login", {
          email: this.user.email,
          password: this.user.password,
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("username", data.username);
        localStorage.setItem("isPremium", data.isPremium);
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },

    async logoutUser() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/login");
    },

    async registerUser() {
      try {
        let { data } = await axios.post("/register", {
          email: this.user.email,
          password: this.user.password,
          username: this.user.username,
        });
        this.router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
