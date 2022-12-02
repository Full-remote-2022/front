<template>
    <div>
        <p class="themeName">{{theme?.nomTheme}}</p>
        <p>{{theme?.nombreQuestions}} <label>Questions</label></p>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 500px;
    color: $purple;
    background-color: white;

    padding:0.5rem 1rem ;

    border-radius: 4px;

    font-family: sans-serif;
    font-size: 3rem;
    
    transition: 0.4s;
    cursor: pointer;
}

.themeName{
    background-image: linear-gradient(
	to right,/* to add in parameter*/
	#e1a1e3 0%,
    #58214e 90%,
	);
   color:transparent;
   font-size: 3.5rem;
   -webkit-background-clip:text;
   text-align: center;
}

div:hover {
    transform: scale(1.1);
}

label{
    font-size: 1rem;
}
</style>