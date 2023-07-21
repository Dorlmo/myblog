<template>
    <div :class="menuClass">
        <slot></slot>
    </div>
</template>
  
<script lang="ts">
import { onMounted, ref } from 'vue';
export default {
    name:"CMenu",
    props: {
        mode: {
            type: String,
            values: ['vertical', 'horizonal'],
            default: 'vertical',
        },
        defaultActive: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const menuClass = ref('menu');
        onMounted(() => {
            if (props.mode === 'vertical') {
                menuClass.value += ' menu-vertical';
            }
            else menuClass.value += ' menu-horizonal';
        });
        return {
            menuClass,
        }
    },
}
</script>
  
<style scoped>
.menu {
    display: flex;
}

.menu-vertical {
    flex-direction: column;
}

.menu-horizonal{
    flex-direction: row;
}

.menu-vertical > .menu-item{
    background-color: aqua;
    width: 100%;
}

.menu-horizonal > .menu-item{
    background-color: blue;
    height: 100%;
}
</style>