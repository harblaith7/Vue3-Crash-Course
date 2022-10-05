<script setup>
    import axios from "axios"
    import { watch, ref, onMounted } from "vue";
    import Card from "./Card.vue"


    const characters = ref(null)
    const page = ref(1)

    onMounted(async () => {
        const response = await axios.get("https://rickandmortyapi.com/api/character")
        console.log(response)
        characters.value = response.data.results
    })

    watch(page, async () => {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page.value}`);
        characters.value = res.data.results;
    })

</script>

<template>
    <div class="container">
        <div v-if="characters" class="cards">
            <Card 
                v-for="character in characters"
                :key="character.id"
                :image="character.image"
                :name="character.name"
            >
                <p>{{character.location.name}}</p>
            </Card>
        </div>
        <div v-else class="cards spinner">
            <NSpin size="large"/>
        </div>
        <div class="button-container">
            <button @click="page--">&lt</button>
            <button @click="page++">></button>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: rgb(27, 26, 26);
    padding: 30px;
    margin-top: 100px;
}
.cards {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    
}
.cards h3 {
    font-weight: bold;
}
.cards p {
    font-size: 10px;
}
.jobs {
    display: flex;
    flex-wrap: wrap;
}
.button-container {
    display: flex;
    justify-content: center;
    padding-top: 30px
}
.button-container button {
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;
}
.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>