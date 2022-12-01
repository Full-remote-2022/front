<template>
    <nav>
        <p>LOGO</p>
        <router-link to="/question">Question</router-link>
        <router-link to="/collection">Collection</router-link>
        <router-link to="/play">Play</router-link>
    </nav>
</template> 
<script setup lang="ts">

</script>
<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: space-between;   
    align-items: center;
    margin: 0 1rem;
}

nav a {
    font-weight: bold;
    color: $dark;
    text-decoration: none;
}

nav a.router-link-exact-active {
    color: $highlight;
}
</style>