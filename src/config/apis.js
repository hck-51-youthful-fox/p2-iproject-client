import axios from "axios";

const instance = axios.create({
  baseURL: "https://boiling-atoll-28428.herokuapp.com/",
});

export default instance;
