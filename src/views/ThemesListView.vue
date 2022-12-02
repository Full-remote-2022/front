<template>
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
    for (let i=0; i<4; i++){
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
</style>