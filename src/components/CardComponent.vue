<template>
    <div class="card"  ref="card"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    >
        <div class="card__wrapper">
            <div :class="{'card__3d':true,'enable':hover}">
                <div class="topHeader">
                    <RarityTag :rarity="Rarity.Rare"/>
                    <p>TITLE NAME</p>
                </div>
                <div class="card__image">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                </div>
                <div class="infos">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit,
                         amet consectetur adipisicing elit. Voluptate, neque! Voluptate magni at nisi magnam non ducimus
                          quasi illo voluptatem fugit nobis nulla, ratione accusantium debitis soluta totam laudantium iusto?</p>
                </div>
                <!--layers for visual effect-->
                <div :class="{'card__layer1':true,'hiden_layout':false}"></div>
                <div :class="{'card__layer2':true,'hiden_layout':false}"></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref,onMounted,defineProps } from 'vue'
import RarityTag from '@/components/RarityTag.vue';
import { Rarity, Card } from '@/ts/types';

//props
//eslint-disable-next-line
const props = defineProps({
    card: {
        type: Object as () => Card,
        required: true
    }
})
//ref to div
const card = ref<HTMLInputElement | null>(null)
let hover = ref(true)
onMounted(() => {
    //safe guard
    if(card.value==null) return;

    //client width + scroll width
    let w = card.value.clientWidth;
    let h = card.value.clientHeight;
    let b = card.value.getBoundingClientRect();
   
    
    UpdateValues(null);
    card.value.addEventListener("mousemove", (e) => {
        UpdateValues(e);
    });

    function UpdateValues(e: MouseEvent | null):void{
        let X: number;
        let Y: number;
        if(card.value==null) return;
        if(e==null){
            X=0.5;
            Y=0.5;
        }else{

            //get mouse position relative to card position in page and scroll position
            X = (e.clientX - b.left + window.scrollX) / w;
            Y = (e.clientY - b.top + window.scrollY) / h;
        }
        
        console.log(X,Y);
        let rX = -(X - 0.5) * 26;
        let rY = (Y - 0.5) * 26;

        let bgX = 40 + 20 * X;
        let bgY = 40 + 20 * Y;
        let parent = card.value;
        if(parent==null) return;
        parent.style.setProperty("--x", 100 * X + "%");
        parent.style.setProperty("--y", 100 * Y + "%");

        parent.style.setProperty("--bg-x", bgX + "%");
        parent.style.setProperty("--bg-y", bgY + "%");

        parent.style.setProperty("--r-x", rX + "deg");
        parent.style.setProperty("--r-y", rY + "deg");
    }
});

</script>
<style lang="scss">
//card parameters
$card-radius:1.2rem;
$card-color:#454545;
$card-border-color:#3d3d3d;

$barwidth: 0.5rem;  
.card {
    --step: 5%;
    --pattern: url("@/assets/galaxy.jpg") center / 75%;

    --rainbow: repeating-linear-gradient(
        0deg,
        rgb(255, 119, 115) calc(var(--step) * 1),
        rgba(255, 237, 95, 1) calc(var(--step) * 2),
        rgba(168, 255, 95, 1) calc(var(--step) * 3),
        rgba(131, 255, 247, 1) calc(var(--step) * 4),
        rgba(120, 148, 255, 1) calc(var(--step) * 5),
        rgb(216, 117, 255) calc(var(--step) * 6),
        rgb(255, 119, 115) calc(var(--step) * 7)
        )
        0% var(--bg-y) / 200% 700%;
    --diagonal: repeating-linear-gradient(
        128deg,
        #0e152e 0%,
        hsl(180, 10%, 60%) 3.8%,
        hsl(180, 10%, 60%) 4.5%,
        hsl(180, 10%, 60%) 5.2%,
        #0e152e 10%,
        #0e152e 12%
        )
        var(--bg-x) var(--bg-y) / 300%;
    --shade: radial-gradient(
        farthest-corner circle at var(--x) var(--y),
        rgba(255, 255, 255, 0.1) 12%,
        rgba(255, 255, 255, 0.15) 20%,
        rgba(255, 255, 255, 0.25) 120%
        )
        var(--bg-x) var(--bg-y) / 300%;
}
.card {
  width: 280px;
  height: 400px;
  box-sizing: border-box;
  position: relative;
}

.topHeader{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.2rem;
    gap: 0.5rem;
    p{
        font-size: 1.2rem;
        font-weight: bold;
        color: black;
    }
}

.infos{
    text-align: justify;
    word-wrap: break-word;
    width: 90%;
    font-size: .9rem;
    margin: auto;
    margin-top: .5rem;
}

.card__wrapper {
  perspective: 600px;
  position: absolute;
  inset: 0;
}
.card__3d {
    position: absolute;
    inset: 0;
    transform: default;
    background-color: $card-color;
    border: 4px solid $card-border-color;
    
    transition-delay: 0.5s;
    transition: transform 0.5s;
    &.enable{
        transition-delay: 0s;
        transition: transform 0s;
        transform: rotateY(var(--r-x)) rotateX(var(--r-y));
    }
    border-radius: $card-radius;
    //clip-path: inset(0 0 0 0 round $card-radius)


}

.card__image img {
  display: block;
  max-width: 90%;
  max-height: 90%;
  margin: auto;
  object-fit: cover;
}

.hiden_layout{
    opacity: 0;
    transition: all 0.5s ease;
}

/* soft light */
.card__layer1 {
    opacity: 1;
    transition: all 0.5s ease;
    position: absolute;
    inset: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    mix-blend-mode: soft-light;
    clip-path: inset(0 0 1px 0 round calc($card-radius - 5px));
    background: radial-gradient(
        farthest-corner circle at var(--x) var(--y),
        rgba(255, 255, 255, 0.8) 10%,
        rgba(255, 255, 255, 0.65) 20%,
        rgba(255, 255, 255, 0) 90%
    );
}
/* first crazy blend  */
.card__layer2 {
  position: absolute;
  inset: 0;
  z-index: 30;
    width: 100%;
    height: 100%;
  mix-blend-mode: color-dodge;
  will-change: background;
  transition-property: opacity;
  clip-path: inset(0 0 1px 0 round calc($card-radius - 5px));

  background-blend-mode: hue, hue, hard-light, overlay;
  background: var(--pattern), var(--rainbow), var(--diagonal);
}
/* second crazy blend  */
.card__layer2:after {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--pattern), var(--rainbow), var(--diagonal), var(--shade);
  mix-blend-mode: exclusion;
  background-size: 75%, 200% 400%, 800%, 200%;
  background-position: center, 0% var(--bg-y),
    calc(var(--bg-x) * -1) calc(var(--bg-y) * -1), var(--bg-x) var(--bg-y);
  background-blend-mode: soft-light, hue, hard-light;
}
</style>