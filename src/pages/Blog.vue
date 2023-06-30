<script setup>
import { ref } from 'vue';

const blog = ref()

created(()=>{
  const id = this.$route.params.id;
  this.blog = getBlogById(id);
})

</script>

<template>
  <template></template>
</template>

<style scoped>
</style>
