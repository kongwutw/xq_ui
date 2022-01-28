<template>
  <h1>Switch 开关</h1>
  <div class="preview-wrapper">
    <Preview :component="demo1" />
    <Preview :component="demo2" />
    <Preview :component="demo3" />
    <Doc title="属性" type="prop" :body="propDoc" />
    <PrevAndNext
      :prev="{ path: '/doc/radio', name: 'Radio 单选框' }"
      :next="{ path: '/doc/dialog', name: '对话框 Dialog' }"
    />
  </div>
</template>

<script setup lang="ts">
import PrevAndNext from "@/components/PrevAndNext.vue";
import Doc from "@/components/Doc.vue";
import Preview from "@/components/Preview.vue";
import demo1 from "./demo1.preview.vue";
import demo2 from "./demo2.preview.vue";
import demo3 from "./demo3.preview.vue";

const propDoc = [
  ["v-model", "绑定值", "boolean", "-", "false"],
  ["active-color", "在开启状态时的背景颜色", "string", "-", "#18a058"],
  ["inactive-color", "在关闭状态时的背景颜色", "string", "-", "#dbdbdb"],
  ["disabled", "是否禁用", "boolean", "-", "false"],
  ["size", "大小", "string", "small / default / large", "default"],
];
</script>

<style lang="scss">
.xq-switch {
  margin-right: 8px;
}
</style>
