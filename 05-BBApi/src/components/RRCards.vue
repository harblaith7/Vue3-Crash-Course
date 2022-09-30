<script setup>
    import { useRickMorty } from "../composables/useRickMorty";
    import Card from "./Card.vue"

    const {characters, page} = useRickMorty()
</script>

<template>
    <div class="container">
        <div class="cards" v-if="characters">
            <Card 
                v-for="character in characters" 
                :key="character.char_id" 
                :img="character.image"
            >
                <h3>{{character.name}}</h3>
                <p>{{character.location.name}}</p>
            </Card>
        </div>
        <div v-else class="cards spinner">
            <NSpin size="large" />
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
        padding: 30px
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
</style>