import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import detailPage from "../views/DetailThread.vue";
import login from "../views/Login.vue";
import register from "../views/Register.vue";
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
      component: login,
    },
    {
      path: "/register",
      name: "register",
      component: register,
    },

    {
      path: "/detail/:idThread",
      name: "detail",
      component: detailPage,

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
  ],
});
router.beforeEach((to, from) => {
  if (localStorage.getItem("access_token") && to.name === "login") {
    return { name: "home" };
  } else if (localStorage.getItem("access_token") && to.name === "register") {
    return { name: "home" };
  }
});

export default router;
