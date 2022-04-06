import { createPinia } from "pinia"
// 使用 pinia 缓存插件
import piniaPluginPersist from "pinia-plugin-persist"

const store = createPinia()
store.use(piniaPluginPersist)

export default store
