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
    post: {
      title: "",
      content: "",
      imageUrl: "",
      tag: "",
    },
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
        Swal.fire({
          icon: "success",
          title: "Login Success",
          text: `Login Success`,
        });
        this.isLogin = true;
        this.isPremium = localStorage.getItem("isPremium");
        this.router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: error.response.data.message,
        });
        console.log(error);
      }
    },

    async logoutUser() {
      Swal.fire({
        icon: "success",
        title: "Logout Success",
        text: `Logout Success`,
      });
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
        Swal.fire({
          icon: "success",
          title: "Register Success",
          text: `Register Success`,
        });
        this.router.push("/login");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: error.response.data.message,
        });
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

        // this.midtrans = data.redirect_url;
        console.log(data);

        let transactionToken = data.transactionToken;

        snap.pay(transactionToken, {
          onSuccess: async function (result) {
            console.log("success");
            console.log(result);
            Swal.fire({
              icon: "success",
              title: "Payment Success!",
              text: "Please Logout and Login again to Refresh your Premium Status",
            });
            await axios.patch(
              "/user/updatePremium",
              {},
              {
                headers: {
                  access_token: localStorage.getItem("access_token"),
                },
              }
            );
            localStorage.clear();
            this.isLogin = false;
            // this.isPremium = true;
          },

          onPending: function (result) {
            console.log("pending");
            console.log(result);
          },
          onError: function (result) {
            console.log("error");
            console.log(result);
          },
          onClose: function () {
            console.log(
              "customer closed the popup without finishing the payment"
            );
          },
        });
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
        this.postId = id;
        this.post.title = data.title;
        this.post.content = data.content;
        this.post.imageUrl = data.imageUrl;
        this.post.tag = data.tag;
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
        Swal.fire({
          icon: "success",
          title: "Comment Success",
          text: "Comment Success",
        });
        this.getPostById(this.postId);
        this.comment = "";
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: error.response.data,
        });
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
        Swal.fire({
          icon: "success",
          title: "Post Delete Successfully!",
          text: `Post Delete Successfully!`,
        });
        console.log(data);
        this.loggedInPost();
      } catch (error) {
        Swal.fire({
          icon: "success",
          title: "Error",
          text: error.response.data.message,
        });
        console.log(error);
      }
    },

    async editPost(id) {
      // console.log(this.post, "Dari Object post");
      // console.log(id, "ID Post");
      try {
        let { data } = await axios.put(
          `/user/edit/${id}`,
          {
            title: this.post.title,
            content: this.post.content,
            imageUrl: this.post.imageUrl,
            tag: this.post.tag,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        Swal.fire({
          icon: "success",
          title: "Post Edit Successfully!",
          text: `Post Edit Successfully!`,
        });
        console.log("Post Edit Successfully!");
        this.router.push("/user/post");
      } catch (error) {
        Swal.fire({
          icon: "success",
          title: "Error",
          text: error.response.data.message,
        });
        console.log(error);
      }
    },

    async addPost() {
      try {
        let { data } = await axios.post(
          "/user/addPost",
          {
            title: this.post.title,
            content: this.post.content,
            imageUrl: this.post.imageUrl,
            tag: this.post.tag,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        Swal.fire({
          icon: "success",
          title: "Post Add Successfully!",
          text: `Post Add Successfully!`,
        });
        console.log("Post Add Successfully!");
        this.router.push("/user/post");
        this.post = {
          title: "",
          content: "",
          imageUrl: "",
          tag: "",
        };
      } catch (error) {
        Swal.fire({
          icon: "success",
          title: "Error",
          text: error.response.data.message,
        });
        console.log(error);
      }
    },
  },
});
