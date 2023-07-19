<template>
  <div class="common-layout">
    <div class="aside_nav">
      <el-menu router>
        <div v-for="table in tables">
          <div>
            {{ table.tableName }}
          </div>
          <el-menu-item v-for="blog in table.blogList" :key="blog.name" :index=blog.name
            :route="getRoutePath('document', blog.path)">
            <div>{{ blog.name }}</div>
          </el-menu-item>
          <div style="height: 20px;"></div>
        </div>
      </el-menu>
    </div>
    <div class="main">
      <div class="content">
        <blog v-if="contentData" :info="contentData"></blog>
        <div v-else>加载中。。。。</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMenu, ElMenuItem } from 'element-plus';
import blog from '../components/Blog.vue'
import { onMounted, watch, ref, Ref } from 'vue';
import { useRoute } from 'vue-router';
import { getBlogTable, getBlogContent } from '../lib/api';
import { getRoutePath } from '../lib/getRoute'
import type { BlogTable, Blog } from '../interfaces/blogDataTypes.ts'


const tables: Ref<BlogTable[]> = ref() as Ref<BlogTable[]>;
const contentData: Ref<Blog> = ref() as Ref<Blog>;
const route = useRoute();

onMounted(async () => {
  tables.value = getBlogTable();
  contentData.value = await getBlogContent(route.params.table as string, route.params.blog as string) as Blog;
})

watch(
  () => [route.params.table, route.params.blog],
  async () => {
    contentData.value = await getBlogContent(route.params.table as string, route.params.blog as string) as Blog;
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
  padding: 40px 0 96px 96px;
}
</style>
