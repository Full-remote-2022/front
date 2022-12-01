<template>
    <div>
        <label for="e_mail">E-mail</label>
       <input id="e_mail" type="text" placeholder="enter a valid e-mail">
       <label for="e_mail_confirm">E-mail confirmation</label>
       <input id ="e_mail_confirm" type="text" placeholder="confirm the e-mail">
        <label for="username">Username</label>
       <input id="username" type="text" placeholder="enter a username">
        <label for="password">Password</label>
       <input id="password" type="text" placeholder="chose a password">
       <button>Sign Up</button>
    </div>
</template>

<script setup lang="ts">

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