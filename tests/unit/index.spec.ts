import foo from "./foo";
import { mount } from "@vue/test-utils";
// import Foo from "../../src/components/Foo.vue";
import Foo from "@/components/Foo.vue";
test("1+1=2", () => {
  expect(1 + 1).toBe(2);
});
test("foo", () => {
  expect(foo()).toBe("this is foo");
});
test("Foo", () => {
  console.log("Foo", Foo);
  console.log("mount", mount(Foo));
});
