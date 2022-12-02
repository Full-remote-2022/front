<template>
    <div>
        <h1>{{theme}}</h1>
        <section v-if="(current<questions.length)">
        <QuestionView v-for="(q,i) in questions" :key="q.questionID" :question="q"  v-show="(current==i)" @selected="nextQuestion" />
        </section>
        <section v-else>
            <CardComponent :cardProp="cardReward" v-if="(cardReward!=null)" />
            <button @click="goToThemeList"> <label>Collecter</label></button>
        </section>
    </div>
</template>
<script setup lang="ts">
import QuestionView from '@/components/QuestionView.vue';
import { ref } from 'vue'
import router from '@/router'
import { Answer, Question, Card, Rarity } from '@/ts/types'
import CardComponent from '@/components/CardComponent.vue'
import {cardsJSON} from '@/assets/cards'
//get theme from router params
let theme = ref<any>("") ;
let current = ref<number>(0);
let questions = ref<Question[]>([]);
let answers = ref<Answer[]>([]);
let cardReward = ref<Card | null>(null);

//if theme is not an array of themes, redirect to home
theme.value = router.currentRoute.value.params.name;

function getQuestionsFromTheme():void {
    //push 3 random questions from theme to questions
    for(let i = 0; i < 3; i++){
        let question:Question = {
            questionID: i,
            questionText: "Question "+i,
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
        }
        questions.value.push(question);
    }
}

function nextQuestion(answer:Answer):void {    
    //add answer list of selected answers
    answers.value.push(answer);

    current.value++;

    //if all questions have been answered, get card reward
    if(current.value == questions.value.length){
        getReward();
    }

}

function goToThemeList():void {
    console.log("go to theme list");
    router.push({name: "themes"});
}

function getRarityFromScore(score:number):Rarity {
    if(score < 5){
        return Rarity.Common;
    }
    else if(score < 10){
        return Rarity.Uncommon;
    }
    else if(score < 15){
        return Rarity.Rare;
    }
    else if(score < 20){
        return Rarity.Epic;
    }
    else{
        return Rarity.Legendary;
    }
}

function getReward():void {
    //get score from server
    let score = Math.floor(Math.random() * 30);

    //get a gard depending on score and rarity
    let rarity:Rarity = getRarityFromScore(score);
    
    //get random card from cardsJOSN
    let json = JSON.parse(JSON.stringify(cardsJSON));
    //shuffle json
    for (let i = json.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [json.cards[i], json.cards[j]] = [json.cards[j], json.cards[i]];
    }
    //get a random card of the right rarity
    for(let i = 0; i < json.cards.length; i++){
        if(json.cards[i].cardRarity == rarity){
            let card:Card = {
                cardTitle: json.cards[i].cardTitle,
                cardText: json.cards[i].cardText,
                cardRarity: json.cards[i].cardRarity as Rarity,
                cardImage: json.cards[i].cardImage,
                cardExpirationDate: new Date(),
                color: json.cards[i].color,
            }
            cardReward.value = card;
            break;
        }
    }
}

getQuestionsFromTheme()

</script>

<style scoped lang="scss">
section{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
button{
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: white;

    &:hover{
        transform: scale(1.1);
    }

    label{
        font-size: 1.3rem;
        font-weight: bold;
        background-image: linear-gradient(to right,$pink,$purple);
        color:transparent;
        -webkit-background-clip:text;
        text-align: center;
        border:transparent;
        cursor: pointer;
    }

    
}


</style>