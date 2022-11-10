import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyTeamView from "../views/MyTeamView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import AddPositionComponent from "../components/AddPositionComponent.vue";
import SearchPlayerView from "../views/SearchPlayerView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/bookmarks",
      name: "MyTeamView",
      component: MyTeamView,
    },
    {
      path: "/login",
      name: "LoginView",
      component: LoginView,
    },
    {
      path: "/register",
      name: "RegisterView",
      component: RegisterView,
    },
    {
      path: "/positionForm",
      name: "AddPositionComponent",
      component: AddPositionComponent,
    },
    {
      path: "/searchPlayer",
      name: "SearchPlayerView",
      component: SearchPlayerView,
    },
  ],
});

router.beforeEach((to, from) => {
  if (localStorage.access_token && to.path === "/login") {
    return { path: "/" };
  }
});
export default router;
