<template>
    <div>
        <h1>Mes cartes</h1>
        <div class="cardDisplay">
            <CardComponent v-for="c in cards" :key="c.cardTitle" :card="c" />
        </div>
    </div>
</template>
<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue'
import { ref } from 'vue'
import { Card, Rarity } from '@/ts/types'
import { onMounted } from 'vue';

//get card from server
const cards = ref<Card[]>([]);

function getCards():void {
    for(let i = 0; i < 10; i++){
        let card:Card = {
            cardText: "This is a card",
            cardTitle: "Card",
            cardRarity: Rarity.Common,
            cardImage: "https://i.imgur.com/1ZQ3Z0M.png",
            cardExpirationDate: new Date(),

        }
        cards.value.push(card);
    }
}

//on component mount
onMounted(() => {
    window.scrollTo(0, 0);
    getCards();
})


</script>
<style scoped lang="scss">
    .cardDisplay{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 70%;
        max-width: calc(calc(280px + 1rem) * 3);
        margin: auto;
        gap: 1rem;
        row-gap: 5rem;

    }

    h1{
        background-image: linear-gradient(
        to right,/* to add in parameter*/
        #e1a1e3 0%,
        #58214e 70%,
        );
    color:transparent;
    font-size: 3rem;
    -webkit-background-clip:text;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    }
</style>