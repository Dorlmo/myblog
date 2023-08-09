<template>
  <div v-if="info" class="Common-View">
    <h1 class="Content-Title">{{ info.frontMatter.title }}</h1>
    <div class="Content-Matter">
      <div v-if="info.frontMatter.publishTime">发布时间：{{ info.frontMatter.publishTime }}</div>
      <div v-else>发布时间：未知</div>
    </div>
    <div class="Content-Word" v-html="info.content"></div>
    <div style="height: 25px;"></div>
    <div v-if="info.frontMatter.tags" class="Content-Tail">标签：{{ info.frontMatter.tags?.join(',') }}</div>
  </div>
  <div v-else>
    <div>
      加载中。。。。。
    </div>
  </div>
</template>

<script setup lang="ts">
import { Blog } from '../interfaces/blogDataTypes';
import 'highlight.js/styles/atom-one-dark.css'

defineProps<{
  info?: Blog,
}>()

</script>

<style scoped>
.Common-View {
  overflow-wrap: break-word;
  width: 875px;
  max-width: 100%;
  height: 100%;
}

.Common-View :deep(*) {
  max-width: 100%;
}

.Content-Title {
  margin: 20px 0 20px 0;
}

.Content-Matter {
  font-size: 14px;
  color: gray;
}

.Content-Word{
  font-size: 16px;
}

.Content-Tail {
  font-size: 14px;
}
</style>

<style>
h1 {
  font-family: Arial;
  color: rgb(41, 24, 37);
  font-size: 35px;
  font-weight: 600;
}

h2 {
  font-family: Arial;
  color: rgb(41, 24, 37);
  font-size: 25px;
  font-weight: 600;
}

pre {
  overflow: auto;
  border-radius: 4px;
  padding: 15px 0 15px 17px;
}
</style>