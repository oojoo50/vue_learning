import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DataBinding from "../views/DataBinding.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // import(/* webpackChunkName: "about" */ "../views/About.vue"),
      import(/* webpackPrefetch:true */ "../views/About.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: DataBinding,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
