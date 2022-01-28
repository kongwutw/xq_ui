<template>
  <h1>Dialog 对话框</h1>
  <div class="preview-wrapper">
    <Preview :component="demo1" />
    <Preview :component="demo2" />
    <Doc title="属性" type="prop" :body="propDoc" />
    <Doc title="插槽" type="slot" :body="slotDoc" />
    <Doc title="事件" type="event" :body="eventDoc" />
    <PrevAndNext
      :prev="{ path: '/doc/switch', name: 'Switch 开关 ' }"
    />
  </div>
</template>

<script setup lang="ts">
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";
import Preview from "@/components/Preview.vue";
import demo1 from "./demo1.preview.vue";
import demo2 from "./demo2.preview.vue";

const propDoc = [
  ["v-model", "绑定值", "boolean", "-", "flase"],
  ["overlay", "是否需要背景遮罩", "boolean", "-", "true"],
  ["title", "标题", "string", "-", "标题"],
  [
    "overlay-closebale",
    "是否可以通过点击overlay关闭对话框",
    "boolean",
    "-",
    "true",
  ],
];

const slotDoc = [
  ["-", "Dialog 的内容"],
  ["title", "Dialog 标题区的内容"],
  ["footer", "Dialog 按钮操作区的内容"],
];

const eventDoc = [
  ["confirm", "点击确认按钮的回调", "-"],
  ["cancel", "点击取消按钮的回调", "-"],
  ["onOverlayClick", "点击遮罩的回调", "-"],
];
</script>