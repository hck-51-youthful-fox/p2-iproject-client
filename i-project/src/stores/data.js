import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";

export const useDataStore = defineStore("data", {
  state: () => ({
    isLogin: false,
    dataNews: [],
    newsImage: [],
    thread: [],
    totalPages: [],
    detail: [],
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
      } catch (error) {
        console.log(error);
      }
    },

    async news() {
      try {
        const { data } = await axios.get(`${baseUrl}/news`);
        this.dataNews = data;
        this.newsImage = data.news.urlToImage;
        console.log(data);
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
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    convertDate(data) {
      return data.toLocaleDateString("en-GB");
    },

    logout() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/login");
    },
  },
});
