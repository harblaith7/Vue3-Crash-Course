<script setup>
    import GrandChild from "./GrandChild.vue"
    import {defineProps} from "vue"

    const {ages} = defineProps(["ages"])
</script>

<template>
    <div>
        <h1>Child Component</h1>
        <div class="newline"></div>
        <GrandChild :ages="ages" />
    </div>
</template>