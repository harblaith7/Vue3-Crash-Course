<script setup>
import quizes from "../data/quiz.json"
import {ref, onBeforeMount} from "vue"
import {useRoute} from "vue-router"
import Question from "../components/Question.vue"

const route = useRoute();

const quiz = ref()
const currentQuestion = ref(0)
const numberOfCorrectAnswers= ref(0)
const showResults = ref(false)

onBeforeMount(() => {
    quiz.value = quizes.find(q => q.id === parseInt(route.params.id))
})

const onOptionSelected = (isCorrect) => {
    if(isCorrect){
        numberOfCorrectAnswers.value++;
    };

    if(quiz.value.questions.length -1 === currentQuestion.value){
        return showResults.value = true
    }
    currentQuestion.value++
}
</script>

<template>
    <div>
        <header>
            <div class="bar"></div>
        </header>
        <transition name="bounce" mode="out-in">
            <Question v-if="!showResults"
                :question="quiz.questions[currentQuestion]"
                @selectOption="onOptionSelected"
            />
            <div v-else>done</div>
        </transition>
    </div>
</template>

<style scoped>
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }

    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }
</style>