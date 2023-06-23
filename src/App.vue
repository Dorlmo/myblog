<template>
  <div class="overview">
    <el-container>
      <el-header></el-header>
        <el-container> 
        <el-aside>
          <!--  navigation menu  -->
          <div>
            <el-menu
              default-active="/home"
              router
              :default-active="$route.path"
            >
              <el-menu-item index="/home">
                <span>主页</span>
              </el-menu-item>
              <el-menu-item index="/index">
                <span>目录</span>
              </el-menu-item>
              <el-menu-item index="/search">
                <span>搜索</span>
              </el-menu-item>
              <el-menu-item index="/tags">
                <span>Tags</span>
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
.el-header{
  height: 50px;
}
.el-aside{
  width: 150px;
}

</style>
