<script setup lang="ts">
import { reactive, watch,onMounted } from 'vue';
import { getStringResource } from '../lib/api';
import { useRoute } from 'vue-router';

const route = useRoute();
const contentData = reactive({
    value: ''
});

onMounted(async ()=>{
    contentData.value = await getStringResource("/content/" + route.params.table + "/" + route.params.blog);
})

watch(
    () => [route.params.table, route.params.blog],
    async ([table, blog]) => {
        contentData.value = await getStringResource("/content/" + table + "/" + blog);
    }
);


</script>

<template>
    <div class="area" v-html="contentData.value"></div>
</template>

<style scoped>
.area {
    overflow-wrap: break-word;
    width: 900px;
    height: 100%;
}

.area :deep(*) {
    max-width: 100%;
}
</style>
