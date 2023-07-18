<template>
  <div class="common-layout">
    <div class="aside_nav">
      <el-menu router>
        <div v-for="table in tables">
          <div>
            {{ table.tableName }}
          </div>
          <el-menu-item v-for="blog in table.list" :key="blog.name" :index=blog.name
            :route="getRoutePath('document', blog.path)">
            <div>{{ blog.name }}</div>
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

<script setup lang="ts">
import { ElMenu, ElMenuItem } from 'element-plus';
import { onMounted, watch, ref, Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getStringResource } from '../lib/api';
import { getRoutePath } from '../lib/getRoute'
import { BlogTable } from '../script/content'
import data from '../assets/data/blogTable.json';

const tables: Ref<BlogTable[]> = ref() as Ref<BlogTable[]>;
const contentData = ref();
const route = useRoute();

async function fetchData(): Promise<void> {
  const { table, blog } = route.params;
  contentData.value = await getStringResource(getRoutePath('content', table as string, blog as string));
}

onMounted(() => {
  tables.value = data;
  const router = useRouter();
  if (route.params.table && route.params.blog) {
    fetchData();
  }
  else {
    router.replace({ path: 'document/' + tables.value[0].list[0].path });
  }
})

watch(
  () => [route.params.table, route.params.blog],
  async () => {
    await fetchData();
  },
);
</script>

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
  max-width: 100%;
  height: 100%;
}

.doc :deep(*) {
  max-width: 100%;
}
</style>
