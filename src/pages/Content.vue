<script setup lang="ts">
import { ElMenu, ElMenuItem } from 'element-plus';
import { onMounted, watch, ref, Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { BlogTable } from '../script/content'
import { getStringResource } from '../lib/api';
import data from '../assets/data/blogTable.json';

const tables: Ref<BlogTable[]> = ref();
const contentData = ref();
const route = useRoute();

function getRoutePath(tableName: string, blogName: string): string {
  return "/content/" + tableName + "/" + blogName;
}

async function fetchData():Promise<void> {
  contentData.value = await getStringResource("/content/" + route.params.table + "/" + route.params.blog);
}

onMounted(() => {
  tables.value = data;
  const router = useRouter();
  if (!(route.params.table || route.params.blog)) {
    router.push({ name: 'content', params: { table: tables.value[0].tableName, blog: tables.value[0].list[0] } });
  }
  else{
    fetchData();
  }
})

watch(
  () => [route.params.table, route.params.blog],
  async () => {
    fetchData();
  }
);



</script>

<template>
  <div class="common-layout">
    <div class="aside_nav">
      <el-menu router>
        <div v-for="table in tables">
          <div>
            {{ table.tableName }}
          </div>
          <el-menu-item v-for="blog in table.list" :key="blog" :index="blog" :route="getRoutePath(table.tableName, blog)">
            <div>{{ blog }}</div>
          </el-menu-item>
          <div style="height: 20px;"></div>
        </div>
      </el-menu>
    </div>
    <div class="main">
      <div class="content">
        <div class="doc" v-html="contentData"></div>
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

.doc {
    overflow-wrap: break-word;
    width: 860px;
    height: 100%;
}

.doc :deep(*) {
    max-width: 100%;
}
</style>
