import { defineStore } from "pinia";
import axios from "../config/apis";
import Swal from "sweetalert2";

export const useMainStore = defineStore("main", {
  state: () => ({
    ApiNews: [],
    totalPages: 0,
    currentPage: 0,
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
  },
});
