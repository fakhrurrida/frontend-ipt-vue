<template>
  <div class="cont">
    <img id="img-bg" src="../assets/FooterBg.png" />
    <div class="footer-cont">
      <img id="logo-navbar-bi" class="mb-4" src="../assets/logo-bi.png" alt="logo bi"/>
      <p id="company">{{ companyName }}</p>
      <p id="address" class="mb-4">{{ companyAddress1 }}</p>
      <p id="number" class="mb-4">{{ reachUsText }}</p>
    </div>
    <div class="to-top-cont">
      <img @click="scrollToTop" src="../assets/go_to_top_btn.png"/>
      <p>Go to top</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      companyName: "Bank Indonesia",
      companyAddress1: "JL MH Thamrin, No. 2, Menteng, Jakarta Pusat",
      reachUsText: "(021) 500-131",
    };
  },
  mounted() {
  },
  methods:{
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
    
};
</script>

<style scoped>
@media screen and (max-width: 425px) {
  #socmed-cont {
    display: flex;
    flex-direction: column;
  }
  .socmed-desc {
    font-size: 12px;
  }
  .socmed-subcont {
    display: flex;
    flex-direction: column;
  }
}

a {
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
}

#link-cont{
  display: flex;
  position:absolute;
  bottom: 10px;
  width: 100%;
  justify-content: center;
}

#link-cont a{
  margin-right:3%;
}

.to-top-cont {
  position:absolute;
  bottom: 10%;
  left: 5%;
}

.to-top-cont img{
  margin-left: 10px;
  cursor: pointer;
}

.to-top-cont p{
  font-family: 'Open Sans';
  font-style: italic;
  font-size: 18px;
}

.cont{
  position:relative;
  margin-bottom: 0;
  overflow: hidden;
}

#company{
  font-size: 35px;
  font-weight: bold;
  font-family: 'Mulish';
}

#address{
  font-family: 'Open Sans';
  font-size: 25px;
  color:#58595B;
}

#number{
  font-family: 'Open Sans';
  font-size: 25px;
  margin-top: -1.5rem;
  color:#58595B;
}

.footer-cont{
  display: flex;
  flex-direction: column;
  padding-top: 10%;
  padding-bottom: 10%;
  padding-right: 20px;
  padding-left: 20px;
}

#logo-navbar-bi {
  width: 50px;
  object-fit: cover;
}

#img-bg {
  position: absolute;
  min-width: 100%;
  height: 100%;
  z-index: -1;
}

.content {
  margin-left: 2rem;
  padding-top: 4%;
  padding-bottom: 4%;
}

.bold-text {
  margin-bottom: 14px;
  font-weight: bold;
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
}

.title-text {
  font-size: 12px;
}

@media only screen and (max-width: 500px) {
  .footer-cont {
    padding-bottom: 200px;
  }
} 
@media only screen and (min-width: 500px) {
  .footer-cont {
    align-items: center;
  }
} 
</style>
