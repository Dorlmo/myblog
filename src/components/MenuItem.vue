<template>
    <a :class="menuItemClass" @click="handleClick">
        <slot></slot>
    </a>
</template>
  
<script lang="ts">
import { onMounted, ref } from 'vue';
export default {
    props: {
        item: {
            type: String,
            default: '',
        },
        active: {
            type: Boolean,
            default: false,
        },
        index: {
            type: String,
            default: '',
        },
        route: {
            type: String,
            default: '',
        }
    },
    methods: {
        handleClick() {
        }
    },
    setup(props) {
        const menuItemClass = ref('menu-item');
        onMounted(() => {

        });
        return {
            menuItemClass,
        }
    },
}
</script>
  
<style scoped>
.menu-item {
    cursor: pointer;
    padding: 15px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
}

.active {
    background-color: #ccc;
}
</style>
  