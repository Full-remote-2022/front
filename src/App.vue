<template>
  
  <router-view/>
  <NavBar />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<style lang="scss">
body{
    background-color: $white;
}
</style>

