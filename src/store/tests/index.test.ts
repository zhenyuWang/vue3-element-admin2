import store from "../index";
test("store", () => {
  expect(store).not.toBeNull();
  expect(store).not.toBeUndefined();
});
