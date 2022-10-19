<script setup>
import {RouterLink, useRouter} from "vue-router"
import Container from "./Container.vue"
import AuthModal from "./AuthModal.vue"
import {useUserStore} from "../stores/users"
import {ref} from "vue"
import { storeToRefs } from "pinia"

const userStore = useUserStore()

const {user, loadingUser} = storeToRefs(userStore)
const router = useRouter()
const searchUsername = ref("")

const onSearch = () => {
    if(searchUsername.value){
        router.push(`/profile/${searchUsername.value}`);
        searchUsername.value = ""
    }
}

const handleLogout = async () => {
    await userStore.handleLogout()
}

const goToUsersProfile = () => {
    console.log(user)
    router.push(`/profile/${user.value.username}`)
}
</script>

<template>
    <ALayoutHeader>
        <Container>
            <div class="nav-container">
                <div class="right-content">
                    <RouterLink to="/">Instagram</RouterLink>
                    <AInputSearch
                        v-model:value="searchUsername"
                        placeholder="username..."
                        style="width: 200px"
                        @search="onSearch"
                    />
                </div>
                <div class="content" v-if="!loadingUser">
                    <div class="left-content" v-if="!user">
                        <AuthModal :isLogin="false"/>
                        <AuthModal :isLogin="true"/>
                    </div>
                    <div class="left-content" v-else>
                        <AButton type="primary" @click="goToUsersProfile">Profile</AButton>
                        <AButton type="primary" @click="handleLogout">Logout</AButton>
                    </div> 
                </div>
            </div>
        </Container>
    </ALayoutHeader>
</template>

<style scoped>
.nav-container {
    display: flex;
    justify-content: space-between;
}

.content {
    display: flex;
    align-items: center;
}

.right-content {
    display: flex;
    align-items: center;
}

.right-content a {
    margin-right: 10px;
}

.left-content {
    display: flex;
    align-items: center;
}

.left-content button {
    margin-left: 10px;
}
</style>