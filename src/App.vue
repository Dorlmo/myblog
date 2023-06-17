<script setup>
</script>

<template>
  <div class="overview">
    <div class = "pageview">
      <div class = "aside_nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div class = "content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overview{
  display: flex;
  justify-content: center;
}

.overview::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url('./assets/images/bg_1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
  opacity: 0.5;
}

.pageview{
  width: 1080px;
  height:100%;
  display: flex;
  flex-direction: row;
  border: 1px solid;
  border-color: black;
  background-color: azure;
}

.aside_nav{
  display: flex;
  flex-direction: column;
}

</style>
