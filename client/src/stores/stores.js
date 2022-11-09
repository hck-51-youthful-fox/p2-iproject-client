import { defineStore } from "pinia";
import axios from "../config/axios";
import Swal from "sweetalert2";

export const useFoodStore = defineStore("foods", {
  state: () => ({
    foods: [],
    currentPage: 1,
    currentFilter: "",
    totalPage: 1,
  }),
  actions: {
    async fetchFoods(page, filter) {
      try {
        let category = "";
        if (!page) {
          page = 1;
        }
        if (!filter) {
          category = "";
        } else {
          category = `&filter[category]=${filter}`;
        }

        let currentPage = page;

        if (currentPage > 1 && filter) {
          currentPage = 1;
        }
        const { data } = await axios.get(
          `/pub/food?page[number]=${currentPage}${category}`
        );
        this.foods = data;
        this.currentPage = currentPage;
        this.currentFilter = filter;
        this.totalPage = data.totalPage;
      } catch (error) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "There's no foods in this category",
        });
      }
    },
    convertPrice(money) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(money);
    },
  },
});

export const useCustomerStore = defineStore("customers", {
  state: () => ({
    isLogin: false,
  }),
});

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: [],
  }),
  actions: {
    async fetchCategories() {
      try {
        const { data } = await axios.get("/pub/categories");
        this.categories = data;
      } catch (error) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "There's no category",
        });
      }
    },
  },
});
