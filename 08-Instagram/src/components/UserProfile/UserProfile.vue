<script setup lang="ts">
import {defineProps} from "vue"

const props = defineProps(['images'])
</script>

<template>
    <div class="container">
        <img class="image" v-for="image in props.images" :src="`https://dizucfoazxmpvsthwwps.supabase.co/storage/v1/object/public/${image.image}`" alt="">
  </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}
.image {
    margin: 5px;
    width: 200px;
}
</style>