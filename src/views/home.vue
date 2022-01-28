<template>
  <div>
    <ComHeader :toggleMenuButton="false" />
    <div class="content-wrap">
      <h1>XQ UI</h1>
      <p style="margin: 50px 0;">一个基于 vite 构建的 Vue3 组件库~</p>
      <xq-button @click="handleClick" theme="primary">开始上手</xq-button>
    </div>
  </div>
</template>

<script lang="ts" setup name="home">
import ComHeader from "@/components/ComHeader.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const handleClick = () => {
  router.push({ name: "doc" });
};
</script>

<style lang="scss" scoped>
.content-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
}
</style>
