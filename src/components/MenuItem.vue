<template>
    <li :class="[active, menuItemClass]" @click="handleClick">
        <slot></slot>
    </li>
</template>
  
<script setup lang="ts">
import { ref, computed, inject } from 'vue';
import { rootMenuType } from '../interfaces/menuTypes'

const menuItemClass = ref('CMenuItem');
const rootMenu = inject<rootMenuType>('rootMenu') as rootMenuType;

const props = defineProps({
    index: {
        type: String,
        default: '',
    },
    route: {
        type: String,
        default: '',
    }
});

const active = computed(() => {
    return props.index === rootMenu?.activeIndex.value ? 'active' : '';
});

const handleClick = () => {
    rootMenu.handleMenuItemClick({
        index: props.index,
        route: props.route,
    });
}   
</script>
  
<style scoped>
.CMenuItem {
    position: relative;
    cursor: pointer;
    padding: 15px;
    user-select: none;
}

.active {
    color:rgb(18,188,121);
}
</style>
  