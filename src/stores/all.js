import { defineStore } from "pinia";
import instance from "../../apis/axios";
import axios from "axios";

export const useAllStore = defineStore("all", {
  state: () => ({
    isLogin: false,
    games: [],
    game: {},
    paymentToken: "",
    sections: "",
    status: "",
    userDetail: {},
  }),
  actions: {
    changePage(page) {
      this.router.push({ name: page });
    },
    async login(email, password) {
      try {
        // const { email, password } = payload;
        const { data } = await instance.post("/users/login", {
          email,
          password,
        });
        Swal.fire({
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("UserId", data.id);
        localStorage.setItem("email", data.email);
        localStorage.setItem("status", data.status);
        localStorage.setItem("username", data.username);
        // localStorage.setItem("id", data.username);
        this.isLogin = true;
        this.changePage("home");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: `${error.response.data.msg}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    async register(email, password) {
      try {
        await instance.post("/users/register", {
          email,
          password,
        });
        Swal.fire({
          icon: "success",
          title: `Welcome ${email}!`,
          text: "Login to continue",
          showConfirmButton: false,
          timer: 1500,
        });
        this.changePage("login");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: `${error.response.data.msg}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    logout() {
      Swal.fire({
        imageUrl: "https://cdn-icons-png.flaticon.com/512/3898/3898671.png",
        imageWidth: 150,
        imageHeight: 150,
        title: `Bye, see you again!`,
        showConfirmButton: false,
        timer: 1500,
      });
      localStorage.clear();
      this.isLogin = false;
      this.changePage("login");
    },
    async fetchGames(query) {
      const access_token = localStorage.getItem("access_token");
      try {
        const { data } = await instance.get(`/games`, {
          headers: { access_token },
          params: query,
        });
        this.games = data.results;
      } catch (error) {
        // Swal.fire({
        //   icon: "error",
        //   title: `${error.response.data.msg}`,
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        console.log(error);
      }
    },
    async fetchFreeGame(query) {
      const access_token = localStorage.getItem("access_token");
      try {
        const { data } = await instance.get(`/games/free-games`, {
          headers: { access_token },
          params: query,
        });
        this.games = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchGameDetail(id) {
      const access_token = localStorage.getItem("access_token");
      try {
        const { data } = await instance.get(`/games/${id}`, {
          headers: { access_token },
        });
        this.game = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchFreeGameDetail(id) {
      const access_token = localStorage.getItem("access_token");
      try {
        const { data } = await instance.get(`/games/free-games/${id}`, {
          headers: { access_token },
        });
        this.game = data;
      } catch (error) {
        console.log(error);
      }
    },
    async incomingOrder() {
      const access_token = localStorage.getItem("access_token");
      const { data } = await instance.post({});
    },
    async payment() {
      try {
        const access_token = localStorage.getItem("access_token");
        const { data } = await instance.get("/users/payment-test", {
          headers: { access_token },
        });
        // console.log(data.data.redirect_url);
        // console.log(data.data.token);
        // this.router.push(data.data.redirect_url);
        // window.location = data.data.redirect_url;
        const UserId = localStorage.getItem("UserId");

        this.paymentToken = data.token;
        snap.pay(this.paymentToken, {
          onSuccess: async function (result) {
            console.log(result);
            const success = await instance.patch(
              "/users/payment-success",
              {},
              {
                params: {
                  token: data.token,
                },
                headers: { access_token },
              }
            );
            console.log("ini success", success);
            // localStorage.setItem("status", "subscription");
            localStorage.setItem("status", "subscription");
            localStorage.setItem("test", "nambah nih");
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchUserDetail() {
      try {
        const id = localStorage.getItem("UserId");
        const access_token = localStorage.getItem("access_token");
        const { data } = await instance.get(`/users/${id}`, {
          headers: { access_token },
        });
        console.log("Ini dataaa", data);
        this.status = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
