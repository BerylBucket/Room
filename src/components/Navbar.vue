<template>
  <div class="navbar">
    <img
      class="logo"
      src="https://raw.githubusercontent.com/BerylBucket/Room/main/assets/logo.svg"
    />
    <a class="burger" @click="active = true"
      ><img
        src="https://raw.githubusercontent.com/BerylBucket/Room/main/assets/icons/burger.svg"
    /></a>
    <div class="links" :class="{ active: active }">
      <a class="close" @click="active = false"
        ><img
          src="https://raw.githubusercontent.com/BerylBucket/Room/main/assets/icons/icon-close.svg"
          alt="close"
      /></a>
      <a>home</a>
      <a>shop</a>
      <a>about</a>
      <a>contact</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
*{
  font-weight: 600;
  font-size: 14px;
}
.navbar a {
  color: #f5f5f5;
}
@media (max-width: 599px) {
  .navbar .logo {
    display: block;
    margin: auto;
  }
  .navbar .links {
    display: none;
  }
  .links.active {
    display: initial;
    background: #f5f5f5;
    padding: 10px 0;
    position: absolute;
    z-index: 15;
    top: 0;
    left: 0;
    width: 100%;
  }
  .burger {
    text-align: left;
    display: block;
    transform: translateY(-14px);
  }
  .links a {
    display: block;
    color: #000;
    text-align: center;
    line-height: 40px;
  }
}
@media (min-width: 600px) and (max-width: 1023px) {
  .navbar .logo {
    display: block;
    margin: auto;
  }
  .links {
    display: none;
  }
  .links.active {
    display: initial;
    background: #f5f5f5;
    padding: 50px 20px;
    position: absolute;
    z-index: 15;
    top: 0;
    left: 0;
    width: 100%;
  }
  .burger {
    display: block;
    text-align: left;
    transform: translateY(-14px);
  }
  .links .close {
    margin-right: 20px;
    display: inline-block;
  }
  .links a {
    display: inline-block;
    margin-left: 20px;
    color: #000;
  }
  .links a:hover {
    position: relative;
  }
  .links a:hover:after {
    position: absolute;
    width: 20px;
    height: 2px;
    background: #000;
    content: "";
    left: calc(50% - 10px);
    bottom: -5px;
  }
  .links .close:hover:after {
    display: none;
  }
}
@media (min-width: 1024px) {
  .burger,
  .close {
    display: none;
  }
  .navbar .logo {
    margin-right: 20px;
  }
  .navbar .links {
    display: inline;
  }
  .links a {
    margin-left: 26px;
  }
  .links a:hover {
    position: relative;
  }
  .links a:hover:after {
    position: absolute;
    width: 20px;
    height: 2px;
    background: #f5f5f5;
    content: "";
    left: calc(50% - 10px);
    bottom: -5px;
  }
  .links .close:hover:after {
    display: none;
  }
}
</style>
