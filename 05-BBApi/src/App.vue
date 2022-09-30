<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <!-- <Suspense> -->
    <!-- <template #default>

    </template>
    <template #fallback>
      Loading...
    </template> -->
  <!-- </Suspense> -->
  <RouterView />
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
