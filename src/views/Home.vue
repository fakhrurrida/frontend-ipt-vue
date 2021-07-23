<template>
  <div>
    <ShortProfile />
    <div data-aos="fade-up" v-if="logged_in">
      <DesignSprint />
    </div>
  </div>
</template>

<script>
import ShortProfile from "@/components/ShortProfile.vue";
import DesignSprint from "../components/ServiceShowcase.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Home",
  components: {
    ShortProfile,
    DesignSprint
  },
  data() {
    return {
      logged_in : window.$cookies.isKey('session')
    }
  },
  created() {
    AOS.init({
      once: true,
    });
  },
};
</script>

<style>
#quote-text {
  font-weight: bold;
  font-family: Comfortaa;
  font-style: normal;
  font-size: 32px;
}
.marg {
  margin: 0rem !important;
}
#quote-cont {
  text-align: center;
  width: 85%;
  margin: auto;
  max-width: 1280px;
}
.quote-img-hp {
  padding-top: auto;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  position: absolute;
}
.quote-img {
  padding-top: auto;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  position: absolute;
}
.logo-bi {
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}
.content-title {
  font-weight: bold;
  font-size: 100px;
  line-height: 117px;
  color: #ffffff;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 50px;
}
.content-subtitle {
  width: 60%;
  font-style: italic;
  font-weight: normal;
  font-size: 35px;
  line-height: 41px;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 65px;
}
.content-contact-text {
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 13px;
}
.content-contact-logo-wrapper {
  display: flex;
  align-items: center;
}
.contact-logo-img {
  height: 50px;
  cursor: pointer;
}
.contact-logo-img:hover {
  transform: scale(0.9);
}
.tooltip {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 150px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s;
  margin-top: 50px;
}
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
@media only screen and (max-width: 1080px) {
  .content-title {
    font-size: 50px;
    margin-bottom: 40px;
  }
  .content-subtitle {
    font-size: 28px;
    margin-bottom: 50px;
  }
  .content-contact-text {
    font-size: 16px;
    margin-bottom: 8px;
  }
  .contact-logo-img {
    height: 25px;
  }
  .tooltip .tooltiptext {
    margin-top: 25px;
  }
}
@media only screen and (max-width: 680px) {
  .content-title {
    margin-bottom: 20px;
  }
  .content-subtitle {
    width: 90%;
    margin-bottom: 30px;
  }
}
@media only screen and (max-width: 470px) {
  .content-title {
    font-size: 36px;
    margin-bottom: 16px;
  }
  .content-subtitle {
    font-size: 20px;
    margin-bottom: 20px;
    line-height: 22px;
  }
  .content-contact-text {
    font-size: 14px;
    margin-bottom: 4px;
  }
  .contact-logo-img {
    height: 20px;
  }
  .tooltip .tooltiptext {
    margin-top: 20px;
  }
  #quote-text {
    font-weight: bold;
    font-family: Comfortaa;
    font-style: normal;
    font-size: 28px;
  }
}
.spacing-4 {
  margin-top: 4rem;
}
</style>
