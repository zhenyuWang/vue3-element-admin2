import request from "@/utils/request"
import type { Method } from "@/types/request"

const curryRequest = (
  url: string,
  method: Method,
  data?: Record<string, unknown> | any
) => {
  return request(`/module/user/${url}`, method, data)
}

export function apiLogin(data: {
  name: string
  password: string
}): Promise<any> {
  return curryRequest("login", "post", data)
}

export function apiSignOut(): Promise<any> {
  return curryRequest("signOut", "post")
}
