<script setup lang="ts">
import {useUserStore} from "../../stores/user"
import { storeToRefs } from "pinia";
import {useRoute} from "vue-router"
import {computed, defineProps} from "vue"
import { supabase } from '../../supabase'
import UploadPhoto from '../UploadPhoto/UploadPhoto.vue'
import {onMounted} from "vue"

const props = defineProps(['profileUser'])
const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const route = useRoute()

const {username} = route.params

onMounted(async () => {
    console.log("wtf")
    console.log({sdasdasda: user.value.id, "proprewrwerew": props.profileUser.id})
    const {data, error} = await supabase.from("followings").select().eq("follower", user.value.id).eq("following", props.profileUser.id).single()
    console.log({lLSALDLASDLASDAS: data, error})
})

const isMyProfile = computed(() => {
    if(!user.value) return false;
    return user.value.username === username
})


</script>

<template>
    <div class="container">
        {{props.profileUser}}
        <div class="text-container">
            <div class="name-container">
                <a-typography-title :level="2">{{username}}</a-typography-title>
                <UploadPhoto v-if="isMyProfile"/>
                <a-button v-else>Follow</a-button>
            </div>
            <div class="stats-container">
                <a-typography-title :level="5">0 posts</a-typography-title>
                <a-typography-title :level="5">20 followers</a-typography-title>
                <a-typography-title :level="5">200 following</a-typography-title>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    padding-bottom: 75px
}

.text-container {

}

.stats-container {
    display: flex;
    align-items: center
}

.stats-container h5 {
    margin: 0;
    padding: 0;
    margin-right: 30px;
}

.name-container {
    display: flex;
}

.name-container input {
    margin-top: 3px;
    margin-left: 90px
}
</style>