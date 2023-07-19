<template>
    <div class="common-view">
        <h1 class="content-title">{{ info.frontMatter.title }}</h1>
        <div class="content-matter">
        </div>
        <div v-html="info.content"></div>
    </div>
</template>

<script setup lang="ts">
import { Blog } from '../interfaces/blogDataTypes';

defineProps<{
    info:Blog
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
</style>