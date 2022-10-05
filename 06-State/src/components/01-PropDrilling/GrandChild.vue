<script setup>
    import GreatGrandChild from "./GreatGrandChild.vue"
    import {defineProps} from "vue"

    const {ages} = defineProps(["ages"])
</script>

<template>
    <div>
        <h1>GrandChild Component</h1>
        <div class="newline"></div>
        <GreatGrandChild :ages="ages" />
    </div>
</template>