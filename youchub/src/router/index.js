import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailVideo from "../views/DetailVideo.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import LikesPage from "../views/LikesPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/detail/:videoId",
      name: "detail",
      component: DetailVideo,
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
      path: "/likes",
      name: "likes",
      component: LikesPage,
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.name === "likes" && !localStorage.isPremium) next({ name: "home" });
  else if (
    (to.name === "login" || to.name === "register") &&
    localStorage.access_token
  )
    next({ name: "home" });
  else next();
});
export default router;
