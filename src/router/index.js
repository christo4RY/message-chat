import { auth } from "@/firebase/config";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter(to, from, next) {
      if (!auth.currentUser) {
        next();
      } else {
        next({ name: "message.room" });
      }
    },
  },
  {
    path: "/message-room",
    name: "message.room",
    component: () => import("@/views/MessageRoom.vue"),
    beforeEnter(to, from, next) {
      if (auth.currentUser) {
        next();
      } else {
        next({ name: "home" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
