import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import Home from "../views/Home.vue";

import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Cart from "../views/Cart.vue";
import Invoice from "../views/Invoice.vue";
// import Shipment from "../views/Shipment.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Dashboard,
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
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/invoice",
      name: "invoice",
      component: Invoice,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "login" && localStorage.getItem("access_token"))
    next({ name: "home" });
  else if (to.name === "cart" && !localStorage.getItem("access_token")) {
    // console.log("gaboleh kesini");
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: "Login First",
    });
    next({ name: "home" });
  } else next();
});
export default router;
