import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/gametable/:playerX/:playerO",
      name: "gametable",
      props: true,
      component: () => import("../views/GameTable.vue"),
    },
  ],
});

export default router;
