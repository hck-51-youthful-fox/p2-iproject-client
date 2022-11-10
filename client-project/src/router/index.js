import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import HomePage from "../views/HomePage.vue";
import editPage from "../components/editPage.vue";
import addPage from "../components/addPage.vue";
import NewsPage from "../views/NewsPage.vue";

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
      path: "/add",
      name: "AddNotes",
      component: addPage,
    },
    {
      path: "/news",
      name: "news",
      component: NewsPage,
    },
    {
      path: "/notes/:notesId",
      name: "edit",
      component: editPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  // console.log(to.name, "<<<<");
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
