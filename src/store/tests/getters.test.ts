import userInfo from "../getters";

test("userInfo", () => {
  expect(userInfo).not.toBeNull();
  expect(userInfo).not.toBeUndefined();
});
