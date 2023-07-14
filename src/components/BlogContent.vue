<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { getStringResource } from '../lib/api';
import { useRoute } from 'vue-router';

const route = useRoute();
const contentData = ref();

async function fetchData(){
    contentData.value = await getStringResource("/content/" + route.params.table + "/" + route.params.blog);
}

onMounted(fetchData)

watch(
    () => [route.params.table, route.params.blog],
    async () => {
        fetchData();
    }
);


</script>

<template>
    <div class="area" v-html="contentData"></div>
</template>

<style scoped>
.area {
    overflow-wrap: break-word;
    width: 860px;
    height: 100%;
}

.area :deep(*) {
    max-width: 100%;
}
</style>
