<template>
    <div>
      <a-button type="primary" @click="showModal">Open Modal</a-button>
      <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
        <input type="file" @change="handleUploadChange"/>
        <a-input v-model:value="caption" placeholder="Caption" :maxlength="50" />
      </a-modal>
    </div>
  </template>

<script setup lang="ts">
import {ref} from "vue"
import {supabase} from "../../supabase";
import {useUserStore} from "../../stores/user"
const visible = ref<boolean>(false);
const file = ref<any>(null)
const caption = ref("")
const {user} = useUserStore()
const showModal = () => {
    visible.value = true;
};

const handleOk = async (e) => {
    if(file.value){
        const fileName = Math.floor(Math.random() * 100000000000)
        const {data, error} = await supabase.storage.from("images").upload('public/' + fileName, file.value);
        console.log({data, error})
        if(data){
            console.log({
                ownerId: user.id,
                image: data['Key']
            })
            const lala = await supabase.from("posts").insert({
                ownerId: user.id,
                image: data['Key']
            })
            console.log({lala})
        }
    }
    
    visible.value = false;
};

const handleUploadChange = async (e: any) => {
    if(e.target.files){
        file.value = e.target.files[0]
    }

    // const {data, error} = await supabase.storage.from("images").upload('public/' + file.name, file)
} 

</script>

<style scoped>
input {
    margin-top: 10px;
}
</style>