<template>
    <div>
        {{theme?.nomTheme}}-{{theme?.nombreQuestions}}
    </div>
</template> 
<script setup lang="ts">
import { defineProps } from 'vue'
import { Theme } from '@/ts/types'
const props = defineProps({
    theme : Object as ()=> Theme
})

</script>
<style lang="scss" scoped>
div {
    color: #b074b2;
    background-color: white;
    width: fit-content;

    padding-top: 10px;
    padding-bottom: 10px;
    padding-left:20px;
    padding-right:20px;

    margin-bottom: 14px;

    border-radius: 4px;

    font-family: sans-serif;
    font-size: large;
    
    transition: 0.4s;
}

div:hover {
    transform: scale(1.1);
}
</style>