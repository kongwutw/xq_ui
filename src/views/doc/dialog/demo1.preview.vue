<preview>基础用法</preview>

<template>
  <xq-button theme="primary" @click="toggle">点击打开对话框</xq-button>
  <xq-dialog v-model="visible" />
</template>

<script setup lang="ts">
let visible = $ref(false);

const toggle = () => {
  visible = !visible;
};
</script>
