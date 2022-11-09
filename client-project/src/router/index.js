import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import HomePage from "../views/HomePage.vue";
import PaymentPage from "../views/PaymentPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/payments",
      name: "payments",
      component: PaymentPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem.access_token && to.name === "home") {
    next("/login");
  } else if (!localStorage.getItem.access_token && to.name === "payment") {
    next("/login");
  } else if (localStorage.getItem.access_token && to.name === "login") {
    next("/");
  } else {
    next();
  }
});

export default router;
