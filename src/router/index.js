import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/cartview",
    name: "CartView",
    component: () =>
      import(/* webpackChunkName: "cartview" */ "../views/cartView.vue"),
  },
  {
    path: "/deliveryview",
    name: "DeliveryView",
    component: () =>
      import(
        /* webpackChunkName: "deliveryview" */ "../views/deliveryView.vue"
      ),
  },
  {
    path: "/ourproductview",
    name: "OurProductView",
    component: () =>
      import(/* webpackChunkName: "ourproduct" */ "../views/ourProduct.vue"),
  },
  {
    path: "/sandboxview",
    name: "SandboxView",
    component: () =>
      import(/* webpackChunkName: "sandboxview" */ "../views/sandbox.vue"),
  },
  {
    path: "/searchview",
    name: "SearchView",
    component: () =>
      import(/* webpackChunkName: "searchview" */ "../views/searchView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
