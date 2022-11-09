import { defineStore } from "pinia";
import axios from "../configs/axios";

export const useShowStore = defineStore("show", {
  state: () => ({
    currentPage: 1,
    shows: [],
  }),
  actions: {
    async fetchShows(page) {
      try {
        if (!page) {
          page = 1;
          this.currentPage = page;
        }
        let { data } = await axios.get(`/page=${this.currentPage}`);
        this.shows = data
      } catch (err) {}
    },
  },
});
