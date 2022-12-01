<template>
    <div class="card"  ref="card"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    >
        <div class="card__wrapper">
            <div :class="{'card__3d':true,'enable':hover}">
                <div class="card__image">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
                </div>
                <p class="infos">INFos blalblablddddddddddddddddddddddddddblalal</p>
                <!--layers for visual effect-->
                <div :class="{'card__layer1':hover,'hiden_layout':!hover}"></div>
                <div :class="{'card__layer2':hover,'hiden_layout':!hover}"></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref,onMounted } from 'vue'

//ref to div
const card = ref<HTMLInputElement | null>(null)
let hover = ref(false)
onMounted(() => {
    //safe guard
    if(card.value==null) return;

    let w = card.value.clientWidth;
    let h = card.value.clientHeight;
    let b = card.value.getBoundingClientRect();
    card.value.addEventListener("mousemove", (e) => {
        let X = (e.clientX - b.left) / w;
        let Y = (e.clientY - b.top) / h;

        let rX = -(X - 0.5) * 26;
        let rY = (Y - 0.5) * 26;

        let bgX = 40 + 20 * X;
        let bgY = 40 + 20 * Y;

        let parent = card.value;//document.documentElement; //
        if(parent==null) return;
        parent.style.setProperty("--x", 100 * X + "%");
        parent.style.setProperty("--y", 100 * Y + "%");

        parent.style.setProperty("--bg-x", bgX + "%");
        parent.style.setProperty("--bg-y", bgY + "%");

        parent.style.setProperty("--r-x", rX + "deg");
        parent.style.setProperty("--r-y", rY + "deg");
    });
});

</script>
<style lang="scss">

    .card {
  --step: 5%;
  --pattern: url("http://allyourhtml.club/carousel/pattern.webp") center / 75%;

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
.card__wrapper {
  perspective: 600px;
  position: absolute;
  inset: 0;
}
.card__3d {
    
    position: absolute;
    inset: 0;
   ;
    //transition: transform 0.5s;
    transform: default;
    background-color: $grey;
    border: 4px solid $dark;
    border-radius: 48px;
    transition-delay: 0.5s;
    transition: transform 0.5s;
    &.enable{
        transition-delay: 0s;
        transition: transform 0s;
        transform: rotateY(var(--r-x)) rotateX(var(--r-y));
    }
    clip-path: inset(0 0 0 0 round 48px)


}
.card__image {
  clip-path: inset(0 0 0 0 round 48px);
}
.card__image img {
  display: block;
  max-width: 100%;
  max-height: 100%;
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
    mix-blend-mode: soft-light;
    clip-path: inset(0 0 1px 0 round 48px);
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

  mix-blend-mode: color-dodge;
  will-change: background;
  transition-property: opacity;
  clip-path: inset(0 0 1px 0 round 48px);

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