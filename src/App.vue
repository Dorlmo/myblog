<template>
  <div class="overview">
    <el-menu :default-active="activeIndex" router mode="horizontal" :ellipsis="false">
      <div class="flex-grow"></div>
      <el-menu-item index="home" :route="getRoutePath('home')">主页</el-menu-item>
      <el-menu-item index="document" :route="getRoutePath('document/' + getFirstDocPath())">文档</el-menu-item>
      <el-menu-item index="about" :route="getRoutePath('about')">关于</el-menu-item>
      <el-menu-item index="test" :route="getRoutePath('test')">测试</el-menu-item>
      <div style="width: 50px"></div>
    </el-menu>
    <div class="main">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ElMenu, ElMenuItem } from 'element-plus';
import { ref } from 'vue';
import { getRoutePath } from './lib/getRoute'
import { getFirstDocPath } from './lib/api'

const activeIndex = ref('home');

</script>

<style scoped>
.el-header {
  height: 60px;
}

.el-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
}

.overview {
  width: 100%;
}

.main {
  padding-top: 50px;
  height: 100%;
}

.flex-grow {
  flex-grow: 1;
}
</style>
