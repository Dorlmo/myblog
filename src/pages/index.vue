<script setup>
  import Card from '../components/card.vue'
  import { getBlogList } from '../assets/dataget/BlogGetOffline'
  import { ref } from 'vue';

  const datas = ref(getBlogList())
</script>

<template>
  <TransitionGroup name="fade" tag="Card">
      <Card v-for="( data , index ) in datas" :key="index" :data="data"></Card>
  </TransitionGroup>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>
