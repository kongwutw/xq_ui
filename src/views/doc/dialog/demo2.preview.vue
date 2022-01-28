<preview>点击遮罩</preview>

<template>
  <xq-button theme="primary" @click="toggle">点击打开对话框</xq-button>
  <xq-dialog
    v-model="visible"
    :overlay-closable="false"
    @onOverlayClick="onOverlayClick"
  >
    我觉得用户应该聪明到点遮罩没用的时候就去点确认了。
  </xq-dialog>
</template>

<script setup lang="ts">
let visible = $ref(false);

const toggle = () => {
  visible = !visible;
};

const onOverlayClick = () => {
  console.log("我觉得用户应该聪明到点遮罩没用的时候就去点确认了。");
};
</script>
