import { defineStore } from "pinia";
import axios from "../apis/axios";

export const useAllStore = defineStore("all", {
  state: () => ({
    beverages: [],
    transactions: [],
    weather: "",
  }),
  actions: {
    async getBeverages() {
      try {
        const { data } = await axios.get("/beverages");

        this.beverages = data.rows;
        this.totalPage = data.totalPage;
        this.currentPage = data.currentPage;
      } catch (err) {
        console.log(err);
      }
    },
    async getTransaction() {
      try {
        const { data } = await axios.get("/transactions", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(data);
        this.transactions = data;
      } catch (err) {
        console.log(err);
      }
    },
    changeLoginStatus(boolean) {
      this.isLogin = boolean;
    },
    async getWeather() {
      try {
        const { data } = await axios.get("/weather", {
          headers: {
            latitude: localStorage.getItem("latitude"),
            longitude: localStorage.getItem("longitude"),
          },
        });

        this.weather = `Suhu sekarang ${data.celcius}°C. ${data.message}`;
      } catch (err) {
        console.log(err);
      }
    },
    async getPayment() {
      try {
        const access_token = localStorage.getItem("access_token");

        const { data } = await axios.post(
          "/payment",
          {},
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );

        this.paymentToken = data.token;
        snap.pay(this.paymentToken, {
          onSuccess: async () => {
            try {
              const { data } = axios.patch(
                "/payment",
                {},
                {
                  headers: {
                    access_token: localStorage.getItem("access_token"),
                  },
                }
              );

              this.router.push({ name: "menu-page" });
            } catch (err) {
              console.log(err);
            }
          },
          onClose: async () => {
            try {
              console.log("Customer closed the pop-up window");
              this.router.push({ name: "menu-page" });
            } catch (err) {
              console.log(err);
            }
          },
        });

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
