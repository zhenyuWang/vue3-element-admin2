import { foo } from "../foo";
test("1+1=2", () => {
  expect(1 + 1).toBe(2);
});
test("foo", () => {
  expect(foo()).toBe("foo");
});
