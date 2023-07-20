<template>
    <div :class="menuClass">
        <slot></slot>
    </div>
</template>
  
<script lang="ts">
import { onMounted, ref } from 'vue';
export default {
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
            if (props.mode !== 'horizonal') {
                menuClass.value += ' flex-column';
            }
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

.flex-column {
    flex-direction: column;
}
</style>