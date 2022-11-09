import { defineStore } from "pinia";
import axios from "../configs/axios";

export const useShowStore = defineStore("show", {
  state: () => ({
    currentPage: 1,
    shows: [],
    show: {},
    rented: [],
    searched: [],
  }),
  actions: {
    async fetchShows(page) {
      try {
        if (!page) {
          page = 1;
          this.currentPage = page;
        }
        this.currentPage = page;
        let { data } = await axios.get(`/?page=${this.currentPage}`);
        this.shows = data;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchShowById(id) {
      try {
        let { data } = await axios.get(`/${id}`);
        console.log(data, "dari fetch");
        this.show = data;
      } catch (err) {
        console.log(err);
      }
    },
    async addRent(id) {
      try {
        let access_token = localStorage.access_token;
        let { data } = await axios.post(
          `/rents/${id}`,
          {},
          { headers: { access_token } }
        );
      } catch (err) {
        console.log(err);
      }
    },
    async fetchRented() {
      try {
        let access_token = localStorage.access_token;
        let { data } = await axios.get("/rents/myrent", {
          headers: { access_token },
        });
        this.rented = data;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchSearch(search) {
      try {
        let querySearch = "";
        if (search) {
          querySearch = `search?q=${search}`;
        }
        let { data } = await axios.get(`/${querySearch}`);
        console.log(data, "<<<<<<<<<<<<<<<<<<<<<");
        this.searched = data;
        this.router.push({ name: "search", params: { query: search } });
      } catch (err) {
        console.log(err);
      }
    },
  },
});
