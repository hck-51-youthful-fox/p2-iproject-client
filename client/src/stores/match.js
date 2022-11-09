import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useMatchStore = defineStore("match", {
  state: () => {
    return {
      liveData: [],
      nbaData: [],
      standings: [],
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
  },
});
