<template>
    <div>
        <label for="username">Username</label>
       <input ref="username" id="username" type="text" placeholder="enter a username">
        <label for="password">Password</label>
       <input ref="password" id="password" type="password" placeholder="chose a password">
       <label for="password_confirm">Confirm your password</label>
       <input ref="password_confirm" id="password_confirm" type="password" placeholder="confirm your password">
       <div id="show-password-sign"><input ref="hide_and_reveal_sign" type="checkbox" style= "cursor: pointer; margin: 0;" @click="hide_reveal"><label for="password_confirm">Show Password</label></div>
       <button ref="sign_up" id="sign_up" @click="validateForm">Sign Up</button>
       <p ref="error_message"></p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'

const username = ref<HTMLInputElement | null>(null);
const password = ref<HTMLInputElement | null>(null);
const password_confirm = ref<HTMLInputElement | null>(null);
const sign_up = ref<HTMLInputElement | null>(null);
const error_message = ref<HTMLInputElement | null>(null);


function validateForm(){
    if(username.value==null || password.value==null || password_confirm.value==null || sign_up.value==null || error_message.value==null) 
    return;
    if (username.value.value !== "" && password.value.value!=="" && password_confirm.value.value!=="")
        if (password.value.value===password_confirm.value.value){
            error_message.value.innerText="You have signed up !"
            registerUser(username.value.value,password.value.value);
        }
        else{
            error_message.value.innerText="Please make sure to have a correct e-mail or enter a valid password";
        }
    else {
        error_message.value.innerText="Please make sure to have a correct e-mail or enter a valid password";
    } 
}

function registerUser(username:string,password:string){
    //redirect to login page
    router.push('/login');
}

function hide_reveal(){
    if (password.value==null || password_confirm.value==null){
        return;}
    if (password.value.type === "password"){
        password_confirm.value.type = "text";
        password.value.type="text";
    }
    else{
        password.value.type = "password";
        password_confirm.value.type = "password";

    }
}



</script>

<style scoped lang="scss">



div {
    display:flex;
    flex-direction: column;
    align-items: center;
}

input {
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


#show-password-sign{
    display: flex;
    flex-direction: row;
    align-items: center;
    
    margin-bottom:10px;
}
</style>