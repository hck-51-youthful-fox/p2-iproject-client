import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const origin = "http://localhost:3000";
export const useGlobalStore = defineStore("global", {
  state: () => ({
    pets: [],
    pagination: {},
    petDetail: {},
    loading: false,
    reviews: [],
    rentList: [],
    historyList: [],
    loggedIn: false,
    username: localStorage.getItem("username"),
  }),
  actions: {
    async logout() {
      this.loggedIn = false;
      this.rentList = [];
      localStorage.clear();
      this.router.push("/");
    },
    async fetchPets(page, type) {
      try {
        const { data } = await axios({
          method: "get",
          url: `${origin}/pets`,
          params: { page, type },
        });
        this.pets = data.animals;
        this.pagination = data.pagination;
      } catch (error) {
        Swal.fire("OOPS", `${error.response.data.msg}`, "error");
      }
    },
    async fetchPetDetail(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: `${origin}/pets/${id}`,
        });
        this.petDetail = data;
        this.router.push(`/details/${id}`);
      } catch (error) {
        Swal.fire("OOPS", `${error.response.data.msg}`, "error");
      }
    },
    async clearingDetails() {
      this.petDetail = {};
      this.reviews = [];
    },
    async fetchReviews(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: `${origin}/reviews/${id}`,
        });
        this.reviews = data;
      } catch (error) {
        Swal.fire("OOPS", `${error.response.data.msg}`, "error");
      }
    },
    async fetchRents() {
      try {
        const { data } = await axios({
          method: "get",
          url: `${origin}/rents`,
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.rentList = data;
      } catch (error) {
        Swal.fire("OOPS", `${error.response.data.msg}`, "error");
      }
    },
    async fetchRecentRents() {
      try {
        const { data } = await axios({
          method: "get",
          url: `${origin}/rents/recent`,
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.historyList = data;
      } catch (error) {
        Swal.fire("OOPS", `${error.response.data.msg}`, "error");
      }
    },
    async rent(id) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${origin}/pets/${id}`,
          headers: { access_token: localStorage.getItem("access_token") },
        });
        Swal.fire("Success", `${data.msg}`, "success");
      } catch (error) {
        Swal.fire("OOPS", `${error.response.data.msg}`, "error");
      }
    },
    async review(id, rating, content) {
      try {
        const { data } = await axios({
          method: "put",
          url: `${origin}/rents/${id}`,
          data: {
            rating,
            content,
          },
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.router.push("/rents");
        Swal.fire("Success", `${data.msg}`, "success");
      } catch (error) {
        Swal.fire("OOPS", `${error.response.data.msg}`, "error");
      }
    },
    async login(email, password) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${origin}/users/login`,
          data: { email, password },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);
        this.loggedIn = true;
        this.username = data.username;
        this.router.push("/");
        Swal.fire({
          title: "Login success",
          text: `Welcome ${data.username}!`,
          icon: "success",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Login Error!",
          text: error.response.data.msg,
        });
      }
    },
    async register(formInput) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${origin}/users/register`,
          data: formInput,
        });
        Swal.fire({
          icon: "success",
          title: "Registration Success!",
          text: "Login with your new account!",
        });
        this.router.push("/login");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Registration error!",
          text: error.response.data.msg,
        });
      }
    },
  },
});
