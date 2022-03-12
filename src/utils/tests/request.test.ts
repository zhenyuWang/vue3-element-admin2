import request from "../request";
test("request", () => {
  expect(request).not.toBeNull();
  expect(request).not.toBeUndefined();
});
