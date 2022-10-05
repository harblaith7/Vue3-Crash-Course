<script setup>
    import Child from "./Child.vue"
    import {provide, ref} from "vue"

    const ages = ref([14, 15, 16, 21, 22, 13, 19, 27, 25])

    provide("ages", ages)

    const filterAges = (minAge) => {
        return ages.value.filter((age) => age >= minAge)
    }

    const addAge = (age) => {
        ages.value.push(age)
    }

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