import axios from "axios";

const instance = axios.create({
  // baseURL: "https://jobystreet.herokuapp.com/pub",
  baseURL: "http://localhost:3000",
});

export default instance;
