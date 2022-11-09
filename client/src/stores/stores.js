import { defineStore } from "pinia";
import axios from "../config/axios";
import Swal from "sweetalert2";

export const useFoodStore = defineStore("foods", {
  state: () => ({
    foods: [],
    currentPage: 1,
    currentFilter: "",
    currentSearch: "",
    totalPage: 1,
  }),
  actions: {
    async fetchFoods(page, filter, search) {
      try {
        console.log(page);
        console.log(search, "search");
        let category = "";
        if (!page) {
          page = 1;
        }
        if (!filter) {
          category = "";
        } else {
          category = `&filter[category]=${filter}`;
        }

        let currentSearch;
        if (search) {
          currentSearch = `&search=${search}`;
          category = "";
        } else {
          currentSearch = "";
        }
        let find = currentSearch;

        let currentPage = page;

        if (currentPage > 1 && filter) {
          currentPage = 1;
        }
        const { data } = await axios.get(
          `/pub/food?page[number]=${currentPage}${category}${find}`
        );
        this.foods = data;
        this.currentPage = currentPage;
        this.currentSearch = currentSearch;
        this.currentFilter = filter;
        this.totalPage = data.totalPage;
      } catch (error) {
        console.log(error);
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
  actions: {
    async login(payload) {
      try {
        const { email, password } = payload;
        const { data } = await axios.post("/pub/login", { email, password });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("id", data.id);
        localStorage.setItem("name", data.name);
        this.isLogin = true;

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Login successfully",
        });

        this.router.push({ name: "home" });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.response.data.message,
        });
      }
    },
    async register(payload) {
      try {
        const { name, email, password, phoneNumber, address } = payload;
        const { data } = await axios.post("/pub/register", {
          name,
          email,
          password,
          phoneNumber,
          address,
        });
        Swal.fire({
          icon: "success",
          title: "Register Successfull",
          text: "We've send you an email, please check your email",
        });
        this.router.push({ name: "login" });
      } catch (error) {
        if (error.response.data.message[0] === "Username has already used") {
          Swal.fire({
            icon: "error",
            title: error.response.data.message,
          });
        } else if (
          error.response.data.message[0] === "Email has already used"
        ) {
          Swal.fire({
            icon: "error",
            title: error.response.data.message,
          });
        } else if (
          error.response.data.message[0] === "Password minimum 5 character"
        ) {
          Swal.fire({
            icon: "error",
            title: error.response.data.message,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: error.response.data.message[0],
          });
        }
      }
    },
    logout() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push({ name: "home" });
    },
  },
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

export const useCartStore = defineStore("carts", {
  state: () => ({
    cart: [],
    currentQuantity: 1,
    totalOrderInCart: 0,
    totalPriceInCart: 0,
  }),
  actions: {
    async fetchCart() {
      try {
        const { data } = await axios.get("/pub/cart", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.cart = data;
        this.totalPriceInCart = 0;
        this.totalOrderInCart = 0;
        let tes = data.forEach((el) => {
          this.totalPriceInCart += el.totalPrice;
          this.totalOrderInCart += el.quantity;
        });
        console.log(this.totalPriceInCart, "<<<TOALBG");
        console.log(data);
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
          title: "There's no cart",
        });
      }
    },

    async addFoodToCart(id) {
      try {
        const { data } = await axios.post(
          "/pub/cart/" + id,
          {},
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        Swal.fire({
          icon: "success",
          title: "Berhasil menambah pesanan!",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async updateQuantity(id, currentQuantity) {
      try {
        console.log(id, "<< d");
        console.log(currentQuantity, "<< qty");
        const { data } = await axios.post(
          "/pub/cart/" + id,
          { quantity: currentQuantity },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        this.fetchCart();
        this.router.push("/cart");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
  },
});
