import request from "@/utils/request";
test("request", () => {
  expect(request).not.toBeNull();
  expect(request).not.toBeUndefined();
});
