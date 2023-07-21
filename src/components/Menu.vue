<template>
    <div :class="menuClass">
        <slot></slot>
    </div>
</template>
  
<script setup lang="ts">
import { onMounted, provide, ref, watch } from 'vue';
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

const menuClass = ref('CMenu');
const activeIndex = ref(props.defaultActive);

const handleMenuItemClick = (menuItem: {
    index: string,
    route?: string,
}) => {
    activeIndex.value = menuItem.index;
    console.log(activeIndex.value)
    const route = menuItem.route || menuItem.index;
    router.push(route);
}

watch(
    () => props.defaultActive,
    () => {
        activeIndex.value = props.defaultActive;
    }
)

onMounted(() => {
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
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    margin: 0;
    padding-left: 0;
    box-sizing: border-box;
}

.CMenu--horizontal {
    flex-direction: row;
    border-bottom: solid 1px rgb(205, 205, 205);
}   

.CMenu--vertical {
    flex-direction: column;
    border-right: solid 1px rgb(205, 205, 205);
}

.CMenu--vertical .CMenuItem {
    width: 100%;
}

.CMenu--horizonal .CMenuItem {
    height: 100%;
}
</style>