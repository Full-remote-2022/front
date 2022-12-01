<template>
    <div>
        <label for="username">Username</label>
       <input ref="username" id="username" type="text" placeholder="enter a username">
        <label for="password">Password</label>
       <input ref="password" id="password" type="text" placeholder="chose a password">
       <label for="password_confirm">Confirm your password</label>
       <input ref="password_confirm" id="password_confirm" type="text" placeholder="confirm your password">
       <button ref="sign_up" id="sign_up" @click="whenshitdonthappen">Sign Up</button>
       <p ref="error_message"></p>
    </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'

const username = ref<HTMLInputElement | null>(null);
const password = ref<HTMLInputElement | null>(null);
const password_confirm = ref<HTMLInputElement | null>(null);
const sign_up = ref<HTMLInputElement | null>(null);
const error_message = ref<HTMLInputElement | null>(null);


function whenshitdonthappen(){
    if(username.value==null || password.value==null || password_confirm.value==null || sign_up.value==null || error_message.value==null) 
    return;
    if (username.value.value !== "" && password.value.value!=="" && password_confirm.value.value!=="")
        if (password.value.value===password_confirm.value.value){
            error_message.value.innerText="You have signed up !"
        }
        else{
            error_message.value.innerText="Please make sure to have a correct e-mail or enter a valid password";
        }
    else {
        error_message.value.innerText="Please make sure to have a correct e-mail or enter a valid password";
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
</style>