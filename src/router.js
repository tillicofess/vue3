import { createRouter, createWebHistory } from "vue-router";
import test from "@/components/test.vue";
import deFault from "@/components/views/default.vue";
import aiChat from "@/components/views/aiChat.vue";
import login from "@/components/views/login.vue";
import tutorialChat from "@/components/views/tutorial/chat.vue";
import setting from "@/components/views/setting.vue";
import data from "@/components/views/data.vue"
// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: deFault },
    { path: "/test", component: test },
    { path: "/aiChat", component: aiChat },
    { path: "/login", component: login },
    { path: "/tutorialChat", component: tutorialChat },
    { path: "/setting", component: setting },
    { path: "/data", component: data },
  ],
});

export default router;
