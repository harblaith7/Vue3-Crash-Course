<script setup>
import Profile from '../components/Profile.vue';
</script>

<template>
  <main>
    <Profile :key="$route.params.username"/>
  </main>
</template>
