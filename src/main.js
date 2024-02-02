import { createApp } from "vue";
import "./main.css";
import App from "./App.vue";
import router from "./router";
import i18n from "../i18n";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoKoding } from "oh-vue-icons/icons";
import { store } from '/store.js';

addIcons(CoKoding);

createApp(App)
  .component("VIcon", OhVueIcon)
  .use(i18n)
  .use(router)
  .mount("#app");

router.beforeEach((to, from, next) => {
  // 在路由变化时关闭 Modal
  const delay = 50; // 毫秒，根据实际情况调整
  setTimeout(() => {
    // 在路由变化时关闭 Modal
    store.show = false;
  }, delay);
  next();
});