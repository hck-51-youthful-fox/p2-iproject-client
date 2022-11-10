import { defineStore } from "pinia";
import axios from "../config/index";

import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  databaseURL: "https://investr-12fcc-default-rtdb.firebaseio.com",
};
const fireApp = initializeApp(firebaseConfig);

export const useInvestrStore = defineStore("investr", {
  state: () => ({
    isLogin: false,
    email: "",
    realtimeStock: [],
    realtimeLabel: [],
    aapl: {},
    amzn: {},
    goog: {},
  }),
  actions: {
    async login(obj) {
      try {
        const { email, password } = obj;
        const { data } = await axios({
          method: "post",
          url: "/clients/login",
          data: { email, password },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        this.isLogin = true;
        this.email = data.email;
        this.router.push("/");
        this.successAlert("Login Success");
      } catch (error) {
        this.errorAlert(error.response.data.message);
      }
    },
    async handleCredentialResponse(response) {
      try {
        const { data } = await axios({
          url: "/clients/google-sign-in",
          method: "POST",
          headers: {
            google_token: response.credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        this.email = data.email;
        this.isLogin = true;

        this.router.push("/");
        this.successAlert("Login Success");
      } catch (error) {
        this.errorAlert(error.response.data.message);
      }
    },
    logout() {
      localStorage.clear();
      this.router.push("/");
      this.successAlert("Logout Success");
    },
    async signUp(obj) {
      //cek lg

      try {
        const { email, password, address, phoneNumber } = obj;
        const { data } = await axios({
          method: "post",
          url: "/clients/register",
          data: { email, password, address, phoneNumber },
        });
        this.router.push("/login");
        this.successAlert("Registration Success");
      } catch (error) {
        this.errorAlert(error.response.data.message);
      }
    },
    checkLogin() {
      if (localStorage.access_token) {
        this.isLogin = true;
        this.email = localStorage.email;
      }
    },
    fetchRealtimeData() {
      const db = getDatabase();
      const BINANCE = ref(db, "stocks/BINANCE:BTCUSDT");
      onValue(BINANCE, (snapshot) => {
        const data = snapshot.val();
        let i = 0;
        let temp = [];
        let tempLabel = [];
        for (let key in data) {
          let d = new Date(key * 1000);
          let datetext =
            d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
          tempLabel.push(datetext);
          temp.push(data[key].p);
        }
        this.realtimeStock = temp;
        this.realtimeLabel = tempLabel;
        console.log(temp);
      });
    },
    async snapPayment() {
      try {
        let { data } = await axios({
          method: "POST",
          url: `/payment`,
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
    fecthData() {
      Promise.all([
        fetch(
          "https://finnhub.io/api/v1/quote?symbol=AMZN&token=cdl1rqiad3i4r9fur7d0cdl1rqiad3i4r9fur7dg"
        ),
        fetch(
          "https://finnhub.io/api/v1/quote?symbol=AAPL&token=cdl1rqiad3i4r9fur7d0cdl1rqiad3i4r9fur7dg"
        ),
        fetch(
          "https://finnhub.io/api/v1/quote?symbol=GOOG&token=cdl1rqiad3i4r9fur7d0cdl1rqiad3i4r9fur7dg"
        ),
      ])
        .then(async ([res1, res2, res3]) => {
          const a = await res1.json();
          const b = await res2.json();
          const c = await res3.json();
          this.amzn = a;
          this.aapl = b;
          this.goog = c;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async confirmAlert() {
      try {
        const alert = await Swal.fire({
          title: "Are you sure?",
          text: "You will be logged out!",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Proceed",
          cancelButtonText: "Cancel",
          reverseButtons: true,
        });
        return !!(alert.value && alert.value === true);
      } catch (e) {
        return false;
      }
    },
    async successAlert(text) {
      try {
        let result = await swal.fire({
          position: "top-end",
          icon: "success",
          timer: 1500,
          html: `
            <div style="text-align: left; margin-left: 10px">
              ${text}
            </div>`,
          toast: true,
          showConfirmButton: false,
        });
        return result;
      } catch (e) {
        console.error(e);
      }
    },
    async errorAlert(text) {
      try {
        let result = await swal.fire({
          title: "Error!",
          text: text,
          icon: "error",
          confirmButtonText: "close",
        });
        return result;
      } catch (e) {
        console.error(e);
      }
    },
  },
});
