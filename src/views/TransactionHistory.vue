<template>
  <div class="transactionhistory" style="width: 100%; overflow: hidden; position: relative;">
      <div class="awan_top">
        <img class="img-cloud2" :src="require('@/assets/awan2.svg')" alt="">
      </div>
      <div class="awan_btm">
        <img class="img-cloud2" :src="require('@/assets/awan2.svg')" alt="">
      </div>
    <b-container>
      
      <transition
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
        mode="out-in">
        <div class="swagger-container">
          <div class="card mb-3">
            <img class="card-img-top" src="https://i.ibb.co/jyLv95T/pexels-cottonbro-3944405-1.jpg" alt="Card image cap">
            <div class="card-body">
              <h1 class="card-title">TRANSACTION HISTORY</h1>
              <p class="card-text">API Riwayat Transaksi (Transaction History) diperlukan agar Konsumen, 
                Penyedia Barang dan/atau Jasa, atau PJP PIAS dapat mengakses informasi riwayat transaksi 
                dari rekening yang dimiliki secara real time, sesuai dengan layanan yang disediakan oleh 
                PJP AIS. Informasi riwayat transaksi berisi rincian mengenai transaksi kredit maupun debit, 
                saldo rekening, dan beberapa informasi lainnya.</p>
            </div>
          </div>
          <SwaggerTransactionHistory/>
            <div class="awan_top">
              <img class="img-cloud2" :src="require('@/assets/awan2.svg')" alt="">
            </div>
            <div class="awan_btm">
              <img class="img-cloud2" :src="require('@/assets/awan2.svg')" alt="">
            </div>
        </div>
      </transition>
    </b-container>

    <b-modal id="modal-failed" hide-header hide-footer>
      <div class="text-center">
        <div id="failed-message" class="m-4">
          <span v-html="error"></span>
        </div>
        <b-button @click="closeError" style="background: red;">OK</b-button>
      </div>
    </b-modal>

    <b-modal id="modal-success" hide-header hide-footer>
      <div class="text-center">
        <div id="success-message" class="m-4">
          <h1>Thank you for registering.</h1>
          <span v-html="error"></span>
        </div>
        <b-button @click="closeSuccess" style="background: linear-gradient(310.6deg, #00a3fc 1.23%, #2d1de5 98.57%);">COOL!</b-button>
      </div>
    </b-modal>

  </div>
</template>

<script>
import SwaggerTransactionHistory from "@/components/SwaggerTransactionHistory"
export default {
  name: "TransactionHistory",
  components: {
    SwaggerTransactionHistory
  },
  beforeCreate() {
    const applyconfig = {
      scroll: 50,
    }
    this.$emit('nav-scroll', applyconfig);
  },
  props: {
        params: {
            type: Object,
            default: function () {
                return {
                    role : [],
                    }
            }
        }
    }
};
</script>

<style>
.navbar-s, .navbar-light .navbar-s, .navbar-i, .navbar-light .navbar-i, .nav-item-login svg{
    color: #4d4d4d !important;
    fill: #4d4d4d !important;
    } 
</style>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css);

h1 {
  background: -webkit-linear-gradient(left, #2D1DE5, #00A3FC);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: bolder;
  letter-spacing: 0.1rem;
}

#logo-topup{
  height: 35px;
}

.swagger-container{
  margin-top:7%;
}

img.img-cloud2 {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 35%;
  opacity: 70%;
}

h2 {
  font-size: 72px;
  background: -webkit-linear-gradient(left, #2D1DE5, #00A3FC);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.4rem;
}

.transactionhistory {
  background: rgba(0, 0, 0, 0);
  background-blend-mode: color;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  margin-bottom: 4rem;
}

.custom-control{
  margin-bottom: 18px;
}

.title {
  font-size: 1.6rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.awan_top{
  position: absolute;
  left: calc(400px + 50vw);
  top: 30vh;
  /* margin-top: 50vh;
  margin-left: 65vh; */
  transform: scaleX(-1);
  position: absolute;
  z-index: -1;
}

.awan_btm{
  position: absolute;
  left: calc(400px + 40vw);
  top: 50vh;
  transform: scale(1.2,1.2);
  /* z-index: -1;
  margin-top: 80vh;
  transform: scale(1.4,1.4); */
}

.text-gradient {
  background: linear-gradient(270deg, #00a3fc 40%, #2d1de5 60%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 0.9rem;
}
.btn-gradient {
  background: linear-gradient(310.6deg, #00a3fc 1.23%, #2d1de5 98.57%);
  padding: 0.5em 1.5em;
  color: white;
}
.clear-form {
  background: white;
  border: 2px solid blue;
  color: blue;
  padding: 10px 20px;
}
.anchor {
  text-align: center;
  width: fit-content;
  margin: auto;
  margin-top: 2em;
  position: relative;
}
.title-text {
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
}

.white-space {
  padding-left: 10px;
}

.step-container {
  width: 100%;
  max-width: 500px;
  margin: auto;
  margin-top: 3em;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.form-container {
  max-width: 80%;
  margin: auto;
  border: 1px solid lightgray;
  padding: 2em;
  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.25);
}

.left-col {
  border-right: 1px solid black;
}
@media screen and (max-width: 790px) {
  .left-col {
    border: none;
  }
  .title-text {
    font-size: 2rem;
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

p {
  word-break: break-all;
}

@media only screen and (max-width: 500px) {
  .mobile-margin {
    margin-top: 70px;
  }
}
</style>