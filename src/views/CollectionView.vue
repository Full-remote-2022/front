<template>
    <div class="cardDisplay">
        <CardComponent v-for="c in cards" :key="c.cardTitle" :card="c" />
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
        padding-top:5rem ;
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
</style>