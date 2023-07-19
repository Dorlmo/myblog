<template>
  <div class="common-view">
    <h1 class="content-title">{{ info.frontMatter.title }}</h1>
    <div class="content-matter">
      <div v-if="info.frontMatter.author">作者：{{ info.frontMatter.author }}</div>
      <div v-else>作者：未知</div>
      <div v-if="info.frontMatter.publishTime">作者：{{ info.frontMatter.publishTime }}</div>
      <div v-else>作者：未知</div>
      <div v-if="info.frontMatter.tags">标签：{{ info.frontMatter.tags?.join(',') }}</div>
    </div>
    <div v-html="info.content"></div>
  </div>
</template>

<script setup lang="ts">
import { Blog } from '../interfaces/blogDataTypes';

defineProps<{
  info: Blog
}>()

</script>

<style scoped>
.common-view {
  overflow-wrap: break-word;
  width: 860px;
  max-width: 100%;
  height: 100%;
}

.common-view :deep(*) {
  max-width: 100%;
}

.content-title {
  padding: 0, 0, 50px, 20px;
}
</style>