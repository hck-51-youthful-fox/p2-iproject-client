import { createRouter, createWebHistory } from "vue-router";
import Browse from "../views/Browse.vue";
import Home from "../views/Home.vue";
import Library from "../views/Library.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Subscribe from "../views/Subscribe.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/browse",
      name: "browse",
      component: Browse,
    },
    {
      path: "/my-library",
      name: "library",
      component: Library,
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
      path: "/subscribe",
      name: "subscribe",
      component: Subscribe,
    },
  ],
});

export default router;
