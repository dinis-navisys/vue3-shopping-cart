import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "homepage",
    component: () => import("../pages/Homepage.vue")
  },
  {
    path: "/store",
    name: "store",
    component: () => import("../pages/Store.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../pages/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});

export default router;