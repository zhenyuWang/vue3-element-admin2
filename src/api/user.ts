import request from "../utils/request";
type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "purge"
  | "PURGE"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";
const curryRequest = (
  url: string,
  method: Method,
  data?: Record<string, unknown> | any
) => {
  return request(`/module/user/${url}`, method, data);
};
// 登录
export function apiLogin(data: {
  name: string;
  password: string;
}): PromiseLike<any> {
  return curryRequest("login", "post", data);
}
// 退出登录
export function apiSignout(): PromiseLike<any> {
  return curryRequest("signout", "post");
}
