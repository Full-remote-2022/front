<template>
    <nav>
        <!-- <p>LOGO</p> -->
        <router-link to="/themes" v-if="store.isConnected()">
            <img src="@/assets/theme.png" alt="themes">
            <p>Themes</p>
        </router-link>
        <router-link to="/collection" v-if="store.isConnected()">
            <img src="@/assets/collection.png" alt="collection">
            <p>Collection</p>
        </router-link>
        <router-link to="/play" v-if="store.isConnected()">
            <img src="@/assets/jouer.png" alt="collection">
            <p>Play</p>
        </router-link>
        <router-link to="/logIn" v-if="store.isConnected()" @click="store.Disconect()">
            <img src="@/assets/logout.svg" alt="collection">
            <p>Play</p></router-link>
        <router-link to="/logIn" v-if="!store.isConnected()">Log In</router-link>
        <router-link to="/signUp" v-if="!store.isConnected()">Sign Up</router-link>
    </nav>
</template> 
<script setup lang="ts">
import {useStore} from '@/stores/store'
const store = useStore();

</script>
<style lang="scss" scoped>
nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;   
    align-items: center;
    background-color: $white;
    padding: 0.2rem 0.5rem;
}

nav a {
    font-weight: bold;
    color: $dark;
    font-size: 1.5rem;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        $size: 70px;
        width: $size;
        height: $size;
        max-width: 10vw;
        max-height: 10vw;
    }
    p{
        display: none;
        font-size: 1rem;
        text-align: center;
    }
}

nav a.router-link-exact-active {
    color: $highlight;

    p{
        display: block;
    }
    image{
        $size: 50px;
        width: $size;
        height: $size;
        max-width: $size;
        max-height: $size;
        
    }
}
</style>