<template>
  <NavBar />
  <router-view/>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<style lang="scss">
body{
    background-color: #f2f2f2;
}
</style>