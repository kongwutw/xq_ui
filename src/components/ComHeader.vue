<template>
  <div class="header-ctn">
    <div class="logo-wrap" @click="handleClick">
      <img src="https://img.yibiankeji.com/logo/p/pLogo.png" style="width: 30px; height: 30px;" alt="">
      <span>XQ UI</span>
    </div>
    <div class="menu-wrap">
      <router-link exact to="/">首页</router-link>
      <router-link to="/doc">文档</router-link>
      <a href="https://github.com/kongwutw/xq_ui" target="_blank">GitHub</a>
      <span>0.0.1</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const handleClick = () => {
  router.push({
    path: "/",
  });
};
</script>

<style lang="scss">
.header-ctn {
  height: 63px;
  background-color: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px rgb(239, 239, 245);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  .logo-wrap {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    > svg {
      width: 32px;
      height: 32px;
    }
    span {
      margin-left: 10px;
      color: rgb(31, 34, 37);
      cursor: pointer;
      font-size: 18px;
      line-height: 28px;
      height: 28px;
    }
    &:hover {
      border-bottom: none;
    }
  }

  .menu-wrap {
    a {
      display: inline-block;
      text-decoration: none;
      padding: 0 20px;
      height: 63px;
      line-height: 63px;

      &:hover,
      &:active {
        color: rgb(24, 160, 88);
      }
    }

    .router-link-active {
      color: rgb(24, 160, 88);
      border-bottom: 1px solid;
    }

    span {
      color: rgb(51, 54, 57);
      font-size: 14px;
    }
  }
}
</style>
