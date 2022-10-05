<script setup>
    import axios from "axios"
    import { ref, watch } from "vue";
    import Card from "./Card.vue"

    const characters = ref(null);
    const page = ref(0)

    const response = await axios.get("https://www.breakingbadapi.com/api/characters?limit=8");
    characters.value = response.data;
    console.log(characters.value)
    watch(page, async () => {
        const res = await axios.get(`https://www.breakingbadapi.com/api/characters?limit=8&offset=${page.value * 8}`);
        characters.value = res.data;
    })
    

</script>

<template>
    <div class="container">
        <div class="cards">
            <Card 
                v-for="character in characters"
                :key="character.char_id"
                :image="character.img"
                :name="character.name"
            >
                <div class="jobs">
                    <p v-for="(job, index) in character.occupation" :key="job">
                        {{job}}<span v-if="index < character.occupation.length - 1">,&nbsp</span>
                    </p>
                </div>
            </Card>
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
    height: 700px
}
.cards h3 {
    font-weight: bold;
}
.cards p {
    font-size: 10px;
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

p {
    font-size: 10px;
}

.jobs {
    display: flex;
    flex-wrap: wrap;
}

</style>