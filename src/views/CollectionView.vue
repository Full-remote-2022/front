<template>
    <div>
        <CardComponent />
        <CardComponent />
        <CardComponent />
    </div>
</template>
<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue'
</script>
<style scoped lang="scss">
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
</style>