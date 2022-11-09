import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";

export const useDataStore = defineStore("data", {
  state: () => ({
    isLogin: false,
    dataNews: [],
    newsImage: [],
    thread:[]
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

    async getThread(){
        try {
            const {data} = await axios.get(`${baseUrl}/news`)
        } catch (error) {
            
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
