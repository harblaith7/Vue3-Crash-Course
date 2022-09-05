<script setup>
import {defineProps} from "vue";

const { question } = defineProps(['question'])

const emit = defineEmits(["selectOption"]);

const selectOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};

</script>

<template>
    <div>
        <div class="question-container">
            <h1 class="question">
                {{question.text}}
            </h1>
        </div>
        <div>
            <div v-for="option in question.options" :key="option.id" class="option" @click="selectOption(option.isCorrect)">
                <p class="option-label">{{option.label}}</p>
                <div class="option-value">{{option.text}}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .question {
        font-size: 55px;
        margin-bottom: 25px;
    }
    .option {
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
    }

    .option-label {
        background-color: bisque;
        width: 60px;
        height: 60px;
        font-size: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .option-value {
        background-color: rgb(244, 239, 239);
        width: 100%;
        font-size: 35px;
        padding: 0 20px;
    }
</style>