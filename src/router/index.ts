import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // 登录
  {
    path: "/login/:id",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  // 首页
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      auth: "login",
    },
    children: [
      {
        path: "/about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/info",
        name: "Info",
        component: () =>
          import(/* webpackChunkName: "info" */ "../views/info.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// const loginUrl = "/login";

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.auth === "login")) {
//     if (!userService.isLogin()) {
//       next({
//         path: loginUrl,
//         // query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
//   } else {
//     next(); // 确保一定要调用 next()
//   }
// });

export default router;
