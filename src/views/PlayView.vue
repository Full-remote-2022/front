<template>
    <div>
        <img src="@/assets/late.svg" alt="late">
        <p>Désolé la page n'est pas encore accessible et ne le sera jamais car on n'a plus <span>d</span><span>e</span> <span>t</span><span>e</span><span>m</span><span>p</span><span>s</span></p>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
    img{
        width: 500px;
        margin: auto;

    }

    p{
        background-image: linear-gradient(
        to right,/* to add in parameter*/
        #58214e 0%,
        #e1a1e3 70%,
        );
    color:transparent;
    font-size: 1.5rem;
    -webkit-background-clip:text;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    //for each letter
    span{

        @for $i from 1 through 7 {
            &:nth-child(#{$i}) {
                $size : 1.5rem - $i * 0.2rem;
                font-size: $size;
            }
        }
    }


    }
</style>