<preview>
基础用法
</preview>

<template>
  <xq-switch v-model="checked" />
  <xq-switch v-model="checked" disabled />
</template>

<script setup lang="ts">
const checked = $ref(false);
</script>
