# 快速使用
请先[安装](#/doc/install)本组件库。

### 完整引入
```javascript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";

import XqUI from "xq-ui";
import "xq-ui/dist/lib/xq-ui.css";

const app = createApp(App);

app.use(XqUI);
app.mount("#app");
```

### 引入某个组件
```javascript
import { XqButton } from "xq-ui";
import "xq-ui/dist/lib/xq-ui.css";
```

完成引入就可以使用我提供的组件啦。
#### Vue 单文件组件
代码示例：

```html
<template>
  <xq-button>按钮</xq-button>
</template>
```

下一节：[Avatar 头像](#/doc/avatar)