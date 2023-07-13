<script setup lang="ts">
import { ref } from 'vue';
import { getStringResource } from '../lib/api';
const contentData = ref();

async function testHTML(path: string){
    contentData.value=await getStringResource(path);
}

</script>

<template>
    <button @click="testHTML('/content/test/1.html')">1</button>
    <button @click="testHTML('/content/test/2.html')">2</button>
    <button @click="testHTML('/content/test/3.html')">3</button>
    <div class="area" v-html="contentData"></div>
</template>

<style scoped>
.area {
    overflow-wrap: break-word;
    width: 1000px;
    height: 100%;
}

.area :deep(*){
  max-width: 100%;
}
</style>
