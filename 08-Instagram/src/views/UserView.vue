<script setup lang="ts">
import Container from "../components/UI/container.vue"
import UserBar from "../components/UserBar/UserBar.vue"
import UserProfile from "../components/UserProfile/UserProfile.vue"
import {supabase} from "../supabase"
import {onMounted, ref} from "vue"
import {useRoute} from "vue-router"

const route = useRoute()
const user = ref(null)
const images = ref(null)


const {username} = route.params

onMounted(async () => {
  console.log({username})
  const {data: userData, error} = await supabase.from("users")
    .select()
    .eq('username', username)
    .single();

  if(userData){
    user.value = userData
    const {data: imageData, error: errorPosts} = await supabase.from("posts").select().eq('ownerId', userData.id)
    images.value = imageData
  }
  console.log({userData, error})
})
</script>

<template>
  <div class="about">
    <Container :styles="{paddingTop: '75px'}">
      <UserBar :profileUser="user"/>
      <UserProfile :images="images"/>
    </Container>
  </div>
</template>

<style>

</style>
