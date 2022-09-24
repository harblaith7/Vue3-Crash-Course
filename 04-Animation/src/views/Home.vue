<script setup>
    import {ref} from "vue"
  
    const newName = ref("")
    const names = ref([
      "Selena Swift", "Tony Marsino"
    ])
  
    const addInvitee = () => {
      names.value.unshift(newName.value)
      newName.value = ""
    }
  
    const removeName = (name) => {
      names.value = names.value.filter(n => n != name)
    }
  </script>

<template>
    <div>
        <input 
            type="text" 
            placeholder="Add a name..." 
            @keypress.enter="addInvitee"
            v-model="newName"
        >
        <TransitionGroup tag="ul" name="card" appear="">
            <li v-for="name in names" :key="name" @click="removeName(name)">
                {{name}}
            </li>
        </TransitionGroup>
    </div>
</template>


<style scoped>
    .fade-enter-from {
      opacity: 0
    }
  
    .fade-enter-to {
      opacity: 1
    }
  
    .fade-enter-active {
      transition: all 0.5s ease
    }
    .fade-leave-from {
      opacity: 1
    }
  
    .fade-leave-to {
      opacity: 0
    }
  
    .fade-leave-active {
      transition: all 0.5s ease
    }
  
    .header {
      position: absolute;
    }
  
    .greet-btn {
      margin-top: 50px;
    }
  
    /* NOTES */
  
    .container {
      max-width: 300px;
      margin: 0 auto
    }
  
    .container input {
      width: 100%;
      border-radius: 5px;
      border: 1px solid rgba(128, 128, 128, 0.132);
      padding: 10px 10px;
      margin-bottom: 20px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.122);
    }
  
    ul {
      display: inline;
      list-style: none;
      margin: 0px;
      padding: 0px;
    }
  
    li {
      list-style: none;
      width: 300px;
      border-radius: 5px;
      padding: 5px 10px;
      margin-top: 10px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.122);
      text-align: center;
      cursor: pointer;
    }
  
    .card-enter-from {
      opacity: 0;
      transform: scale(0.6)
    }
    .card-enter-to {
      opacity: 1;
      transform: scale(1);
    }
    .card-enter-active {
      transition: all 0.4s ease;
    }
  
    .card-leave-from {
      opacity: 1;
      transform: scale(1);
    }
    .card-leave-to {
      opacity: 0;
      transform: scale(0.6)
    }
    .card-leave-active {
      transition: all 0.4s ease;
      position: absolute;
    }
  
    .card-move {
      transition: all 0.3s ease;
    }
  </style>
  