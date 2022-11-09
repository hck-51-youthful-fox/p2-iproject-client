import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Detail from "../views/Detail.vue";
import UploadForm from "../views/UploadForm.vue";
import Rented from "../views/Rented.vue";
import Search from "../views/Search.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
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
      path: "/detail/:id",
      name: "detail",
      component: Detail,
    },
    {
      path: "/uploadForm/:id",
      name: "upload",
      component: UploadForm,
    },
    {
      path: "/myrent",
      name: "rented",
      component: Rented,
    },
    {
      path:"/search/:query",
      name:"search",
      component: Search
    }
  ],
});
// router.beforeEach((to, from) => {
//   if (to.name == "login" && localStorage.access_token) return { name: "home" };
// });

export default router;
