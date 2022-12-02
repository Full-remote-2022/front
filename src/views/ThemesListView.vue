<template>
    <p>Répondez aux questions pour obtenir des cartes, Obtenez de meilleur cartes en répondant sans faire d'erreur, Utilisez ces cartes dans un match contre un adversaire !</p>
    <div class="listOfThemes">
        <ThemePreviewComponent  v-for="Th in themes" :key="Th.nomTheme" :theme="Th" @click="goToTheme(Th)"></ThemePreviewComponent>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Theme } from '@/ts/types'
import ThemePreviewComponent from '@/components/ThemePreviewComponent.vue'
import router from '@/router'

let themes = ref<Theme[]>([])

function getThemes(){
    for (let i=1; i<5; i++){
        themes.value.push(
            {nomTheme:"Theme "+i,
        nombreQuestions:5}
        )
    }
}

function goToTheme(theme:Theme){
    router.push("/theme/"+theme.nomTheme)
}

getThemes()

</script>
<style scoped lang="scss">
    .listOfThemes{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap:1rem;
        width: 100%;
        margin-top: 2rem;
    }
    p{
        text-align: center;
        font-size: 1.5rem;
        width: 80%;
        margin: 0 auto;
        font-style: italic;
        margin-top: 1rem;
    }
</style>