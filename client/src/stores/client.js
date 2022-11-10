import { defineStore } from "pinia";
import axios from "../apis/axios";

export const useClientStore = defineStore("client", {
  state: () => {
    return {
      isLogin: false,
      products: [],
      datasInCart: [],
      totalAllPriceInCart: 0,
      totalProductInCart: 0,
      Allcity: [],
      ongkir: 0,
      invoice: {},
    };
  },
  actions: {
    sweetAlert(icon, title) {
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
        icon: icon,
        title: title,
      });
    },
    async fetchProductInCart() {
      const { data } = await axios.get("/cart", {
        headers: { access_token: localStorage.getItem("access_token") },
      });
      this.totalAllPriceInCart = 0;
      data.forEach((e) => {
        this.totalAllPriceInCart += e.price;
      });
      this.totalProductInCart = data.length;
      console.log(this.totalAllPriceInCart);
      this.datasInCart = data;
      console.log(data);
    },
    async fetchDataProduct(page, search) {
      try {
        console.log("ihza");
        let find = "";
        let pages = 0;
        if (search) {
          find = search;
        }
        if (page) {
          pages = page - 1;
        }
        console.log(pages);
        const { data } = await axios.get(
          `/products?page=${pages}&search=${find}`
        );
        this.products = data;
        // console.log(this.movies);
        this.router.push({
          name: "home",
          query: { page: `${pages + 1}` },
        }),
          console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
    async register(email, password) {
      try {
        // console.log("ihzaaaasss");
        // console.log(payload);
        const { data } = await axios.post(`/register`, {
          email,
          password,
        });
        console.log("berhasil daftar");
        this.router.push({ name: "login" });
        this.sweetAlert("success", `Register successfully`);
      } catch (err) {
        // console.log(err);

        this.sweetAlert("error", `${err.response.data.msg[0]}`);
      }
    },
    async updateQuantity(quantity, ProductId) {
      try {
        console.log(quantity, ProductId);
        const { data } = await axios.post(
          `/cart/${ProductId}`,
          { quantity },
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        console.log(data);
        // this.sweetAlert("success", "Berhasil ditambah di Cart");
        console.log("berhasil tambah dari cart");
        this.fetchProductInCart();
        this.router.push({ name: "cart" });
      } catch (err) {
        console.log(err);
        this.sweetAlert("error", "gagal ditambah di Cart");
      }
    },
    async addQuantity(quantity, ProductId) {
      try {
        console.log("adammm");
        console.log(quantity, ProductId);
        const { data } = await axios.post(
          `/cart/${ProductId}`,
          { quantity },
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        console.log(data);
        this.sweetAlert("success", "Berhasil ditambah di Cart");

        console.log("berhasil tambah dari dashboard");
        // this.fetchProductInCart();
        // this.router.push({ name: "cart" });
      } catch (err) {
        this.sweetAlert("error", "Gagal ditambah di Cart");

        console.log(err);
      }
    },
    async login(email, password) {
      // console.log(email, password);
      console.log("ihza");
      try {
        const { data } = await axios.post("/login", {
          email,
          password,
        });
        // console.log("ihzzza");
        console.log(data);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);
        // console.log(data);
        this.isLogin = true;
        this.router.push({ name: "home" });
        this.sweetAlert("success", `Success Login`);
      } catch (err) {
        console.log(err);
        this.sweetAlert("error", `${err.response.data.msg}`);
      }
    },
    async deleteFromCart(ProductId) {
      try {
        const { data } = await axios.delete(`/cart/${ProductId}`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        console.log(data);
        console.log("berhasil dihapus");
        this.sweetAlert("success", "Berhasil di hapus di Cart");
      } catch (error) {
        this.sweetAlert("error", "Gagal hapus di Cart");
      }
    },
    async logout() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push({ name: "login" });
      this.sweetAlert("success", `Log Out Successfully`);
    },
    async fetchCity() {
      const { data } = await axios.get("/city", {
        headers: { access_token: localStorage.getItem("access_token") },
      });
      this.Allcity = data;
      // this.checkOngkir(114);
      console.log(data);
    },
    async checkOngkir(destination) {
      const origin = 489;
      const weight = 1000;
      const courier = "jne";
      const { data } = await axios.post(
        "/cost",
        { origin, destination, weight, courier },
        {
          headers: { access_token: localStorage.getItem("access_token") },
        }
      );
      this.ongkir = data;
      console.log(data);
      console.log("dapet nih");
    },
    async payment(gross_amount) {
      // const order_id = `ORDER_1-${new Date()}`;
      // const gross_amount = 1000;
      // console.log(order_id);
      const { data } = await axios.post(
        "/payment",
        {
          gross_amount,
        },
        {
          headers: { access_token: localStorage.getItem("access_token") },
        }
      );
      // console.log(data);
      return data;
    },

    async addInvoice(ongkir, gross_amount) {
      try {
        console.log(ongkir);
        const dataPayment = await this.payment(gross_amount);
        console.log(dataPayment);
        const { data } = await axios.post(
          "/invoice",
          {
            ongkir,
            url_payment: dataPayment.redirect_url,
            token_payment: dataPayment.token,
          },
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        this.router.push({ name: "invoice" });
        this.sweetAlert("success", "Invoice berhasil di buat");
      } catch (error) {
        // this.sweetAlert('error','Gagal ditambah di Cart')
      }
    },
    async getInvoice() {
      const { data } = await axios.get("/invoice", {
        headers: { access_token: localStorage.getItem("access_token") },
      });
      this.invoice = data;
    },
    async checkSnap(snapToken, invoiceId) {
      snap.pay(snapToken, {
        onSuccess: async function (result) {
          console.log("success");
          console.log(result);
          await axios.post(
            `invoice/${invoiceId}`,
            {},
            {
              headers: { access_token: localStorage.getItem("access_token") },
            }
          );
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
    },
  },
});
