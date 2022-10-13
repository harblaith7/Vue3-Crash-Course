<script setup lang="ts">
import {defineProps, ref} from "vue";
import { storeToRefs } from 'pinia'
import {AuthType} from "../../types"
import {useUserStore} from "../../stores/user"
const props = defineProps<{
  type: AuthType;
}>()
const userStore = useUserStore()
const {loading, errorMessage, user} = storeToRefs(userStore)

const password = ref("")
const username = ref("")
const email = ref("")

const visible = ref<boolean>(false);
  
const toggleModal = (value: boolean) => {
  visible.value = value;
};

const handleOk = async (e: MouseEvent) => {
  if(props.type === AuthType.LOGIN) await userStore.handleLogin(email.value, password.value)
  else await userStore.handleSignup(email.value, password.value, username.value);
  if(user){
    toggleModal(false)
  }
};
</script>

<template>
    <div>
      <a-button class="btn" type="primary" @click="toggleModal(true)">{{type}}</a-button>
      <a-modal v-model:visible="visible" :title="type" @ok="handleOk">
        <div v-if="!loading" class="input-container">
          <a-input v-if="type === AuthType.SIGNIN" v-model:value="username" placeholder="Username" class="input" />
          <a-input v-model:value="email" placeholder="Email" class="input" />
          <a-input v-model:value="password" placeholder="Password" type="password" class="input" />
        </div>
        <div v-else class="spinner">
          <a-spin/>
        </div>
        <a-typography-text v-if="errorMessage" type="danger">{{errorMessage}}</a-typography-text>
      </a-modal>
    </div>
  </template>


<style scoped>
.btn{
  margin-left: 10px;
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px
}

.input-container {
  height: 120px
}

.input {
  margin-top: 4px;
}
</style>


