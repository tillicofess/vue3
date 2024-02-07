import { createRouter, createWebHistory } from "vue-router";
import test from "@/components/test.vue";
import deFault from "@/components/views/default.vue";
import aiChat from "@/components/views/aiChat.vue";
import login from "@/components/views/login.vue";
// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: deFault },
    { path: "/test", component: test },
    { path: "/aiChat", component: aiChat },
    { path: "/login", component: login },
  ],
});

export default router;
