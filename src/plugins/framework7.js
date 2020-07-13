import Framework7 from "framework7/framework7-lite.esm.js";
import Framework7Vue from 'framework7-vue';
import {
  f7App,
  f7Page,
  f7PageContent,
  f7Navbar,
  f7Button,
  f7Block
} from "framework7-vue";

// Init plugin
Framework7.use(Framework7Vue)

const components = [
  f7App,
  f7Page,
  f7PageContent,
  f7Navbar,
  f7Button,
  f7Block
];

export default {
  install (Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    })
  }
}
