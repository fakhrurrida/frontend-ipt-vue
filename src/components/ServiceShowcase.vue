<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
    mode="out-in"
  >
    <b-container class="design-sprint" v-if="!isModalVisible">
      <img class="img-cloud2" :src="require('@/assets/awan2.svg')" alt="">
      <div id="go-top">
      </div>
      <b-row>
        <b-col>
          <div class="container">
            <p class="title-text">
              <span class="design-sprint-text">API SERVICES</span>&nbsp;
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-col>
            <div id="description" class="text-center">
              <p>
                Try out our API services
                <span class="span-bolder">easily</span> with no hassle of developing code
                <span class="span-bolder">from scratch.</span>
              </p>
            </div>
          </b-col>
        </b-col>
      </b-row>

      <b-row class="ds-content">
        <b-col style="margin-top: 5px; margin-bottom: 10px" v-for="(data, index) in data_design_sprint" v-bind:key="data.id">
            <div class="ds-subcontent">
              <div
                id="test1"
              >
                <a :href="data.description">
                  <b-img
                    class="ds-image"
                    :id="index"
                    center
                    :src="data.imgURL"
                  ></b-img>
                  <div>
                    <div class="capt-image">{{ data.title }}</div>
                  </div>
                </a>
              </div>
            </div>
            <div class="vl"></div>
        </b-col>
      </b-row>
    </b-container>
  </transition>
</template>

<script>

export default {
  name: "DesignSprint",
  components: {},
  data() {
    return {
      isModalVisible: false,
      data_design_sprint: [
      {
        "index": 0,
        "title": "Customer Top Up",
        "description": "/topup",
        "imgURL": "https://image.flaticon.com/icons/png/512/1639/1639585.png",
      },
      {
        "index": 1,
        "title": "Utility",
        "description": "/utility",
        "imgURL": "https://image.flaticon.com/icons/png/512/900/900834.png",
      },
      {
        "index": 2,
        "title": "Balance Inquiry",
        "description": "/balance-inquiry",
        "imgURL": "https://image.flaticon.com/icons/png/512/4635/4635057.png",
      },
      {
        "index": 3,
        "title": "Transaction History",
        "description": "/transaction-history",
        "imgURL": "https://image.flaticon.com/icons/png/512/4117/4117926.png",
      }],
      index: -1,
      title: "",
      description: "",
      base_img_url: "",
      design_sprint_title: ""
    };
  },

  methods: {
    listItemStyle: function(i) {
      var style = {};
      if (i === 0) {
        style.marginLeft = "-4vw";
      } else if (i === 1) {
        style.marginLeft = "-22vw";
      } else if (i === 2) {
        style.marginLeft = "-40vw";
      } else if (i === 3) {
        style.marginLeft = "-58vw";
      } else if (i === 4) {
        style.marginLeft = "-76vw";
      } else {
        style.marginLeft = "-94vw";
      }

      return style;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css);

.read-details {
  margin-top: 4rem;
  font-family: "Open Sans";
  font-style: italic;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.188rem;
  letter-spacing: 0.02em;
  z-index: -10;
  color: #ced3da;
}

.design-sprint-text {
  font-weight: bolder;
}

.span-bolder {
  font-weight: bolder;
}

.step {
  font-weight: 100;
}

@media screen and (min-width: 426px) {
  .ds-content {
  }
  #test1 {
    margin-top: 2rem;
  }
  img {
    width: 60%;
  }
}

@media screen and (max-width: 425px) {
  .ds-content {
    display: flex;
    flex-direction: column;
    width: 10%;
  }
  .ds-subcontent {
    display: flex;
    flex-direction: row;
    padding: 0 0.625rem;
  }
  #test1 {
    pointer-events: none;
  }
  #test2 {
    pointer-events: none;
  }
  .ds-image {
    width: 6.563rem;
    object-fit: cover;
    padding-right: 0.625rem;
  }
  #capt-test {
    width: 6.563rem;
    padding-right: 0.625rem;
    font-size: 1.25rem;
  }
  #ds-desc {
    font-size: 0.938rem;
  }
}

.design-sprint {
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

#go-top {
  position: absolute;
  top: -10vh;
}

.white-space {
  padding-left: 0.625rem;
}

.title-text {
  font-family: "Muli";
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

b-img {
  max-width: 15rem;
  height: auto;
}

#description {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.375rem;
  color: #313131;
}

#rectangle_6 {
  z-index: -11;
}

.capt-image {
  position: relative;
  margin-top: 0.3rem;
  margin-left: 4rem;
  font-family: "Muli";
  font-style: normal;
  font-weight: 900;
  font-size: 1.2rem;
  line-height: 1.875rem;
  letter-spacing: 0.03em;
  color: #313131;
}

img.img-cloud2 {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 35%;
  opacity: 70%;
}

@media only screen and (max-width: 768px) {
  .vl {
    display: none;
  }
  .tooltiptext {
    display: none;
  }
  .read-details {
    display: none;
  }
  .title-text {
    font-family: "Muli";
    font-style: normal;
    font-size: 1.2rem;
    line-height: 2.2rem;
    text-align: center;
    letter-spacing: 0.04em;
  }
  .numbering-step {
    margin-left: 1rem;
  }

  .capt-image {
    font-size: 1rem;
    line-height: 1.875rem;
    letter-spacing: 0.03em;
    margin-left: 1rem;
  }

  .design-sprint {
    position: relative;
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  .ds-image {
    width: 6.563rem;
    object-fit: cover;
    padding-right: 0.625rem;
  }
}
</style>
