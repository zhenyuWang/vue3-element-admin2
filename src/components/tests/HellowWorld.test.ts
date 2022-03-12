import HelloWorld from "@/components/HelloWorld.vue";
import { mount } from "@vue/test-utils";

test("HelloWorld", () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: "hello,vue3",
    },
  });
  expect(wrapper.html()).toMatch("hello,vue3");
});
