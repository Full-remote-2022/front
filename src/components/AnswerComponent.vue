<template>
    <div class="answer" @click="select()">
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

//select
function select():void{
    console.log('selected', props.answer);
    store.addResponse(props.answer);
}

</script>
<style lang="scss" scoped>
    .answer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>