<template>
  <div v-if="info" class="Common-View">
    <h1 class="Content-Title">{{ info.frontMatter.title }}</h1>
    <div class="Content-Matter">
      <div v-if="info.frontMatter.author">作者：{{ info.frontMatter.author }}</div>
      <div v-else>作者：未知</div>
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

defineProps<{
  info?: Blog,
}>()

</script>

<style scoped>
.Common-View {
  overflow-wrap: break-word;
  width: 925px;
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

p {
  font-size: 16px;
  line-height: 1.7;
  font-family: -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", sans-serif;
  font-weight: 400;
  letter-spacing: .2px
}

pre {
  padding: 7px;
  font-size: 15px;
  background-color: rgb(249,249,249);
}
</style>