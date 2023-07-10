<template>
  <div class="overview">
    <el-container>
      <el-header>
        <el-menu
          :default-active="Home"
          router
          mode="horizontal"
          :ellipsis="false"
        >
          <div class="flex-grow"></div>
          <el-menu-item index="home">主页</el-menu-item>
          <el-menu-item index="index">文档</el-menu-item>
          <el-menu-item index="about">关于</el-menu-item>
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

<script setup>
import { RouterView } from 'vue-router';
import { ElContainer, ElMain, ElHeader, ElAside, ElMenu, ElMenuItem } from 'element-plus';
</script>


<style scoped>
.overview {
  height: 100%;
}

.flex-grow{
  flex-grow: 1;
}

</style>
