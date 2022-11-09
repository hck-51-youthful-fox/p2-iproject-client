import { defineStore } from "pinia";
import axios from "axios";

export const useAllStore = defineStore("counter", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    paymentResponse: "",
  }),
  actions: {
    async updateStatus() {
      try {
        let { data } = await axios({
          method: "patch",
          url: `${this.baseUrl}/premium`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(data);
        console.log("==================================");
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
  },
  getters: {},
});
