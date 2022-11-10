import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import MenuPage from "../views/MenuPage.vue";
import CartModal from "../views/CartModal.vue";
import LoginPage from "../views/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: LandingPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/beverages",
      name: "menu-page",
      component: MenuPage,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartModal,
    },
  ],
});

export default router;
