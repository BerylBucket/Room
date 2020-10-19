<template>
  <section id="about">
    <div class="aboutImg1"></div>
    <div class="aboutCard">
      <h2>About our furniture</h2>
      <p>
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </p>
    </div>
    <div class="aboutImg2"></div>
  </section>
</template>

<style scoped>
.aboutImg1,
.aboutImg2 {
  background-size: 100% 100%;
  height: 78vw;
}
.aboutImg1 {
  background: url("https://raw.githubusercontent.com/BerylBucket/Room/main/assets/images/image-about-dark.jpg");
}
.aboutImg2 {
  background: url("https://raw.githubusercontent.com/BerylBucket/Room/main/assets/images/image-about-light.jpg");
}
.aboutCard {
  padding: 70px 48px;
}
.aboutCard h2 {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
}
@media (min-width: 376px) {
  #about {
    display: grid;
    grid-template-areas: "img1 img2" "about about";
    grid-template-columns: 1fr 1fr;
  }
  .aboutImg1 {
    grid-area: img1;
  }
  .aboutImg2 {
    grid-area: img2;
  }
  .aboutCard {
    grid-area: about;
  }
  .aboutImg1,
  .aboutImg2 {
    height: 38.5vw;
  }
}
@media (min-width: 1024px) {
  #about {
    display: grid;
    grid-template-areas: "img1 about img2";
    grid-template-columns: auto 40.3% auto;
    max-width: 1024px;
    margin: auto;
  }
  .aboutCard {
    padding: 60px 48px;
  }
  .aboutImg1 {
    background: url("https://raw.githubusercontent.com/BerylBucket/Room/main/assets/images/image-about-dark-tablet.jpg");
    background-size: 100% 100%;
    box-shadow: inset 0 0 0 300px rgba(0, 0, 0, 0.6);
  }
  .aboutImg2 {
    background: url("https://raw.githubusercontent.com/BerylBucket/Room/main/assets/images/image-about-light-tablet.JPG");
    background-size: 100% 100%;
  }
  .aboutImg1,
  .aboutImg2 {
    height: 307px;
  }
}
@media (min-width: 1440px) {
  #about {
    max-width: 1440px;
    margin: auto;
  }
  .aboutImg1 {
    background: url("https://raw.githubusercontent.com/BerylBucket/Room/main/assets/images/image-about-dark.jpg");
    background-size: 100% 100%;
    box-shadow: inset 0 0 0 1px transparent;
  }
  .aboutImg2 {
    background: url("https://raw.githubusercontent.com/BerylBucket/Room/main/assets/images/image-about-light.jpg");
    background-size: 100% 100%;
  }
  .aboutImg1,
  .aboutImg2 {
    height: 302px;
  }
  .aboutCard {
    padding: 70px 48px;
  }
}
</style>
