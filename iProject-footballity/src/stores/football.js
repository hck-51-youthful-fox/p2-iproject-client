// import { ref, computed } from 'vue'
import { defineStore } from "pinia";
import axios from "../config/axios";

export const useFootballStore = defineStore("football", {
  state() {
    return {
      myTeamData: [],
      plData: [],
      searchPlayerData: [],
    };
  },
  actions: {
    changePage(page) {
      this.router.push(page);
    },
    logOut() {
      localStorage.clear();
      this.changePage("/login");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Anda Berhasil Logout!`,
        showConfirmButton: false,
        timer: 1500,
      });
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
          text: `${error.response.data.message}`,
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
          text: `${error.response.data.message}`,
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
    async fetchPremierLeague() {
      try {
        const { data } = await axios.get("/api/premier", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.plData = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addPosition(player) {
      console.log(player, "ini player");
      try {
        const { data } = await axios.post(
          "/positions",
          {
            GK: player.GK,
            LB: player.LB,
            LCB: player.LCB,
            RCB: player.RCB,
            RB: player.RB,
            LMF: player.LMF,
            LCMF: player.LCMF,
            RCMF: player.RCMF,
            RMF: player.RMF,
            SS: player.SS,
            ST: player.ST,
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Berhasil membentuk tim!`,
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data, "ini data");
        this.changePage("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Please input all the players`,
          footer: "",
        });
        console.log(error);
      }
    },
    async searchPlayerFunction(search) {
      console.log(search, "ini search<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
      try {
        const { data } = await axios.get(`/api/search?search=${search}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data.result, "ini data search player");
        this.searchPlayerData = data.result;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
