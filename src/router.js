import Vue from "vue";
import VueRouter from "vue-router";

import Login from "./components/login/login.vue";
import Padre from "./components/padre.vue";
import Search from "./components/search.vue";
// import Users from "./views/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/api/login",
    name: "login",
    component: Login,
  },
  {
    path: "/api",
    name: "api",
    component: Padre,
  },
  {
    path: "/api/search",
    name: "api",
    component: Search,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
