import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView.vue"
import RegisterView from "../views/RegisterView.vue"
import UserControlView from "../views/UserControlView.vue"
import GameDetailView from "../views/GameDetailView.vue"
import ReviewView from "../views/ReviewView.vue"
import ExploreView from "../views/ExploreView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : "/",
      name: "home",
      component : HomeView
    },
    {
      path : "/login",
      name: "login",
      component : LoginView
    },
    {
      path : "/register",
      name: "register",
      component : RegisterView
    },
    {
      path : "/user",
      name: "control-panel",
      component : UserControlView
    },
    {
      path : "/game/:id/",
      name: "game-detail",
      component : GameDetailView
    },
    {
      path : "/game/:id/review",
      name: "review-game",
      component : ReviewView
    },
    {
      path : "/explore",
      name: "explore",
      component : ExploreView
    },
  ]
})

export default router
