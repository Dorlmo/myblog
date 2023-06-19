<template>
  <div class="overview">
    <el-container> 
      <el-aside class="aside_nav">
        <!--  导航页头部的空白区域  -->
        <div style="height: 100px;"></div>
        <div>
          <el-menu
            default-active="/about"
            router
            :default-active="$route.path"
          >
            <el-menu-item index="/index">
              <span>主页</span>
            </el-menu-item>
            <el-menu-item index="/about">
              <span>关于</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';

</script>


<style scoped>
.overview{
  height: 100%;
}
.aside_nav{
  width: 150px;
}

</style>
