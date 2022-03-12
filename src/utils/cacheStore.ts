import store from "@/store";
//在页面加载时读取sessionStorage里的状态信息
const sessionStore = sessionStorage.getItem("store");
if (sessionStore) {
  store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStore)));
  store.dispatch("permission/handleRoutes", null, { root: true });
}

//在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("store", JSON.stringify(store.state));
});
export default store;
