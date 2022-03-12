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
  data: Record<string, unknown>
) => {
  return request(`/module/table/${url}`, method, data);
};
// table 列表1
export function apiList1(data: {
  pageNo: number;
  pageSize: number;
}): PromiseLike<any> {
  return curryRequest("list1", "post", data);
}
// table 列表2
export function apiList2(data: {
  pageNo: number;
  pageSize: number;
}): PromiseLike<any> {
  return curryRequest("list2", "post", data);
}
// 获取详情
export function apiItemInfo(data: { id: string }): PromiseLike<any> {
  return curryRequest("itemInfo", "post", data);
}
