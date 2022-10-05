<script setup>
    import Child from "./Child.vue"
    import useAges from "../../composables/useAges"

    const { filterAges, addAge } = useAges()
</script>

<template>
    <div>
        <h1>Parent Component</h1>
        <ul>
            <li v-for="age in filterAges(1)">{{age}}</li>
        </ul>
        <button @click="addAge(33)">Add Age</button>
        <div class="newline"></div>
        <Child />
    </div>
</template>