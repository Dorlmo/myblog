<script setup>
import { ref } from 'vue';
const content = ref('');

</script>

<template>
    <div class = "blog" v-html="content"></div>
</template>

<style scoped>
.blog{
    width: 600px;
}
</style>