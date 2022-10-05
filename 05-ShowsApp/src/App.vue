<script setup>
  import BreakingBadCards from "./components/BreakingBadCardsSuspense.vue"
  import RickMortyCards from "./components/RickMortyCards.vue";
  import Hero from "./components/Hero.vue"
  import {ref} from "vue"

  const isBreakingBad = ref(true)
</script>

<template>
  <main>
    <Hero 
      :isBreakingBad="isBreakingBad"
      @selectShow="isBreakingBad = !isBreakingBad"
    />
    <KeepAlive>
      <Component :is="isBreakingBad ? BreakingBadCards : RickMortyCards"/>
    </KeepAlive>
  </main>
</template>

