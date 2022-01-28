import "@/lib/xq.scss";
import "@/assets/css/index.scss";
import "github-markdown-css";

import XqUi from "@/lib/index";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(XqUi);

app.mount("#app");
