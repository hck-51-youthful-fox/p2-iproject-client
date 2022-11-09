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
    midtrans: "",
    DbNews: [],
    selectedNews: {},
    comment: "",
    postId: 0,
    search: "",
    searchNews: [],
    userPost: [],
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

    async payment() {
      try {
        let { data } = await axios.post(
          "/user/payment",
          {},
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );

        this.midtrans = data.redirect_url;
        // window.location.href = data.redirect_url;
        window.open(data.redirect_url, "_blank");
        // this.isPremium = true
        localStorage.setItem("isPremium", true);
      } catch (error) {
        console.log(error);
      }
    },

    async getPostFromDB(page) {
      if (!page) {
        page = 1;
      }

      try {
        let { data } = await axios.get(`/news?page=${page}`);

        this.DbNews = data.rows;
        this.totalPages = data.totalPages;
        this.currentPage = data.currentPage;
        console.log(this.DbNews, ">>>>>>>>>>>>>>>>>>>>>>>>>");
      } catch (error) {
        console.log(error);
      }
    },

    async getPostById(id) {
      try {
        let { data } = await axios.get(`/news/${id}`);

        this.selectedNews = data;
        console.log(this.selectedNews);
        this.postId = id;
      } catch (error) {
        console.log(error);
      }
    },

    async postComment(id) {
      try {
        let { data } = await axios.post(
          `/user/comment/${id}`,
          {
            comment: this.comment,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.getPostById(this.postId);
        this.comment = "";
      } catch (error) {
        console.log(error);
      }
    },

    async searchPost(page) {
      if (!page) {
        page = 1;
      }
      try {
        let { data } = await axios.get(
          `/api/news/search?page=${page}&search=${this.search}`
        );

        this.router.push("/search");
        // console.log(data);
        this.searchNews = data.articles;
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
        console.log(this.searchNews);
        console.log(this.currentPage);
      } catch (error) {
        console.log(error);
      }
    },

    async loggedInPost(page) {
      if (!page) {
        page = 1;
      }

      try {
        let { data } = await axios.get(`/user/post?page=${page}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.userPost = data.rows;
        this.totalPages = data.totalPages;
        this.currentPage = data.currentPage;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async deletePost(id) {
      try {
        let { data } = await axios.delete(`/user/delete/${id}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(data);
        this.loggedInPost();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
