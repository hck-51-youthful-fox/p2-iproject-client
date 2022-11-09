import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import HomePage from "../views/HomePage.vue";
import PremiumPage from "../views/PremiumPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterPage,
    },
    {
      path: "/premium",
      name: "Premium",
      component: PremiumPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to.name, "<<<<");
  if (to.name === "Login" && localStorage.getItem("access_token")) {
    next("/");
  }
  if (to.name === "Premium" && !localStorage.getItem("access_token")) {
    next("/login");
  } else {
    next();
  }
});

export default router;
