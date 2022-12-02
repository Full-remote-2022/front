<template>
    <div>
        <label for="username_login">Username</label>
       <input ref="username_login" id="username_login" type="text" placeholder="enter your username">
        <label for="password_login">Password</label>
       <input ref="password_login" id="password_login" type="password" placeholder="enter your password">
       <div id="show-password"><input ref="hide_and_reveal" class="show_password" type="checkbox" style= "cursor: pointer;" @click="hide_reveal"><label for="password_login">Show Password</label></div>
       <button>Log In</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const password_login = ref<HTMLInputElement | null>(null);

function hide_reveal(){
    
    if (password_login.value==null){return;}
    if (password_login.value.type === "password"){
        password_login.value.type = "text";
    }
    else{
        password_login.value.type = "password";
    }
}
</script>

<style scoped lang="scss">
div {
    display:flex;
    flex-direction: column;
    align-items: center;
}

#show-password{
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom:10px;
}

#username_login,#password_login {
    margin-bottom:10px;
    padding: 5px;

}

input:focus {
    border-color: royalblue;
    border-radius: 2px;
    outline: none;
}

button{
    background-color: royalblue;
    color:yellow;
    border:none;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
}

button:hover {
    background-color: rgb(44, 68, 139);
}
</style>