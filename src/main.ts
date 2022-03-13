import { createApp } from "vue";
import App from "@/App.vue";
import "@/styles/index.scss";
import setup from "./setup";
import store from "@/utils/cacheStore";
import router from "./router/index";
// ElementPlus 相关
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
// 全局注册 ElementPlus icon
setup(app);
app.use(store).use(router).use(ElementPlus).mount("#app");
