<preview>自定义颜色</preview>

<template>
  <xq-switch v-model="checked" active-color="red" inactive-color="pink" />
</template>

<script setup lang="ts">
const checked = $ref(false);
</script>
