<template>
  <div style="height: 100%">
    <div class="desktop">
      <NavbarTop v-bind:scrollvalue="navprop.scroll"/>
      <router-view v-on:nav-scroll="navConfig"/>
      <Footer />
    </div>
  </div>
</template>

<script>
import NavbarTop from "@/components/NavbarTop.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavbarTop,
    Footer
  },
  data() {
    return{
      navprop: {
        scroll: 101
      }
      
    }
  },
  methods: {
    navConfig(applyconfig) {
      this.navprop.scroll = applyconfig.scroll;
    }
  }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
body {
  font-family: 'Roboto-Regular';
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
@font-face {
  font-family: 'Comfortaa-Regular';
  src: url('../public/font/comfortaa/Comfortaa-Regular.eot');
  src: url('../public/font/comfortaa/Comfortaa-Regular.eot?#iefix') format('embedded-opentype'),
       url('../public/font/comfortaa/Comfortaa-Regular.svg#Comfortaa-Regular') format('svg'),
       url('../public/font/comfortaa/Comfortaa-Regular.ttf') format('truetype'),
       url('../public/font/comfortaa/Comfortaa-Regular.woff') format('woff'),
       url('../public/font/comfortaa/Comfortaa-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Roboto-Regular';
  src: url('../public/font/roboto/Roboto-Regular.eot');
  src: url('../public/font/roboto/Roboto-Regular.eot?#iefix') format('embedded-opentype'),
       url('../public/font/roboto/Roboto-Regular.svg#Roboto-Regular') format('svg'),
       url('../public/font/roboto/Roboto-Regular.ttf') format('truetype'),
       url('../public/font/roboto/Roboto-Regular.woff') format('woff'),
       url('../public/font/roboto/Roboto-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
.mobile {
  display: none;
  width: 100%;
  height: 100%;
  text-align: center;
}
.container-mobile {
  position: relative;	
  width: 100%;
  height: 100%;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  padding: 20px;
}

.text {
  text-align: center;
  font-family: Muli;
  font-style: normal;
  font-size: 2.25rem;
  line-height: 2.813rem;
  text-align: center;
  letter-spacing: 0.04em;
  background: -webkit-linear-gradient(343.95deg, #00a3fc 1.23%, #2d1de5 98.57%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
