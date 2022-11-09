import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: "https://p2-lounik-customer.herokuapp.com/pub",
});

export default instance;
