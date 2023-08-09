<template>
  <div class="Document_View">
    <div class="Aside_Nav">
      <CMenu :default-active="`/document/${getFirstDocPath()}`">
        <div style="height: 15px;"></div>
        <div v-for="table in tables">
          <h2 class="Table_Title"> {{ table.name }}</h2>
          <CMenuItem v-for="blog in table.blogList" :key="blog.name" :index="`/document/${blog.path}`">
            {{ blog.name }}
          </CMenuItem>
          <div style="height: 10px;"></div>
        </div>
        <div style="height: 30px;"></div>
      </CMenu>
    </div>
    <div class="Main">
      <div class="Content">
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
import { getBlogTable, getBlogContent, getFirstDocPath } from '../lib/api';
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
    contentData.value = await getBlogContent(route.params.table as string, route.params.blog as string)
  },
);
</script>

<style scoped>
.Document_View {
  font-family: -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", sans-serif;
}

.Aside_Nav {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  width: 200px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px 0 0 30px;
  user-select: none;
}

.Table_Title {
  font-size: 20px;
  font-weight: 600;
  color: rgb(39, 27, 54);
  margin: 5px 0 7px 0;
}

.Main {
  padding-left: 230px;
}

.Content {
  padding: 10px 0 50px 40px;
}
</style>
