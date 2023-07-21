<template>
    <div>
        <cMenu>
            <cMenuItem :active="true">a</cMenuItem>
            <cMenuItem :route="'/home'">b</cMenuItem>
            <cMenuItem>c</cMenuItem>
            <cMenuItem>d</cMenuItem>
            <cMenuItem>e</cMenuItem>
        </cMenu>
    </div>
</template>

<script setup lang="ts">
import cMenu from '../components/Menu.vue'
import cMenuItem from '../components/MenuItem.vue'


</script>

<style scoped>
</style>
