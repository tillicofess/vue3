import { createApp } from "vue";
import "./main.css";
import App from "./App.vue";
import router from "./router";
import i18n from "../i18n";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoKoding, BiGridFill, HiHome, HiBookOpen, HiPuzzle, HiCog, HiDesktopComputer } from "oh-vue-icons/icons";
import "./assets/style.css";
import axios from "axios";
addIcons(CoKoding, BiGridFill, HiHome, HiBookOpen, HiPuzzle, HiCog, HiDesktopComputer);

const app = createApp(App);
app.provide("$axios", axios);

app.component("VIcon", OhVueIcon).use(i18n).use(router).mount("#app");
