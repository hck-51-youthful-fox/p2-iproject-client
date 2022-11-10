import axios from "axios";

const instance = axios.create({
  // baseURL: "https://fast-brushlands-90897.herokuapp.com",
  baseURL: "http://localhost:3000",
});

export default instance;
