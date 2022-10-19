<script setup>
import Container from './Container.vue';
import Card from './Card.vue';
import Observer from "./Observer.vue"
import { ref } from 'vue';

const data = ref([
    {
        id: 1,
        username: "selena",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa8n4xN_NzBDHigVsfZhb_kT94DvHdC38jaq1tIg0tQiu9WiOm",
        caption: "i like pink"
    },
    {
        id: 2,
        username: "the weekend",
        url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/The_Weeknd_%28253662129%29.jpeg",
        caption: "hello guys"
    }
])

const handleScrolledToBottom = () => {
    console.log("sdas")
}

const visibilityChanged = () => {
    data.value.push(data.value[0])
    data.value.push(data.value[1])
}



</script>

<template>
    <Container>
        <div class="timeline-container">
            <Card 
                v-for="post in data" 
                :key="post.id" 
                :post="post"
            />
        </div>
        <Observer @intersect="visibilityChanged"/>
    </Container>
</template>

<style scoped>
.timeline-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
}
</style>
