<script setup>
</script>

<template>
  <div class = "pageview">
    <h1>Hello App!</h1>
    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.pageview{
  align-content:center;
}
</style>
