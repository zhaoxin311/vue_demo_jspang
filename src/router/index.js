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
    name: "about",
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
  {
    path: "/propsData",
    name: "propsData",
    component: () => import("../views/number3/propsData.vue"),
  },
  {
    path: "/computed",
    name: "computed",
    component: () => import("../views/number3/computed.vue"),
  },
  {
    path: "/Methods",
    name: "Methods",
    component: () => import("../views/number3/Methods.vue"),
  },
  {
    path: "/Watch",
    name: "Watch",
    component: () => import("../views/number3/Watch.vue"),
  },
  {
    path: "/Mixins",
    name: "Mixins",
    component: () => import("../views/number3/Mixins.vue"),
  },
  {
    path: "/Extends",
    name: "Extends",
    component: () => import("../views/number3/Extends.vue"),
  },
  {
    path: "/attributes",
    name: "attributes",
    component: () => import("../views/number4/attributes.vue"),
  },
  {
    path: "/method",
    name: "method",
    component: () => import("../views/number4/method.vue"),
  },
  {
    path: "/event",
    name: "event",
    component: () => import("../views/number4/event.vue"),
  },
  {
    path: "/slot",
    name: "slot",
    component: () => import("../views/number4/slot.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
