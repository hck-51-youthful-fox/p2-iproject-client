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
        Swal.fire({
          icon: "error",
          title: "Oh No!.",
          text: "Something went wrong!",
        });
      }
    },
    async fetchShowById(id) {
      try {
        let { data } = await axios.get(`/${id}`);
        this.show = data;
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oh No!.",
          text: "Something went wrong!",
        });
      }
    },
    // async addRent(id) {
    //   try {

    //     let access_token = localStorage.access_token;
    //     let { data } = await axios.post(
    //       `/rents/${id}`,
    //       {},
    //       { headers: { access_token } }
    //     );
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    async deleteRented(id) {
      try {
        let access_token = localStorage.access_token;
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete("/rents/" + id, { headers: { access_token } });
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
        this.fetchRented();
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oh No!.",
          text: "Something went wrong!",
        });
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
        Swal.fire({
          icon: "error",
          title: "Oh No!.",
          text: "Something went wrong!",
        });
      }
    },
    async fetchSearch(search) {
      try {
        let querySearch = "";
        if (search) {
          querySearch = `search?q=${search}`;
        }
        let { data } = await axios.get(`/${querySearch}`);
        let mapped = data.map((el) => el.show);
        this.searched = mapped;
        this.router.push({ name: "search", params: { query: search } });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oh No!.",
          text: "Something went wrong!",
        });
      }
    },
  },
});
