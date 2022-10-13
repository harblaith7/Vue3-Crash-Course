<script setup lang="ts">
import Card from "../Card/Card.vue"
import Container from "../UI/container.vue"
</script>

<template>
    <Container :styles="{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }">
        <Card />
        <Card />
    </Container>
</template>