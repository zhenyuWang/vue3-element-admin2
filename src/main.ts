import { createApp } from "vue";
import App from "@/App.vue";
import "@/styles/index.scss";
import store from "@/utils/cacheStore";
import router from "./router/index";
// Element3相关
import "element3/lib/theme-chalk/index.css";
import {
  ElIcon,
  ElButton,
  ElLink,
  ElForm,
  ElFormItem,
  ElInput,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElAside,
  ElContainer,
  ElHeader,
  ElMain,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
} from "element3";

createApp(App)
  .use(store)
  .use(router)
  .use(ElIcon)
  .use(ElButton)
  .use(ElLink)
  .use(ElForm)
  .use(ElFormItem)
  .use(ElInput)
  .use(ElMenu)
  .use(ElSubmenu)
  .use(ElMenuItem)
  .use(ElMenuItemGroup)
  .use(ElAside)
  .use(ElContainer)
  .use(ElHeader)
  .use(ElMain)
  .use(ElTable)
  .use(ElTableColumn)
  .use(ElPagination)
  .use(ElBreadcrumb)
  .use(ElBreadcrumbItem)
  .use(ElDropdown)
  .use(ElDropdownMenu)
  .use(ElDropdownItem)
  .use(ElAvatar)
  .mount("#app");
