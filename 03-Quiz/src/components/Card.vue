<script setup>
import {defineProps, defineEmits} from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()
const { quiz } = defineProps(['quiz'])

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`)
}
</script>

<template>
    <div class="card" @click="navigateToQuiz">
        <img :src="quiz.img">
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>15 questions</p>
        </div>
    </div>
</template>

<style scoped>
    .card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.116);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
  }

  .card img {
    width: 100%;
    margin: 0;
    height: 190px
  }

  .card .card-text {
    padding: 0 5px
  }

  .card .card-text h2 {
    font-weight: bold;
  }
</style>