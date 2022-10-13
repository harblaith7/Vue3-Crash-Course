<script setup lang="ts">
import {defineProps} from "vue"

defineProps<{
    styles: {[key: string]: string | number};
}>()
</script>

<template>
    <div class="container" :style="styles">
        <slot></slot>
    </div>
</template>

<style scoped>
.container {
    width: 1000px;
    margin: 0 auto;
}

</style>
