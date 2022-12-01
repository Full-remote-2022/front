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

    border: $div_border;
    border-radius: $div_border_radius;

    background-color: $background_color_question;
}

h2{ 
    background-image: linear-gradient(
	to right,/* to add in parameter*/
	#462523 0, /* to add in parameter*/
    #cb9b51 22%, /* to add in parameter*/
	#f6e27a 45%,/* to add in parameter*/
	#f6f2c0 50%,/* to add in parameter*/
	#f6e27a 55%,/* to add in parameter*/
	#cb9b51 78%,/* to add in parameter*/
	#462523 100%/* to add in parameter*/
	);
   color:transparent;/* to add in parameter*/
   -webkit-background-clip:text;/* to add in parameter*/

   -webkit-text-stroke-width: 1px; /* to add in parameter*/
   -webkit-text-stroke-color: black; /* to add in parameter*/
}

section{
    background-color: $background_color_answers;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.answer {
    background-color: $background_color_oneanswer;
    color:$color_oneanswer;
    border: $border_oneanswer;
    border-radius: $border_radius_oneanswer;

    padding: $padding_oneanswer;
    margin: $margin_oneanswer;

    transition: $transition_oneanswer ; 
    box-shadow: $shadow_oneanswer;

    &:hover {
    transform: $transforme_oneanswer; /* to add in parameter*/
}

}


</style>