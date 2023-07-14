<script setup lang="ts">
import { ElMenu, ElMenuItem } from 'element-plus';
import { onMounted, ref, Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { BlogTable } from '../script/content'
import data from '../assets/data/blogTable.json';
const tables: Ref<BlogTable[]> = ref();

onMounted(() => {
  tables.value = data;
  const route = useRoute();
  const router = useRouter();
  if(!(route.params.table||route.params.blog)){
    router.push({name:'content',params:{table:tables.value[0].tableName,blog:tables.value[0].list[0]}});
  }
})

function getRoutePath(tableName: string, blogName: string): string {
  return "/content/" + tableName + "/" + blogName;
}

</script>

<template>
  <div class="common-layout">
    <div class="aside_nav">
      <el-menu router>
        <div v-for="table in tables">{{ table.tableName }}
          <el-menu-item v-for="blog in table.list" :key="blog" :index="blog" :route="getRoutePath(table.tableName, blog)">
            <div>{{ blog }}</div>
          </el-menu-item>
          <div style="height: 20px;"></div>
        </div>
      </el-menu>
    </div>
    <div class="main">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aside_nav {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  width: 200px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px;
}

.main {
  padding-left: 200px;
}

.content {
  padding: 64px 0 96px 96px;
}
</style>
