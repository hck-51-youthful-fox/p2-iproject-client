// import { ref, computed } from 'vue'
import { defineStore } from "pinia";

export const useFootballStore = defineStore("football", {
  state(){
    return {

    }
  },
  actions: {
    changePage(page) {
      this.router.push(page);
    },
  },
});
