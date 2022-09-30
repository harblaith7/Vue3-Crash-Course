<script setup>
    const {img} = defineProps(["img"])
</script>

<template>
    <NCard size="small">
        <template #cover>
            <img :src="img" alt="">
        </template>
        <slot></slot> 
    </NCard>
</template>

<style scoped>
    .n-card {
        width: 200px;
        margin:10px 20px;
    }

    .n-card img {
        height: 250px
    }
</style>