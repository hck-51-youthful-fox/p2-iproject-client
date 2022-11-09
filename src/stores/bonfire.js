import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = `http://localhost:3000`;

export const useBonfireStore = defineStore("bonfire", {
  state: () => ({
    isLoggedIn: false,
    isVerified: "",
    games: [],
    searchQuery: "",
    currentPage: 1,
    gameDetail: {},
    explore: [],
    loggedUserDetails: {},
  }),
  actions: {
    async googleLogin(payload) {
			try {
				let { data } = await axios.post(
					`${baseUrl}/users/google-login`,
					{},
					{
						headers: { google_token: payload.credential },
					}
				);

				localStorage.setItem(`access_token`, data.access_token);
				localStorage.setItem(`username`, data.username);
        localStorage.setItem(`verified`, 'Verified');
				this.loggedUserName = localStorage.getItem(`username`);
				this.isLoggedIn = true;
        this.isVerified = 'Verified'
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: `Welcome, ${this.loggedUserName}!`,
					showConfirmButton: false,
					timer: 1250,
					timerProgressBar: true,
				});
				this.router.push("/");
			} catch (error) {
				console.log(error)
				Swal.fire({
					icon: "error",
					title: `An error has occured...`,
					html: error.response.data.message,
					showConfirmButton: false,
				});
			}
		},
    async postLogin(payload) {
      try {
        const { data } = await axios.post(`${baseUrl}/users/login`, {
          email: payload.email,
          password: payload.password,
        });
        localStorage.setItem(`access_token`, data.access_token);
        localStorage.setItem(`username`, data.username);
        localStorage.setItem(`verified`, data.verified);
        this.isLoggedIn = true;
        this.isVerified = localStorage.getItem(`verified`);
        Swal.fire({
          title: "Success!",
          icon: "success",
          text: `Welcome back, ${data.username}!`,
        });
        this.router.push("/");
      } catch (error) {
        Swal.fire({
          title: "An Error has occured...",
          icon: "error",
          text: err.response.data.message,
        });
      }
    },
    async postregister(payload) {
      try {
        await axios.post(`${baseUrl}/users/register`, {
          username: payload.username,
          email: payload.email,
          password: payload.password,
        });

        let result = await Swal.fire({
          icon: "success",
          title: "Register successful!",
          text: "Do you want to login immediately?",
          showCancelButton: true,
          confirmButtonText: "Login",
        });

        if (result.isConfirmed) {
          const loginForm = {
            email: payload.email,
            password: payload.password,
          };
          await this.postLogin(loginForm);
        }
      } catch (error) {
        Swal.fire({
          title: "An Error has occured...",
          icon: "error",
          html: error.response.data.message.join("<br>"),
        });
      }
    },
    logout() {
      localStorage.clear();
      Swal.fire({
        title: "Success!",
        icon: "success",
        text: `Logged out successfully!`,
      });
      this.isLoggedIn = false;
      this.router.push("/");
    },
    flushGames() {
      this.currentPage = 0;
      this.games = [];
    },
    flushExplore() {
      this.explore = [];
    },
    flushSearch() {
      this.searchQuery = "";
    },
    async fetchGames(search) {
      try {
        if (search) {
          this.searchQuery = search;
        }

        const current = Math.floor(this.games.length / 10);

        let url = `${baseUrl}/games`;

        url = current >= 1 ? url + `?page=${current + 1}` : url + `?page=1`;
        url = this.searchQuery ? url + `&search=${this.searchQuery}` : url;

        console.log(url)

        let { data } = await axios.get(url, {});

        data.games.forEach((el) => {
          this.games.push(el);
        });
        this.currentPage++;
      } catch (error) {
        Swal.fire({
          title: "An Error has occured...",
          icon: "error",
          text: error.response.data.message,
        });
      }
    },
    async fetchGameById(id) {
      try {
        let { data } = await axios.get(`${baseUrl}/games/${id}`, {});
        this.gameDetail = data;
      } catch (error) {
        Swal.fire({
          title: "An Error has occured...",
          icon: "error",
          text: err.response.data.message,
        });
      }
    },
    async exploreGames() {
      try {
        const current = Math.floor(this.explore.length / 10);
        let url = `${baseUrl}/games/explore`;

        url = current >= 1 ? url + `?page=${current + 1}` : url;

        let access_token = localStorage.getItem("access_token");
        let { data } = await axios.get(url, {
          headers: {
            access_token,
          },
        });
        data.games.forEach((el) => {
          this.explore.push(el);
        });
      } catch (error) {
        Swal.fire({
          title: "An Error has occured...",
          icon: "error",
          text: err.response.data.message,
        });
      }
    },
    async postReview(payload) {
      try {
        let access_token = localStorage.getItem("access_token");
        let { data } = await axios.post(
          `${baseUrl}/reviews/${this.gameDetail.id}`,
          {
            review: payload.review,
            score: payload.score,
          },
          {
            headers: {
              access_token,
            },
          }
        );
        Swal.fire({
          title: "Success!",
          icon: "success",
          text: data.message,
        });
        this.router.push(`/games/${this.gameDetail.id}`);
      } catch (error) {
        Swal.fire({
          title: "An Error has occured...",
          icon: "error",
          text: err.response.data.message,
        });
      }
    },
    async fetchUserDetails() {
      try {
        let access_token = localStorage.getItem("access_token");
        let { data } = await axios.get(`${baseUrl}/users/details`, {
          headers: {
            access_token,
          },
        });

        this.loggedUserDetails = data;

        console.log(`kesini gan`);
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "An Error has occured...",
          icon: "error",
          text: err.response.data.message,
        });
      }
    },
    async postUserUpdate() {
      try {
        let access_token = localStorage.getItem("access_token");
        await axios.put(`${baseUrl}/users/details`, this.loggedUserDetails, {
          headers: {
            access_token,
          },
        });

        Swal.fire({
          title: "Success!",
          icon: "success",
          text: `User details updated successfully!`,
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "An Error has occured...",
          icon: "error",
          text: error.response.data.message,
        });
      }
    },
    async verifyUser() {
      try {
        let access_token = localStorage.getItem("access_token");
        let { data } = await axios.patch(
          `${baseUrl}/users/details/verify`,
          this.loggedUserDetails,
          {
            headers: {
              access_token,
            },
          }
        );
        
        localStorage.setItem(`verified`,`Verified`)
        this.isVerified = `Verified`
        Swal.fire({
          title: "Success!",
          icon: "success",
          text: data.message,
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "An Error has occured...",
          icon: "error",
          text: error.response.data.message,
        });
      }
    },
  },
  getters: {},
});
