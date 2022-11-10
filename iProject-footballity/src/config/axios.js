import axios from "axios";

const instance = axios.create({
  baseURL: "https://iproject-footballity.herokuapp.com/",
});

export default instance;
