import { createRouter, createWebHistory } from "vue-router";
import Browse from "../views/Browse.vue";
import Home from "../views/Home.vue";
import Library from "../views/Library.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Subscribe from "../views/Subscribe.vue";
import GameDetail from "../views/GameDetail.vue";
import GameDetailFree from "../views/GameDetailFree.vue";
import UserDetail from "../views/UserDetail.vue";

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
    {
      path: "/games/:id",
      name: "detail",
      component: GameDetail,
    },
    {
      path: "/games/free-games/:id",
      name: "free-detail",
      component: GameDetailFree,
    },
    {
      path: "/users/:id",
      name: "user-detail",
      component: UserDetail,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (!localStorage.getItem("access_token") && to.name === "register") {
//     return { name: "register" };
//   } else if (localStorage.getItem("access_token") && to.name === "login") {
//     return { name: "home" };
//   } else if (!localStorage.getItem("access_token") && to.name !== "login") {
//     return { name: "login" };
//   }
// });

// router.beforeEach((to, from, next) => {
//   if (!localStorage.getItem("access_token") && to.name === "home") {
//     next({ name: "login" });
//   } else if (
//     localStorage.getItem("access_token") &&
//     (to.name === "login" || to.name === "register")
//   ) {
//     next({ name: "home" });
//   } else next();
// });
export default router;
