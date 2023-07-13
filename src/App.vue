<template>
  <div class="overview">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          router
          mode="horizontal"
          :ellipsis="false"
        >
          <div class="flex-grow"></div>
          <el-menu-item index="home">主页</el-menu-item>
          <el-menu-item index="content">文档</el-menu-item>
          <el-menu-item index="about">关于</el-menu-item>
          <el-menu-item index="test">测试</el-menu-item>
          <div style="width: 50px"></div>
        </el-menu>
      </el-header>
      <el-container>
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ElContainer, ElMain, ElHeader, ElMenu, ElMenuItem } from 'element-plus';
import { ref } from 'vue';
const activeIndex = ref('home');
</script>

<style scoped>
.overview {
  width: 100%;
}

.flex-grow{
  flex-grow: 1;
}
</style>
