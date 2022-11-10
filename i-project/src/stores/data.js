import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
const baseUrl = "http://localhost:3000";
// const baseUrl = "https://pcpeek.herokuapp.com";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const useDataStore = defineStore("data", {
  state: () => ({
    isLogin: false,
    dataNews: [],
    newsImage: [],
    thread: [],
    totalPage: [],
    detail: [],
    post: [],
    dataGif: [],
  }),
  actions: {
    async login(email, password) {
      try {
        const { data } = await axios.post(`${baseUrl}/login`, {
          email,
          password,
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/");
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: `${error.response.data.message}`,
        });
      }
    },

    async news() {
      try {
        const { data } = await axios.get(`${baseUrl}/news`);
        this.dataNews = data;
        this.newsImage = data.news.urlToImage;
      } catch (error) {
        console.log(error);
      }
    },

    async getThread(name, page) {
      try {
        if (!page) {
          page = 0;
        }
        let halaman = page;
        if (!name) {
          name = "";
        }
        let cari = name;
        const { data } = await axios.get(
          `${baseUrl}/thread?page=${halaman}&name=${cari}`
        );

        this.thread = data.rows;
        this.totalPage = data.totalPages;
      } catch (error) {
        console.log(error);
      }
    },
    async getDetail(idThread) {
      try {
        const { data } = await axios.get(`${baseUrl}/detail/${idThread}`);
        this.detail = data;
      } catch (error) {
        console.log(error);
      }
    },

    async addThread(name, rating, thread, like) {
      try {
        const { data } = await axios.post(
          `${baseUrl}/add`,
          {
            name,
            rating,
            thread,
            like,
          },
          { headers: { access_token: localStorage.access_token } }
        );
        name = "";
        rating = "";
        thread = "";
        this.getThread();
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: `${error.response.data.message}`,
        });
      }
    },
    async registerUser(username, email, password) {
      try {
        await axios.post(`${baseUrl}/register`, {
          username,
          email,
          password,
        });
        this.router.push("/");
        Toast.fire({
          icon: "success",
          title: "Register new user successfully",
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: `${error.response.data.message}`,
        });
      }
    },
    async addComment(threadId, comment, imgUrl) {
      try {
        const { data } = await axios.post(
          `${baseUrl}/comments/${threadId}`,
          {
            comment,
            imgUrl,
          },
          { headers: { access_token: localStorage.access_token } }
        );
        comment = "";
        imgUrl = "";
        this.getDetail(threadId);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: `${error.response.data.message}`,
        });
      }
    },

    async getGif() {
      try {
        const { data } = await axios.get(
          `https://api.giphy.com/v1/gifs/trending?api_key=pA9DIBpOGTWtI1tkp35OdkMsi3g33cHH&limit=5&rating=g`
        );
        this.dataGif = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    logoutSection() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/");
      Toast.fire({
        icon: "success",
        title: "Signed Out successfully",
      });
    },
  },
});
