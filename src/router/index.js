import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/directive",
    name: "Directive",
    component: () => import("../views/number2/directive.vue"),
  },
  {
    path: "/extend",
    name: "Extend",
    component: () => import("../views/number2/extend.vue"),
  },
  {
    path: "/set",
    name: "Set",
    component: () => import("../views/number2/set.vue"),
  },
  {
    path: "/LifeCycle",
    name: "LifeCycle",
    component: () => import("../views/number2/LifeCycle.vue"),
  },
  {
    path: "/template",
    name: "template",
    component: () => import("../views/number2/template.vue"),
  },
  {
    path: "/component",
    name: "component",
    component: () => import("../views/number2/component.vue"),
  },
  {
    path: "/component2",
    name: "component2",
    component: () => import("../views/number2/component2.vue"),
  },
  {
    path: "/component3",
    name: "component3",
    component: () => import("../views/number2/component3.vue"),
  },
  {
    path: "/component4",
    name: "component4",
    component: () => import("../views/number2/component4.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
