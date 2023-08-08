import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// 引入Element icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 引入css
// import "./assets/css/el-global.css";
// import "./assets/css/constant.css";
// import "./assets/css/animations.css";
// import './assets/css/markdown-highlight.css'
// import './assets/prism/prism.css'
// import './assets/css/hljs.css'
// 解决Element plus消息提醒没有样式问题
import "element-plus/theme-chalk/el-message.css";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(createPinia());
app.use(router);

app.mount("#app");
