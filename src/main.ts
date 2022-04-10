import { createApp } from "vue"
import App from "@/App.vue"
import "@/styles/index.scss"
import refreshHandleRoute from "@/utils/refreshHandleRoute"
import setup from "./setup"
import store from "./store"
import router from "./router/index"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

const app = createApp(App)
refreshHandleRoute().then(() => {
  setup(app)
  app.use(router).use(store).use(ElementPlus).mount("#app")
})
