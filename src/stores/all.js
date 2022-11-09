import { defineStore } from "pinia";
import axios from "axios";

export const useAllStore = defineStore("all", {
  state: () => ({}),
  actions: {
    changePage(page) {
      this.router.push({ name: page });
    },
  },
});
