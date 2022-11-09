import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
const baseUrl = "http://localhost:3000";

export const useNoteStore = defineStore("note", {
  state: () => ({
    isLogin: false,
    isPremium: false,
    UserId: "",
    payments: {},
    notes: [],
    category: [],
  }),
  actions: {
    checkLogin() {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    async logout() {
      try {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Signed out",
          text: "See you later!",
          showConfirmButton: false,
          timer: 1500,
        });
        this.isLogin = false;
        localStorage.clear();
        this.router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
    async register(result) {
      try {
        const dataRegist = await axios({
          url: `${baseUrl}/register`,
          method: "POST",
          data: {
            username: result.username,
            email: result.email,
            password: result.password,
          },
        });
        Swal.fire({
          icon: "success",
          title: `You have been registered!`,
          text: "Now you may sign in to use our services",
          confirmButtonText: "Sign in now",
        });
        this.router.push("/login");
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: `${error.response.data.error.message}`,
        });
      }
    },
    async login(result) {
      try {
        // console.log(this.router, "ini dari login");
        const response = await axios({
          url: `${baseUrl}/login`,
          method: "POST",
          data: {
            email: result.email,
            password: result.password,
          },
        });
        // console.log(response, "<<<< dari login");
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("status", response.data.status);
        localStorage.setItem("UserId", response.data.id);

        this.isLogin = true;
        this.UserId = response.data.id;
        if (localStorage.getItem("status") === "reguler") {
          this.isPremium = false;
        } else if (localStorage.getItem("status") === "premium") {
          this.isPremium = true;
        }
        this.router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: `${error.response.data.error.message}`,
        });
      }
    },
    async checkPremium() {
      if (localStorage.getItem.status === "premium") {
        this.isPremium = true;
      } else if (localStorage.getItem.status === "reguler") {
        this.isPremium = false;
      }
    },
    async payment() {
      try {
        let { data } = await axios({
          url: `${baseUrl}/payments`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        // console.log(data, "<<< ini data payment");
        let UserId = localStorage.getItem("UserId");
        // ini pembayaran midtrans
        snap.pay(`${data.transactionToken}`, {
          onSuccess: async (result) => {
            console.log(result, "<<< ini dari payment");
            this.payments = result;

            let response = await axios({
              url: `${baseUrl}/payments/${UserId}`,
              method: "PATCH",
              headers: {
                access_token: localStorage.getItem("access_token"),
              },
            });
            localStorage.setItem("status", "premium");
            this.isPremium = true;
            this.checkLogin();
            Swal.fire("payment success!");
            // console.log(result);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            console.log("wating your payment!");
            console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            console.log("payment failed!");
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            console.log("you closed the popup without finishing the payment");
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchNotes() {
      try {
        let { data } = await axios({
          url: `${baseUrl}/notes`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(data, "ini data dari fetch notes");
        this.notes = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCategories() {
      try {
        let { data } = await axios({
          url: `${baseUrl}/categories`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.category = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addNotes(obj) {
      try {
        await axios({
          url: `${baseUrl}/notes`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            title: obj.name,
            description: obj.description,
            date: obj.date,
            CategoryId: obj.CategoryId,
          },
        });
        this.fetchNotes();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteNotes(id) {
      // console.log(id);
      try {
        await axios({
          url: `${baseUrl}/notes/${id}`,
          method: "DELETE",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        // console.log(data);
        this.fetchNotes();
      } catch (error) {
        console.log(error);
      }
    },
    async editNote(id, object) {
      try {
        let { dataEdit } = await axios({
          url: `${baseUrl}/notes/${id}`,
          method: "PATCH",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            name: object.name,
            description: object.description,
            date: object.date,
          },
        });
        // console.log(dataEdit);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
