<template>
  <div class="home">
    <h1>Edu-card</h1>
    <div class="flex-row">
      <img src="@/assets/education.svg" alt="">
      <p>Nous faisons toujours face à une population
générale qui manque cruellement d’information et d’
éducation à la sexualité, et particulièrement chez les
jeunes adultes débutant leur vie sexuelle. Tabous,
non-dits, manque de cours d’éducation sexuelle en
milieu scolaire et préjugés négatifs, sont autant de
facteurs qui peuvent empêcher l’information de circuler
et les personnes de s’épanouir.
À travers une approche ludique et dédramatisante de
la sexualité, nous aimerions aider les plus jeunes à
devenir acteurs de leur santé sexuelle.</p>
    </div>
    <div class="flex-row">
      <p>Pour cela nous vous invitons à découvrir Edu-card. Ici, vous pouvez débloquer des nouvelles cartes à jouer en repondant à des quesions sur le sujet, plus vous avez de bonne réponse plus vous débloquer des cartes rares. Vous pouvez ensuite Utilisez ces cartes dans un match contre un adversaire !</p>
      <img src="@/assets/playDraw.svg" alt="">
    </div>
    <div class="sources">
      <p>sources</p>
      <a href="https://www.flaticon.com/free-icons/deck" title="deck icons">Deck icons created by Freepik - Flaticon</a>
      <a href="https://www.ameli.fr/">Ameli.fr</a>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

  .home,.sources{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 3rem;
    .flex-row{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 2rem;

      img{
        width: 50%;
        height: 50%;
        max-width: 400px;
      }
      p{
        width: 40%;
      }
    }
  }
  h1{
    background-image: linear-gradient(
        to right,/* to add in parameter*/
        #e1a1e3 0%,
        #58214e 70%,
        );
    color:transparent;
    font-size: 3rem;
    -webkit-background-clip:text;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
</style>
