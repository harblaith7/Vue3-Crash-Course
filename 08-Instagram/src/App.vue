<script setup lang="ts">
import Nav from "./components/Nav/Nav.vue"
import {onMounted} from "vue"
import {useUserStore} from "./stores/user"
import {RouterView} from "vue-router"

const {getUser} = useUserStore()

onMounted(() => {
  getUser()
})
</script>

<template>
  <ALayout class="layout">
    <Nav />
    <RouterView />
  </ALayout>
</template>

<style>
.layout {
  background-color: white
}
</style>