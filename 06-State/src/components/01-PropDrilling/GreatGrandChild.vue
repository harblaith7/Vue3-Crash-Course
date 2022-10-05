<script setup>
    import {defineProps} from "vue"

    const {ages} = defineProps(["ages"])
</script>

<template>
    <div>
        <h1>GreatGrandChild Component</h1>
        <ul>
            <li v-for="age in ages">{{age}}</li>
        </ul>
    </div>
</template>