<script setup>
import BBCards from "../components/BBCards.vue"
import RRCards from "../components/RRCards.vue"
import Hero from "../components/Hero.vue"
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
      <Component :is="isBreakingBad ? BBCards : RRCards"/>
    </KeepAlive>
  </main>
</template>
