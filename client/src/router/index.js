import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import MatchView from "../views/MatchView.vue";
import Standings from "../views/Standings.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "loginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "registerPage",
      component: RegisterPage,
    },
    {
      path: "/",
      name: "homeView",
      component: HomeView,
    },
    {
      path: "/match",
      name: "matchView",
      component: MatchView,
    },
    {
      path: "/standings",
      name: "Standings",
      component: Standings,
    },
  ],
});

// router.beforeEach((to, from) => {
//   if (!localStorage.getItem("access_token") && to.name === "Wishlist") {
//     return { path: "/login" };
//   } else if (
//     (localStorage.getItem("access_token") && to.name === "loginPage") ||
//     (localStorage.getItem("access_token") && to.name === "registerPage")
//   ) {
//     return { path: "/" };
//   }
// });

export default router;
