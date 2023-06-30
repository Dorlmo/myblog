<script setup>
import  getBlogList  from '../assets/dataget/ListGetter'
import { ref } from 'vue';

const blogList = ref();

</script>

<template>
  <Card v-for="( data , index ) in blogList" :key="index" :data="data"></Card>
</template>

<style scoped>


</style>
