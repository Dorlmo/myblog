<script setup lang="ts">
import { ElContainer, ElMain, ElAside, ElMenu, ElMenuItem } from 'element-plus';
import { onMounted, ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { BlogTable } from '../script/content'
import data from '../assets/data/blogTable.json';
const router = useRouter();
const tables: Ref<BlogTable[]> = ref();

onMounted(() => {
  tables.value = data;
})

function routeGo(tableName: string, blogName: string) {
  router.push({ name: 'content', params: { table: tableName, blog: blogName } });
}

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <el-menu v-for="table in tables">
          <div>{{ table.tableName }}</div>
          <el-menu-item v-for="blog in table.list" :key="blog" @click="()=>routeGo(table.tableName, blog)">
            <div>{{ blog }}</div>
          </el-menu-item>
          <div style="height: 20px;"></div>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
        <div style="height: 100px;"></div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
el-aside {
  width: 200px;
}
</style>
