<script setup lang="ts">
import {ref} from "vue"

const guess = ref("")

</script>

<template>
  <main>
    <h1>Guess my Favorite Number</h1>
    <input v-model="guess">
    <h2 v-if="guess === 27">YOU GOT IT!!!</h2>
  </main>
</template>
