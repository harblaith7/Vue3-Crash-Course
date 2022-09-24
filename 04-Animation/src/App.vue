<script setup>
  import {RouterView, RouterLink} from "vue-router"
</script>

<template>
  <div>
    <!-- <Transition name="fade">
      <h1 v-if="showGreet">Hello</h1>
    </Transition>
    <button @click="showGreet = !showGreet">Greet</button> -->

    <!-- <Transition name="fade">
      <h1 v-if="showGreet" class="header">Hello</h1>
      <h1 v-else class="header">Goodbye</h1>
    </Transition>
    <button class="greet-btn" @click="showGreet = !showGreet">Greet</button> -->

    <div class="container">
      <div class="router-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/other">Other</RouterLink>
      </div>
      <Transition name="route" mode="out-in">
        <RouterView />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 300px;
    margin: 0 auto
  }
  
  .router-links {
    margin-bottom: 10px;
  }

  .router-links a {
    margin-right: 10px;
  }

/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out; 
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in; 
}
</style>