<template>
    <div>
        <h2>{{question.questionText}}</h2>
        <section>
        <AnswerComponent class="answer" v-for="answer in question.answers" :key="answer.answerID" :answer="answer"></AnswerComponent>
        </section>
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
div {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
}

h2{ 
    background-image: linear-gradient(
	to right,/* to add in parameter*/
	#e1a1e3 0%,
    #58214e 90%,
	);
   color:transparent;
   font-size: 5rem;
   -webkit-background-clip:text;
   text-align: center;

}

section{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
}

.answer {
    //blurry glass effect
    background-color: white;
    width: 90%;
    max-width: 300px;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    font-size: min(10vw, 2rem);
    padding: 2rem;
    color: #b074b2;
    font-weight: bold;
    cursor: pointer;

    height: fit-content;


    &:hover {
    transform: scale(1.1);
}

}


</style>