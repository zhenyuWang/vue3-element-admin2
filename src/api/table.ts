import request from "@/utils/request";
import type { Method } from "@/types/request";
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
}): Promise<any> {
  return curryRequest("list1", "post", data);
}
// table 列表2
export function apiList2(data: {
  pageNo: number;
  pageSize: number;
}): Promise<any> {
  return curryRequest("list2", "post", data);
}
// 获取详情
export function apiItemInfo(data: { id: string }): Promise<any> {
  return curryRequest("itemInfo", "post", data);
}
