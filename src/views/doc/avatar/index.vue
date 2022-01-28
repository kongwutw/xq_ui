<template>
  <div class="avatar-doc-wrapper">
    <h1>Avatar 头像</h1>
    <div class="preview-wrapper">
      <Preview :component="demo1" />
      <Preview :component="demo2" />
      <Doc title="属性" type="prop" :body="propsDoc" />
      <Doc title="事件" type="event" :body="eventDoc" />
      <Doc title="插槽" type="slot" :body="slotDoc" />
      <PrevAndNext
        :prev="{ path: '/doc/get-started', name: '快速使用' }"
        :next="{ path: '/doc/button', name: '按钮 Button' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";
import Avatar from "@/lib/avatar/index.vue";
import Preview from "@/components/Preview.vue";
import demo1 from "./demo1.preview.vue";
import demo2 from "./demo2.preview.vue";

const propsDoc = [
  [
    "icon",
    "设置头像的大小",
    "number / string",
    "number / large / default /small",
    "default",
  ],
  ["shape", "设置头像的形状", "string", "circle / square", "circle"],
  ["src", "图片头像的资源地址", "string", "-", "-"],
  ["alt", "描述图像的替换文本", "string", "-", "-"],
];
const eventDoc = [
  [
    "error",
    "图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为",
    "(e: Event)",
  ],
];
const slotDoc = [["default", "自定义头像展示内容"]];
</script>

<style lang="scss">
.avatar-doc-wrapper {
  .xq-avatar {
    margin-right: 8px;
    margin-top: 8px;
  }
}
</style>
