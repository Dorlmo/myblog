<script setup>
const getData = defineProps(
    {
        blogInfo:{
            date:Date,
            title:String,
            dir:String
        }
    }
)
</script>

<template>
    <div class="container">
    <div class="left">{{ blogInfo.title }}</div>
  </div>
</template>

<style scoped>
.container {
      border: 1px solid black;
      border-radius: 1px;
      padding: 7px;
      margin: 7px;
      display: flex;
      justify-content: space-between;
}
.container:hover{
    color:dodgerblue;
}
.left {
    text-align: left;
}
</style>
