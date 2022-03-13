import { useUserStore } from "@/store/user";
test("userInfo", () => {
  const userInfo = useUserStore().userInfo;
  expect(userInfo).not.toBeNull();
  expect(userInfo).not.toBeUndefined();
});
