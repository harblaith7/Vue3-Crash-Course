<script setup>
import quizes from "../data/quiz.json"
import {ref, onBeforeMount, computed} from "vue"
import {useRoute, RouterLink} from "vue-router"
import Question from "../components/Question.vue"

const route = useRoute();

const quiz = ref()
const currentQuestion = ref(0)
const numberOfCorrectAnswers= ref(0)
const showResults = ref(false)

onBeforeMount(() => {
    quiz.value = quizes.find(q => q.id === parseInt(route.params.id))
})

const status = computed(() => {
    if(quiz.value){
        return `${currentQuestion.value}/${quiz.value.questions.length}`
    }
})

const barPercentage = computed(() => {
    if(quiz.value){
        if(currentQuestion.value === 0) return "0%";
        else {
            console.log((currentQuestion.value)/quiz.value.questions.length * 100)
            return `${currentQuestion.value/quiz.value.questions.length * 100}%`
        }
    } 
})

const onOptionSelected = (isCorrect) => {
    if(isCorrect){
        numberOfCorrectAnswers.value++;
    };

    if(quiz.value.questions.length -1 === currentQuestion.value){
        showResults.value = true
    }
    currentQuestion.value++
}
</script>

<template>
    <div>
        <header>
            <h4>Question {{status}}</h4>
            <div class="bar">
                <div class="completion" :style="{width: barPercentage}"></div>
            </div>
        </header>
        <transition name="bounce" mode="out-in">
            <Question v-if="!showResults"
                :question="quiz.questions[currentQuestion]"
                @selectOption="onOptionSelected"
            />
            <div v-else>
                <div class="results">
                    <p>Your Results...</p>
                    <h1>
                        {{numberOfCorrectAnswers}}/{{quiz.questions.length}}
                    </h1>
                    <RouterLink to="/">Go Back</RouterLink>
                </div>
            </div>
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

    .bar {
        width: 300px;
        height: 50px;
        border: 3px solid bisque;
    }

    .completion {
        background-color: bisque;
        height: 100%;
    }

    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }

    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }

    header {
        margin-top: 20px;
    }

    h4 {
        font-size: 30px;
    }

    .results {
        text-align: center;
        padding: 100px 0
    }

    .results h1 {
        font-size: 100px;
    }

    .results p {
        font-size: 25px;
    }

    .results button {
        padding: 10px 30px;
        font-size: 20px;
    }
</style>