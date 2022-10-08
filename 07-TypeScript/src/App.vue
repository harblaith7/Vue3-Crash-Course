<script setup lang="ts">
import {computed, ref} from "vue"
import { GENDER, type Invities} from "./types";
import Card from "./components/Card.vue"

const invitees = ref<Invities[]>([])
const name = ref("")
const gender = ref(GENDER.MALE)

const handleClick = (): void => {
    if(name.value){
      invitees.value.push({
        id: Math.floor(Math.random() * 100000),
        name: name.value,
        gender: gender.value
      });
      name.value = "";
      gender.value = GENDER.MALE
    }
}

const count = computed<{
  female: number;
  male: number
}>(() => {
  return invitees.value.reduce((count, invitee) => {
    if(invitee.gender === GENDER.MALE) {
      return {
        ...count,
        male: count.male + 1,
      }
    }
    return {
        ...count,
        female: count.female + 1,
      }
  }, {female: 0, male: 0})
})
</script>

<template>
  <main>
    <div>
      <h1>People Invited to My Party</h1>
      <div class="input-container">
        <input type="text" v-model="name" placeholder="Name" @keypress.enter="handleClick"/>
        <select v-model="gender" @keypress.enter="handleClick">
          <option :value="GENDER.MALE">
            Male
          </option>
          <option :value="GENDER.FEMALE">
            Female
          </option>
        </select>
        <div class="cards">
          <Card v-for="invitee in invitees" :key="invitee.id" :invitee="invitee"/>
        </div>
        <div>
          <p>Females - {{count.female}}</p>
          <p>Males - {{count.male}}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;
  }

  input, select {
    width: 100%;
    padding: 5px;
    margin-bottom: 2px;
  }

</style>