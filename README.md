# xq-ui
一个 vue3 的中后台组件库。

## 使用
npm install @xqart/xq-ui

```javascript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";

import XqUI from "@xqart/xq-ui";
import "@xqart/xq-ui/dist/lib/xq-ui.css";

const app = createApp(App);

app.use(XqUI);
app.mount("#app");
```

## 开发
- npm install -g pnpm
- 运行 pnpm install
- 运行 pnpm start
- 打开 [http://127.0.0.1:9000](http://127.0.0.1:p000/)

## 更新官网
pnpm run site

## 更新组件库
pnpm run lib
npm login --registry https://registry.npmjs.org
npm publish --registry https://registry.npmjs.org