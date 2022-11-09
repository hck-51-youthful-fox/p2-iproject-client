// import { ref, computed } from 'vue'
import { defineStore } from "pinia";
import axios from "../config/axios";

export const useFootballStore = defineStore("football", {
  state() {
    return {
      myTeamData: [],
    };
  },
  actions: {
    changePage(page) {
      this.router.push(page);
    },
    logOut() {
      localStorage.clear();
      this.changePage("/login");
    },
    async login(dataUser) {
      console.log(dataUser, "dataUser login di store");
      try {
        console.log(dataUser.email, "di dalam try");
        console.log(dataUser.password, "di dalam try");
        const { data } = await axios.post("/users/login", {
          email: dataUser.email,
          password: dataUser.password,
        });

        console.log(data);

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("username", data.username);
        localStorage.setItem("id", data.id);
        // console.log(data.access_token);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Selamat datang ${localStorage.username}`,
          showConfirmButton: false,
          timer: 1500,
        });
        this.changePage("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          // text: `${error.response.data.message}`,
          footer: "",
        });
        console.log(error);
      }
    },
    async register(dataUser) {
      console.log(dataUser, "<<<<<<<<<<<<<<<<<<");
      try {
        const { data } = await axios.post("/users/register", {
          username: dataUser.username,
          email: dataUser.email,
          password: dataUser.password,
        });
        this.changePage("/login");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Anda bisa masuk sekarang!`,
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("registered");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          // text: `${error.response.data.message}`,
          footer: "",
        });
        console.log(error);
      }
    },
    async fetchMyTeam() {
      try {
        const { data } = await axios.get("/positions", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.myTeamData = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
