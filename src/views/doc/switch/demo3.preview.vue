<preview>尺寸</preview>

<template>
  <xq-switch v-model="checked" size="small" />
  <xq-switch v-model="checked" size="default" />
  <xq-switch v-model="checked" size="large" />
</template>

<script setup lang="ts">
const checked = $ref(false);
</script>
