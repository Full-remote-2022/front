<template>
    <div>
        <h2>{{question.questionText}}</h2>
        <section>
        <AnswerComponent class="answer" v-for="answer in question.answers" :key="answer.answerID" :answer="answer" @click="selected(answer)"></AnswerComponent>
        </section>
    </div>
</template>
<script setup lang="ts">
import AnswerComponent from '@/components/AnswerComponent.vue'
import { Question, Answer } from '@/ts/types'
import { defineProps,defineEmits } from 'vue'

const emit = defineEmits({
    selected(answer:Answer) {
    return true;
  }
})

//define props
const props = defineProps({
    question: {
        type: Object as () => Question,
        required: true
    }
})

//raise selected event
function selected(answer:Answer):void {
    emit('selected',answer);
}

</script>

<style scoped lang="scss">
div {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    width: 100%;
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
    flex-direction: row;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
}




</style>