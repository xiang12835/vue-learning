import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.less";

// import Button from "ant-design-vue/lib/button"; //优化，按需引入
// import "ant-design-vue/lib/button/style"; //优化，按需引入

import { Button } from "ant-design-vue";

Vue.config.productionTip = false;

// Vue.use(Antd); // Antd 有50多种组件，如果都引入，工程会很大
Vue.use(Button); //优化，按需引入

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
