<template>
    <div class="answer">
        <p>{{answer.answerText}}</p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import {useStore} from '@/stores/store'
import { Answer } from '@/ts/types';

const store = useStore();
//eslint-disable-next-line
const props = defineProps<{
    answer: Answer
}>()

</script>
<style lang="scss" scoped>
    .answer {
        display: flex;
        justify-content: center;
        align-items: center;
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