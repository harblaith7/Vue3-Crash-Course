<script setup>
    import Child from "./Child.vue"
    import {ref} from "vue"

    const ages = ref([14, 15, 16, 21, 22, 13, 19, 27, 25])
</script>

<template>
    <div>
        <h1>Parent Component</h1>
        <ul>
            <li v-for="age in ages">{{age}}</li>
        </ul>
        <div class="newline"></div>
        <Child :ages="ages"/>
    </div>
</template>