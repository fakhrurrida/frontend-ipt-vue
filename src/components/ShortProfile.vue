<template>
  <div id="short-profile-box">
    <video v-if="this.video.includes(this.gif_ext)" id="profile-gif" autoplay muted loop src="../assets/payment_video.mp4">
      Your browser does not support the video tag.
    </video>
    <img v-else :src="gif_url" id="profile-gif">
    <div id="title-container">
      <b-container>
        <b-row>
          <b-col class="text-center">
            <div id="jargon">
              We help you to
              <strong style="font-weight: 900">test and sandbox</strong> our
              <strong style="font-weight: 900">services</strong>
              <br />with our <strong style="font-weight: 900">IPT Client Simulator</strong>
            </div>
            <b-button class="mt-4" id="see-demo-button" variant="primary" @click="moveDown" v-if="logged_in"
              >TRY IT OUT</b-button
            >
            <b-button class="mt-4" id="see-demo-button" variant="primary" href="/login" v-if="!logged_in"
              >TRY IT OUT</b-button
            >
          </b-col>
        </b-row>
      </b-container>

      <div
        class="container-icon position-absolute text-center"
        style="width: 100vw;"
      >
        <b-icon-chevron-down
          @click="moveDown"
          id="icon-down"
          font-scale="2"
          animation="cylon-vertical"
        ></b-icon-chevron-down>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShortProfile",
  data() {
    return {
      gif_url: "../assets/payment_video.mp4",
      gif_ext: "mp4",
      video: ["webm","mp4", "ogg"],
      images: ["gif", "webp", "jpg", "jpeg", "png", "svg", "apng"],
      logged_in : window.$cookies.isKey('session')
    };
  },
  async mounted() {
    console.log(this.gif_url);
    console.log(this.gif_ext);
  },
  methods: {
    moveDown: function() {
      var container_height =
        document.getElementById("short-profile-box").getBoundingClientRect()
          .height-10;
      window.scrollTo({
        top: container_height,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
#short-profile-box {
  font-family: Roboto;
}

#jargon {
  color: white;
  font-size: 2.25rem;
  text-align: center;
  font-weight: 100;
}

#short-profile-box {
  position: relative;
  width: 100%;
  height: 90vh;
  max-height: 720px;
  overflow: hidden;
}

#profile-gif {
  pointer-events: none;
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}

#title-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
}

#icon-down {
  color: white;
  cursor: pointer;
}

.container-icon {
  bottom: 20px;
}

#title {
  pointer-events: none;
  font-size: 8rem;
}

#desc {
  pointer-events: none;
  font-size: 2rem;
}

@media screen and (max-width: 1025px) {
  #jargon {
    pointer-events: none;
    font-size: 2rem;
  }

  .cont {
    margin-bottom: 120px;
    padding-right: 17rem;
  }
}

@media screen and (max-width: 1000px) {
  #jargon {
    pointer-events: none;
    font-size: 2rem;
  }

  .cont {
    margin-bottom: 120px;
    padding-right: 10rem;
  }
}

@media screen and (max-width: 780px) {
  #jargon {
    pointer-events: none;
    font-size: 1.5rem;
  }
  .cont {
    margin-bottom: 120px;
    padding-right: 5rem;
  }
}

@media screen and (max-width: 500px) {
  #jargon {
    pointer-events: none;
    font-size: 1.1rem;
  }

  .cont {
    margin-bottom: 120px;
    padding-right: 0rem;
  }
}
</style>
