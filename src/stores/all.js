import { defineStore } from "pinia";
import instance from "../../apis/axios";
import axios from "axios";

export const useAllStore = defineStore("all", {
  state: () => ({
    games: [],
    game: {},
  }),
  actions: {
    changePage(page) {
      this.router.push({ name: page });
    },
    async fetchGames(query) {
      try {
        const { data } = await instance.get(`/games`, {
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
      try {
        const { data } = await instance.get(`/games/free-games`, {
          params: query,
        });
        this.games = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchGameDetail(id) {
      try {
        const { data } = await instance.get(`/games/${id}`);
        this.game = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchGameDetail(id) {
      try {
        const { data } = await instance.get(`/games/free-games/${id}`);
        this.game = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
