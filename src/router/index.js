import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddView from "../views/AddView.vue";
import EditView from "../views/EditView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import CommunityView from "../views/CommunityView.vue";
import DetailCommunityView from "../views/DetailCommunityView.vue";
import SearchView from "../views/SearchView.vue";
import UserPost from "../views/UserPost.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
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
      path: "/c",
      name: "communities",
      component: CommunityView,
    },
    {
      path: "/community/:id",
      name: "detail",
      component: DetailCommunityView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/user/post",
      name: "userpost",
      component: UserPost,
    },
  ],
});

export default router;
