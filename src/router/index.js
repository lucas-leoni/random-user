import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserView from "@/views/users/User.vue";
import UsersView from "@/views/users/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user",
    name: "Usuario",
    component: UserView,
  },
  {
    path: "/users",
    name: "Usuarios",
    component: UsersView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
