import { defineStore } from "pinia";
import axios from "axios";

//const baseUrl = "http://localhost:3000";
const baseUrl = "https://nba-live.herokuapp.com";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      username: "",
      isLogin: false,
      password: "",
      email: "",
      phoneNumber: "",
      address: "",
    };
  },
  actions: {
    loginState() {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },

    logout() {
      (this.isLogin = false), localStorage.clear();
      this.$router.push("/login");
      Swal.fire("Logged Out!", "You have logged Out!", "success");
    },

    async handleLogin() {
      //console.log(this.email, this.password);
      try {
        let data = await axios({
          url: `${baseUrl}/login`,
          method: "POST",
          data: {
            email: this.email,
            password: this.password,
          },
        });
        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("username", data.data.username);
        localStorage.setItem("status", data.data.status);
        localStorage.setItem("authorId", data.data.id);
        localStorage.setItem("email", data.data.email);

        this.isLogin = true;
        this.$router.push("/");
        this.password = "";
        this.email = "";
        Swal.fire("Logged In!", "You have logged in!", "success");
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.msg}`,
        });
      }
    },

    async handleRegister() {
      try {
        await axios({
          url: `${baseUrl}/register`,
          method: "POST",
          data: {
            username: this.username,
            email: this.email,
            password: this.password,
            phoneNumber: this.phoneNumber,
            address: this.address,
          },
        });
        Swal.fire(
          "Registered!",
          "Your account have been registered",
          "success"
        );
        this.$router.push("/login");

        (this.username = ""),
          (this.email = ""),
          (this.password = ""),
          (this.phoneNumber = ""),
          (this.address = "");
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.msg}`,
        });
      }
    },

    async handleCredentialResponse(response) {
      try {
        const { credential } = response;
        const data = await axios({
          url: `${baseUrl}/login-google`,
          method: "POST",
          headers: {
            google_token: credential,
          },
        });

        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("username", data.data.username);
        localStorage.setItem("status", data.data.status);
        localStorage.setItem("authorId", data.data.id);
        localStorage.setItem("email", data.data.email);

        this.isLogin = true;
        this.$router.push("/");
        Swal.fire("Logged In!", "You have logged in!", "success");
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.msg}`,
        });
      }
    },
  },
});
