import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Details from "../views/Details.vue";
import Rents from "../views/Rents.vue";
import ReviewForm from "../views/ReviewForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/details/:id",
      name: "details",
      component: Details,
    },
    {
      path: "/rents",
      name: "rents",
      component: Rents,
    },
    {
      path: "/form/:id",
      name: "reviewForm",
      component: ReviewForm,
    },
  ],
});
router.beforeEach(async (to, from) => {
  if (
    (localStorage.getItem("access_token") &&
      localStorage.getItem("username") &&
      to.name === "login") ||
    (localStorage.getItem("access_token") &&
      localStorage.getItem("username") &&
      to.name === "register")
  ) {
    return { name: "home" };
  } else if (
    !localStorage.getItem("access_token") &&
    !localStorage.getItem("username") &&
    to.name === "rents"
  ) {
    return { name: "home" };
  }
});

export default router;
