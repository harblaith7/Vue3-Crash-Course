<script setup>
    import Child from "./Child.vue"
    import {useAgesStore} from "../../pinia/useAges"

    const {filterAges, addAge} = useAgesStore()

</script>

<template>
    <div>
        <h1>Parent Component</h1>
        {{filterAges(15)}}
        <button @click="addAge(55)">Add Age</button>
        <div class="newline"></div>
        <Child />
    </div>
</template>