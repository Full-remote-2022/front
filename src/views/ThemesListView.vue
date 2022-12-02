<template>
    <div>
        <ThemePreviewComponent  v-for="Th in themes" :key="Th.nomTheme" :theme="Th" ></ThemePreviewComponent>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Theme } from '@/ts/types'
import ThemePreviewComponent from '@/components/ThemePreviewComponent.vue'

let themes = ref<Theme[]>([])

function getThemes(){
    for (let i=0; i<4; i++){
        themes.value.push(
            {nomTheme:"Jean"+i,
        nombreQuestions:5}
        )
    }
}

getThemes()

</script>
<style scoped lang="scss">
    
</style>