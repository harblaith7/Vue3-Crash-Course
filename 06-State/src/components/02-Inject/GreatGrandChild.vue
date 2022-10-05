<script setup>
    import {inject} from "vue"

    const ages = inject("ages")

    const filterAges = (minAge) => {
        return ages.value.filter((age) => age >= minAge)
    }

    const addAge = (age) => {
        ages.value.push(age)
    }
</script>

<template>
    <div>
        <h1>GreatGrandChild Component</h1>
        <ul>
            <li v-for="age in filterAges(18)">{{age}}</li>
        </ul>
        <button @click="addAge(4)">Add Age</button>
    </div>
</template>