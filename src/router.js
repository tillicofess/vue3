import { createRouter, createWebHistory } from "vue-router";
import test from "@/components/test.vue";
import deFault from "@/components/views/default.vue"
import aiChat from "@/components/views/aiChat.vue"
// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: deFault },
    { path: "/test", component: test },
    { path: "/aichat", component: aiChat }
  ],
});

export default router;
