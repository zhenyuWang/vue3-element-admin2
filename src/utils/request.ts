import axios from "axios"
import { ElMessage } from "element-plus"
import type { Method } from "@/types/request"
// 创建axios实例
// vite环境变量直接使用jest测试报错，所以绑定到window上
const service = axios.create({
  baseURL: process.env.VITE_BASE_API,
  timeout: 10000,
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.header.code !== 0) {
      ElMessage.error(res.header.msg || "Error")
      return Promise.reject(new Error(res.header.msg || "Error"))
    }
    return res
  },
  (error) => {
    ElMessage.error("错了哦，这是一条错误消息")
    return Promise.reject(error)
  }
)
/**
 * 封装接口请求方法
 * @param url 域名后需补齐的接口地址
 * @param method 接口请求方式
 * @param data data下请求数据体
 */
const request = (
  url: string,
  method: Method,
  data: Record<string, unknown>
) => {
  return service({
    url,
    method,
    data,
  })
}
export default request
