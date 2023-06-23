<script setup>
const getData = defineProps(
    {
        data:{
            title:String,
            date:Date
        }
    }
)
</script>

<template>
    <div class="container">
    <div class="left">{{ data.title }}</div>
    <div class="right">{{ data.date }}</div>
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

.right {
    text-align: right;
}
</style>
