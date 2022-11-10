import { defineStore } from "pinia";
import axios from "axios";

export const useAllStore = defineStore("counter", {
  state: () => ({
    videos: [],
    video: {},
    baseUrl: "http://localhost:3000",
    // baseUrl: "https://youchubb.herokuapp.com",
    paymentResponse: "",
    isLogin: false,
    likes: [],
    profPic: "",
    isPremium: false,
  }),
  actions: {
    async register(user) {
      const { email, password, avatar } = user;
      try {
        const { data } = await axios.post(`${this.baseUrl}/register`, {
          email,
          password,
          avatar,
        });
        this.router.push("/login");
        this.showSuccessAlert("register success!");
      } catch (error) {
        console.log(error);
        this.showErrorAlert(error);
        this.showErrorAlert(error);
      }
    },
    async login(user) {
      try {
        const { email, password } = user;
        const { data } = await axios.post(`${this.baseUrl}/login`, {
          email,
          password,
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("id", data.id);
        localStorage.setItem("email", data.email);
        localStorage.setItem("isPremium", data.isPremium);
        localStorage.setItem("profPic", data.avatar);
        this.isLogin = true;
        this.isPremium = data.isPremium;
        this.profPic = data.avatar;
        this.router.push("/");
        this.showSuccessAlert("login success!");
      } catch (error) {
        console.log(error);
        // this.showErrorAlert(error);
        this.showErrorAlert(error.response.data.message);
      }
    },
    async logout() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/login");
      this.showSuccessAlert("Your account has been logged out.");
    },
    async fetchVideos(keyword = "youtube") {
      try {
        let { data } = await axios({
          method: "get",
          url: `${this.baseUrl}/pub/videos?keyword=${keyword}`,
        });
        this.videos = data;
      } catch (error) {
        console.log("<<<< ini error fetchVideos");
        console.log(error);
        this.showErrorAlert(error);
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
        this.showErrorAlert(error);
      }
    },
    async fetchLikes() {
      try {
        const { data } = await axios({
          method: "get",
          url: `${this.baseUrl}/likes`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(data);
        this.likes = data;
      } catch (error) {
        console.log(error);
        this.showErrorAlert(error);
      }
    },
    async addLikes(videoId, vid) {
      try {
        const {
          title,
          link,
          avatarUrl,
          channel,
          views,
          publishedDate,
          isVerified,
        } = vid;
        console.log(vid, videoId);
        const { data } = await axios({
          method: "post",
          url: `${this.baseUrl}/likes/${videoId}`,
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            title,
            link,
            avatarUrl,
            channel,
            views,
            publishedDate,
            isVerified,
          },
        });
        this.fetchLikes();
        this.showSuccessAlert(data.message);
      } catch (error) {
        console.log(error);
        this.showErrorAlert(error.response.data.message);
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
        this.isPremium = true;
        localStorage.setItem("isPremium", true);
        this.router.push("/");
      } catch (error) {
        console.log(error);
        this.showErrorAlert(error);
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
          onSuccess: async (result) => {
            try {
              this.updateStatus();
            } catch (error) {
              console.log(error);
              this.showErrorAlert(error);
            }
          },
        });
      } catch (error) {
        console.log(error);
        this.showErrorAlert(error);
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
        this.showErrorAlert(e);
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
