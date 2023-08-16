<template>
  <div class="Overview">
    <CMenu default-active="/home" mode="horizontal">
      <div style="flex-grow: 1;"></div>
      <CMenuItem index="/home">主页</CMenuItem>
      <CMenuItem :index="`/document/${getFirstDocPath()}`">文档</CMenuItem>
      <CMenuItem index="/about">关于</CMenuItem>
      <div style="width: 100px;"></div>
    </CMenu>
    <div class="Main">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import CMenu from './components/Menu.vue'
import CMenuItem from './components/MenuItem.vue'
import { getFirstDocPath } from './lib/api'

</script>

<style scoped>
.Overview {
  width: 100%;
}

.Main {
  padding-top: 50px;
  height: 100%;
}

.CMenu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
}
</style>
