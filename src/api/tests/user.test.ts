import { apiLogin } from "../user";
test("apiLogin", () => {
  expect(apiLogin).not.toBeNull();
  expect(apiLogin).not.toBeUndefined();
});
