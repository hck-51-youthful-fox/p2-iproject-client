import { defineStore } from "pinia";
import axios from "../apis/axios";

export const useAllStore = defineStore("all", {
  state: () => ({
    beverages: [],
    transactions: [],
    weather: "",
  }),
  actions: {
    async getBeverages() {
      try {
        const { data } = await axios.get("/beverages");

        this.beverages = data.rows;
        this.totalPage = data.totalPage;
        this.currentPage = data.currentPage;
      } catch (err) {
        console.log(err);
      }
    },
    async getTransaction() {
      try {
        const { data } = await axios.get("/transactions");
        console.log(data);
        this.transactions = data;
      } catch (err) {
        console.log(err);
      }
    },
    changeLoginStatus(boolean) {
      this.isLogin = boolean;
    },
    async getWeather() {
      try {
        const { data } = await axios.get("/weather", {
          headers: {
            latitude: localStorage.getItem("latitude"),
            longitude: localStorage.getItem("longitude"),
          },
        });

        this.weather = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
