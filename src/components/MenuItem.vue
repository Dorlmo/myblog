<template>
    <div :class="[active, menuItemClass]" @click="handleClick">
        <slot></slot>
    </div>
</template>
  
<script setup lang="ts">
import { ref, Ref, computed, inject, onMounted } from 'vue';
import { rootMenuType } from '../interfaces/menuTypes'

const menuItemClass: Ref<string> = ref('');

const rootMenu: rootMenuType = inject<rootMenuType>('rootMenu') as rootMenuType;

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

const handleClick = (): void => {
    rootMenu.handleMenuItemClick({
        index: props.index,
        route: props.route,
    });
}

onMounted(() => {
    menuItemClass.value = 'CMenuItem';

})
</script>
  
<style scoped>
.CMenuItem {
    display: flex;
    position: relative;
    cursor: pointer;
    user-select: none;
    font-size: 17px;
}

.CMenuItem:not(.active):hover {
  color: rgb(100, 100, 100);
} 

.active {
    color: rgb(18, 188, 121);
}

.CMenu--vertical .CMenuItem {
    width: 100%;
    padding: 6px 0px 6px 0px;
}

.CMenu--horizontal .CMenuItem {
    align-items: center;
    height: 100%;
    padding: 0 12px 0 12px;
}
</style>
  