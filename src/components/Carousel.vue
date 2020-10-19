<template>
<div>
  <section id="slider">
  <transition name="slide-fade" mode="out-in">
  <div :key="curP" class="slideImg" :style="imgStyle">
      <Navbar></Navbar>
  </div>
  </transition>
  <div class="slide">
    <h1>{{curH1}}</h1>
    <p>{{curP}}</p>
    <a class="shopNowLink">shop now
      <img src="https://raw.githubusercontent.com/BerylBucket/Room/main/assets/arrow.svg" alt="shop now"/></a>
    <div class="controls">
      <a @click="changeSlide(-1)"><img src="https://raw.githubusercontent.com/BerylBucket/Room/main/assets/angleLeft.svg" alt="previous"/></a>
      <a @click="changeSlide(1)">
       <img src="https://raw.githubusercontent.com/BerylBucket/Room/main/assets/icons/icon-angle-right.svg" alt="next"/>
      </a>
    </div>
  </div>
</section>
</div>
</template>

<script>
  import Navbar from "./Navbar";
  export default {
  components: {
  Navbar
},
  data() {
  return {
    width: 0,
    curSlide: 0,
    curH1: "Discover innovative ways to decorate",
    curP:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    curImg: "image-hero-1.jpg",
    slideText: [
      {
        h1: "Discover innovative ways to decorate",
        p:
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        img: "image-hero-1.jpg"
      },
      {
        h1: "We are available all across the globe",
        p:
          "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        img: "image-hero-2.jpg"
      },
      {
        h1: "Manufactured with the best materials",
        p:
          "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        img: "image-hero-3.jpg"
      }
    ]
  }
 },
 methods: {
    changeSlide(dir) {
      this.trns = false;
      this.curSlide = dir + this.curSlide;
      var slide = this.curSlide;
      if (slide === 3) {
        slide = 0;
      } else if (slide === -1) {
        slide = 2;
      } else {
      }
      this.curH1 = this.slideText[slide].h1;
      this.curP = this.slideText[slide].p;
      this.curImg = this.slideText[slide].img;
      this.curSlide = slide;
    }
  },
  created() {
    this.width = window.innerWidth;
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
    });
  },
  computed: {
    imgStyle() {
      var size;
      if (this.width > 376) {
        size = "desktop-";
      } else {
        size = "mobile-";
      }
      var url =
        "url(https://raw.githubusercontent.com/BerylBucket/Room/main/assets/images/" +
        size +
        this.curImg +
        ")";
      return { "background-image": url, "background-size": "100% 100%" };
    }
  }
}
</script>

<style scoped>
  .slideImg {
  width: 100%;
  height: 102vw;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 45px 18px;
}
.slide {
  padding: 85px 26px;
  width: 100%;
  position: relative;
}
h1 {
  font-weight: 700;
  font-size: 28px;
}
p {
  margin-top: 17px;
  display: inline-block;
  line-height: 1.75;
  color: hsl(0, 0%, 63%);
}
.shopNowLink {
  display: flex;
  text-transform: uppercase;
  margin-top: 25px;
  letter-spacing: 10px;
  align-items: center;
}
.shopNowLink img {
  margin-left: 29px;
}
.controls {
  position: absolute;
  top: -52px;
  right: 0;
  display: flex;
}
.controls a {
  background: #000;
  padding: 14px 20px;
  display: flex;
}
.controls a:hover {
  background: hsl(0, 0%, 27%);
}
.slide a:hover {
  opacity: 0.8;
}
@media (min-width: 376px) {
  .slideImg {
    background-size: 100% 100%;
    height: 77vw;
    padding: 45px 40px;
  }
  .slide {
    padding: 100px 14vw;
  }
  .controls {
    top: -66px;
  }
  .controls a{
    padding: 21px 24px;
  }
}
@media (min-width: 1024px) {
  #slider {
    display: grid;
    grid-template-columns: 58% auto;
    max-width: 1024px;
    margin: auto;
  }
  .slideImg {
    height: 512px;
    background-size: 120% 100%;
  }
  .slide {
    padding: 90px 82px;
  }
  .controls {
    top: calc(100% - 65px);
    left: 0;
    bottom: 0;
  }
  .controls a {
    padding: 0 24px;
  }
}
@media (min-width: 1440px) {
  #slider {
    max-width: 1440px;
    margin: auto;
  }
  .slideImg {
    height: 547px;
    padding: 55px 58px;
  }
  .slide {
    padding: min(8.33vw, 120px) min(6.25vw, 90px);
  }
  p {
    margin-top: 25px;
  }
  .controls {
    top: calc(100% - 84px);
  }
  .controls a {
    padding: 0 37px;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
