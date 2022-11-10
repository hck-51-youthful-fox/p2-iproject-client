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
          title: "Berhasil Masuk Akun",
        });

        this.router.push({ name: "home" });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Gagal masuk akun",
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
          title: "Daftar Akun Berhasil!",
          text: "Kami telah mengirimkan pesan ke emailmu, periksa emailmu ya!",
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
    totalAllCost: 0,
    tempCost: 0,
    city: [],
    cost: 0,
    transaction: {},
    getDetailTransaction: {},
    fixDetailTransaction: [],
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
        this.totalAllCost = 0;
        let tes = data.forEach((el) => {
          this.totalPriceInCart += el.totalPrice;
          this.totalAllCost += el.totalPrice;
          this.totalOrderInCart += el.quantity;
        });
        this.totalAllCost += this.cost;
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
        this.fetchCart();
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
          title: "Berhasil Menambah Pesanan",
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

    async deleteFoodFromCart(id) {
      try {
        const { data } = axios.delete("/pub/cart/" + id, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        window.location.reload();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async fetchCity() {
      try {
        const { data } = await axios.get("/pub/cart/city", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.city = data.slice(0, 5);
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
          title: "There's no city",
        });
      }
    },

    async findShippingCost(destination) {
      try {
        const { data } = await axios.post(
          "/pub/cart/cost",
          {
            origin: "151",
            destination,
            weight: 3,
            courier: "jne",
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        this.cost = data;
        this.totalPriceInCart += this.cost;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async fetchTransaction() {
      try {
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async addTransaction(shippingCost) {
      try {
        const CustomerId = localStorage.id;
        const { data } = await axios.post(
          "/pub/transaction",
          { shippingCost },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        this.transaction = data;
        window.snap.pay(`${data.data.token}`, {
          onSuccess: async function (result) {
            const { data } = await axios.patch(
              "/pub/cart",
              { shippingCost },
              {
                headers: {
                  access_token: localStorage.access_token,
                },
              }
            );

            if (data) {
              Swal.fire({
                icon: "success",
                title: "Pembayaran Berhasil!",
                text: "Pesananmu akan segera kami kirimkan",
              });
            }
            window.location.reload();
            // window.this.router.push({ name: "home" });
          },
          onError: function (result) {
            Swal.fire({
              icon: "error",
              title: "Pembayaran Gagal!",
              text: "Lakukan pembayaran ulang untuk melanjutkan transaksi",
            });
          },
          onClose: function () {
            Swal.fire({
              title: "Kamu yakin ingin keluar dari pembayaran ini?",
              text: "Kamu harus melakukan pembayaran ulang jika keluar dari pembayaran ini!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "##00B14F",
              cancelButtonColor: "#d33",
              confirmButtonText: "Ya",
            });
          },
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },

    async detailTransaction(detail) {
      try {
        let id = detail.transaction.id;
        const { data } = await axios.get("/pub/transaction/" + id, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.fixDetailTransaction = data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      }
    },
  },
});
