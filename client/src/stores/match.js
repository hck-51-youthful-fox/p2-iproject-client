import { defineStore } from "pinia";
import axios from "axios";

//const baseUrl = "http://localhost:3000";
const baseUrl = "https://nba-live.herokuapp.com";

export const useMatchStore = defineStore("match", {
  state: () => {
    return {
      liveData: [],
      nbaData: [],
      standings: [],
      isPremium: false,
    };
  },
  //   getters: {
  //     nbaDataGenap: (state) => {
  //       let arrBaru = [];

  //       arrBaru = state.nbaData.filter((val, idx) => idx);
  //     },
  //     nbaDataGanjil: (state) => {},
  //   },
  actions: {
    async fetchLiveScore() {
      try {
        let { data } = await axios({
          url: `${baseUrl}/nba/live-score`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.liveData = data;
      } catch (error) {
        //console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.msg}`,
        });
        this.$router.push("/");
      }
    },

    async fetchNbaMatch() {
      try {
        let { data } = await axios({
          url: `${baseUrl}/nba/nba-league`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.nbaData = data;
      } catch (error) {
        //console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.msg}`,
        });
        this.$router.push("/match");
      }
    },

    async fetchStandings() {
      try {
        let { data } = await axios({
          url: `${baseUrl}/nba/standings`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.standings = data;
      } catch (error) {
        //console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.msg}`,
        });
        this.$router.push("/standings");
      }
    },
    async handlePayment() {
      try {
        //const { credential } = response;
        const { data } = await axios({
          url: `${baseUrl}/nba/payment`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        snap.pay(`${data.transactionToken}`, {
          onSuccess: async function (result) {
            await axios({
              url: `${baseUrl}/nba/update`,
              method: "PATCH",
              headers: {
                access_token: localStorage.getItem("access_token"),
              },
            });
            console.log(result);
            localStorage.setItem("status", "premium");
            //this.isPremium = true;
            //localStorage.clear();
          },
          onPending: function (result) {
            console.log("pending");
            console.log(result);
          },
          onError: function (result) {
            console.log("error");
            console.log(result);
          },
          onClose: function () {
            console.log(
              "customer closed the popup without finishing the payment"
            );
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
