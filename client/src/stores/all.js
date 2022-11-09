import { defineStore } from "pinia";
import axios from "../apis/axios";

export const useAllStore = defineStore("all", {
  state: () => ({
    beverages: [],
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
  },
});
