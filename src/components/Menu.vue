<template>
    <div :class="menuClass">
        <slot></slot>
    </div>
</template>
  
<script setup lang="ts">
import { onMounted, provide, ref, Ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    mode: {
        type: String,
        values: ['vertical', 'horizontal'],
        default: 'vertical',
    },
    defaultActive: {
        type: String,
        default: '',
    },
});

const menuClass: Ref<string> = ref('');
const activeIndex: Ref<string> = ref('');

const handleMenuItemClick = (menuItem: {
    index: string,
    route?: string,
}): void => {
    activeIndex.value = menuItem.index;
    const route = menuItem.route || menuItem.index;
    router.push(route);
}

onMounted(() => {
    activeIndex.value = props.defaultActive;
    menuClass.value = 'CMenu';

    if (props.mode === 'vertical') {
        menuClass.value += ' CMenu--vertical';
    } else {
        menuClass.value += ' CMenu--horizontal';
    }
});

provide('rootMenu', {
    props,
    activeIndex,

    handleMenuItemClick,
})

</script>

  
<style scoped>
.CMenu {
    display: flex;
    flex-wrap: nowrap;
    box-sizing: border-box;
    background-color: white;
}

.CMenu--horizontal {
    align-items: center;
    flex-direction: row;
    min-width: 100%;
    border-bottom: solid 1px rgb(205, 205, 205);
}

.CMenu--vertical {
    flex-direction: column;
    min-height: 100%;
    border-right: solid 1px rgb(205, 205, 205);
}
</style>