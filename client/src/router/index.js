import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import CartView from "../views/CartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/foods",
      name: "foods",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
  ],
});

router.beforeEach((to, from) => {
  if (to.name === "login" && localStorage.access_token) return { name: "home" };
  else if (to.name === "register" && localStorage.access_token)
    return { name: "home" };
  else if (to.name === "cart" && !localStorage.access_token)
    return { name: "home" };
});

export default router;
