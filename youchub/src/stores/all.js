import { defineStore } from "pinia";
import axios from "axios";

export const useAllStore = defineStore("counter", {
  state: () => ({
    videos: [],
    video: {},
    baseUrl: "http://localhost:3000",
    paymentResponse: "",
    isLogin: false,
    likedVideos: [],
  }),
  actions: {
    async register(user) {
      const { email, password, phoneNumber, address } = user;
      try {
        const { data } = await axios.post("/pub/register", user);
        this.router.push("/login");
        this.showSuccessAlert("register success!");
      } catch (error) {
        console.log(error);
        this.showErrorAlert(error.response.data.message);
      }
    },
    async login(user) {
      try {
        const { email, password } = user;
        const { data } = await axios.post("/pub/login", user);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("id", data.id);
        localStorage.setItem("email", data.email);
        this.isLogin = true;
        this.user = {
          email: data.email,
          role: data.role,
          id: data.id,
        };
        this.router.push("/");
        this.showSuccessAlert("login success!");
      } catch (error) {
        console.log(error);
        this.showErrorAlert(error.response.data.message);
      }
    },
    async logout() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/login");
      this.showSuccessAlert("Your account has been logged out.");
    },
    async fetchVideos(keyword = "itzy") {
      try {
        let { data } = await axios({
          method: "get",
          url: `${this.baseUrl}/pub/videos?keyword=${keyword}`,
        });
        this.videos = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchVideoDetail(id) {
      try {
        let { data } = await axios({
          method: "get",
          url: `${this.baseUrl}/pub/videos/${id}`,
        });
        this.video = data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateStatus() {
      try {
        let { data } = await axios({
          method: "patch",
          url: `${this.baseUrl}/premium`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async snapPayment() {
      try {
        let { data } = await axios({
          method: "POST",
          url: this.baseUrl + `/premium`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        snap.pay(`${data.transactionToken}`, {
          // onSuccess: async (result) => {
          //   this.paymentResponse = result;
          // },
          onSuccess: async (result) => {
            try {
              this.updateStatus();
              // console.log('');
            } catch (error) {
              console.log(error);
            }
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async showSuccessAlert(msg) {
      try {
        let result = await swal.fire({
          position: "top-end",
          icon: "success",
          timer: 2000,
          html: `
          <div style="text-align: left; margin-left: 10px">
            ${msg}
          </div>`,
          toast: true,
          showConfirmButton: false,
        });
        return result;
      } catch (e) {
        console.error(e);
      }
    },
    async showErrorAlert(msg) {
      try {
        let result = await swal.fire({
          title: "Error!",
          text: msg,
          icon: "error",
          confirmButtonText: "ok",
        });
        return result;
      } catch (e) {
        console.error(e);
      }
    },
  },
  getters: {},
});
