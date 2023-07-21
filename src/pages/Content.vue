<template>
  <div class="common-layout">
    <div class="aside_nav">
      <CMenu :default-active="getRoutePath('document/' + getFirstDocPath())">
        <div v-for="table in tables">
          <div>
            {{ table.tableName }}
          </div>
          <CMenuItem v-for="blog in table.blogList" :key="blog.name" :index="getRoutePath('document', blog.path)">
            {{ blog.name }}
          </CMenuItem>
          <div style="height: 20px;"></div>
        </div>
      </CMenu>
    </div>
    <div class="main">
      <div class="content">
        <blog :info="contentData"></blog>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CMenu from '../components/Menu.vue'
import CMenuItem from '../components/MenuItem.vue'
import blog from '../components/Blog.vue'
import { onMounted, watch, ref, Ref } from 'vue';
import { useRoute } from 'vue-router';
import { getBlogTable, getBlogContent,getFirstDocPath } from '../lib/api';
import { getRoutePath } from '../lib/getRoute'
import type { BlogTable, Blog } from '../interfaces/blogDataTypes.ts'


const tables: BlogTable[] = getBlogTable();
const contentData: Ref<Blog> = ref() as Ref<Blog>;
const route = useRoute();

onMounted(async () => {
  contentData.value = await getBlogContent(route.params.table as string, route.params.blog as string) as Blog;
})

watch(
  () => [route.params.table, route.params.blog],
  async () => {
    contentData.value = { content: '', frontMatter: {} }
    contentData.value = await getBlogContent(route.params.table as string, route.params.blog as string)
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
  padding: 20px 0 96px 96px;
}
</style>
