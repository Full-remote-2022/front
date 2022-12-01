<template>
    <div>
        <h2>{{question.questionText}}</h2>
        <AnswerComponent v-for="answer in question.answers" :key="answer.answerID" :answer="answer"></AnswerComponent>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import AnswerComponent from '@/components/AnswerComponent.vue'
import { Question } from '@/ts/types'
//import main store


let question = ref<Question>({
    questionID: 5,
    questionText: "A very important question",
    answers: [
        {
            answerID: 1,
            answerText: "Answer 1",
            questionID: 5,
        },
        {
            answerID: 2,
            answerText: "Answer 2",
            questionID: 5,
        },
        {
            answerID: 3,
            answerText: "Answer 3",
            questionID: 5,
        },
        {
            answerID: 4,
            answerText: "Answer 4",
            questionID: 5,
        },
    ],
})

</script>
<style scoped lang="scss">
    
</style>