import { createStore } from "vuex";
import getters from "./getters";
import user from "./modules/user";
import permission from "./modules/permission";
import tagsView from "./modules/tagsView";
import setting from "./modules/setting";

const modules: any = {
  user,
  permission,
  tagsView,
  setting,
};
const store = createStore({
  modules,
  getters,
});
export default store;
