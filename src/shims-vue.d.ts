declare module "*.vue" {
  import { defineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: defineComponent<{}, {}, any>;
  export default component;
}
