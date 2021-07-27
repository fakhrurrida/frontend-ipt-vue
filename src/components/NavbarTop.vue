<template>
  <div>
    <!-- type useless, bind class for dark/light text -->
    <b-navbar
      toggleable="lg"
      id="navbar"
      v-scroll-f="handleScroll"
      fixed="top"
      type="light"
      variant="faded"
      ref="navbar"
    >
      <b-navbar-brand class="navbar-s" href="/">
        <img
          id="logo-navbar-bi"
          src="../assets/logo-bi.png"
          alt="logo bi"
        />
        <span><b>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
          &nbsp;SIMULATOR IPT</b></span
        >
      </b-navbar-brand>
      <b-navbar-toggle ref="navtoggle" v-on:click="toggleCollapse" target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          
          <b-nav-item active :class="this.$route.name=='Home' ? 'mx-4 active' : 'mx-4'" href="/" v-if="!logged_in">
            <b-nav-text class="navbar-i" >
              <span>DASHBOARD</span>
            </b-nav-text>
          </b-nav-item>

          <b-nav-item active :class="this.$route.name=='CustomerTopUp' ? 'mx-4 active' : 'mx-4'" href="/topup" v-if="logged_in">
            <b-nav-text class="navbar-i" >
              <span>TOP UP</span>
            </b-nav-text>
          </b-nav-item>

          <b-nav-item class="mx-4" href="/utility" v-if="logged_in">
            <b-nav-text class="navbar-i">
              <span>UTILITY</span>
            </b-nav-text>
          </b-nav-item>

          <b-nav-item class="mx-4" href="/balance-inquiry" v-if="logged_in">
            <b-nav-text
              class="navbar-i">
              <span>BALANCE</span>
            </b-nav-text>
          </b-nav-item>
          

          <b-nav-item class="mx-4" href="/transaction-history" v-if="logged_in">
            <b-nav-text
              class="navbar-i">
              <span>TRANSACTION</span>
            </b-nav-text>
          </b-nav-item>

          <b-nav-item class="mx-4" href="/transfer-credit" v-if="logged_in">
            <b-nav-text
              class="navbar-i">
              <span>TRANSFER CREDIT</span>
            </b-nav-text>
          </b-nav-item>
  
          <b-nav-item-dropdown class="mx-4 mt-2 nav-item-login" variant="link" src="../assets/user.svg" right no-caret>
          <template #button-content>
            <svg width="100%" height="100%" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                <g id="Artboard1" transform="matrix(1.08333,0,0,1.08333,-658.752,-933.85)">
                    <g transform="matrix(0.923077,0,0,0.923077,609.075,862.953)">
                        <path d="M12,0.842C5.838,0.842 0.842,5.838 0.842,12C0.842,18.162 5.838,23.158 12,23.158C18.162,23.158 23.158,18.162 23.158,12C23.158,5.838 18.162,0.842 12,0.842ZM0,12C0,5.373 5.373,0 12,0C18.627,0 24,5.373 24,12C24,18.627 18.627,24 12,24C5.373,24 0,18.627 0,12Z" />
                    </g>
                    <g transform="matrix(0.923077,0,0,0.923077,609.075,862.953)">
                        <path d="M12,4.6C12.981,4.6 13.922,4.99 14.616,5.684C15.31,6.378 15.7,7.319 15.7,8.3C15.7,9.281 15.31,10.223 14.616,10.916C13.922,11.61 12.981,12 12,12C11.019,12 10.078,11.61 9.384,10.916C8.69,10.223 8.3,9.281 8.3,8.3C8.3,7.319 8.69,6.378 9.384,5.684C10.078,4.99 11.019,4.6 12,4.6ZM12,13.85C16.089,13.85 19.4,15.506 19.4,17.55L19.4,19.4L4.6,19.4L4.6,17.55C4.6,15.506 7.911,13.85 12,13.85Z" style="fill-rule:nonzero;"/>
                    </g>
                </g>
            </svg>

            <span class="sr-only">profile</span>
          </template>
          
            <b-dropdown-item href="/login" v-if="!logged_in">Login</b-dropdown-item><b-dropdown-item v-on:click="logout" v-if="logged_in">Logout</b-dropdown-item>
            
          </b-nav-item-dropdown>
          

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { scrollF } from "./scrollF.js";

export default {
  name: "NavbarTop",
  directives: {
    scrollF,
  },
  data() {
    return {
      logged_in : window.$cookies.isKey('session')
    }
  },
  
  props: {
    scrollvalue: {
      type: Number,
      default: 500
    } 
      
    
  },
  methods: {
    toggleCollapse() {
      if (this.$refs.navtoggle.toggleState){
        this.$refs.navbar.$el.classList.add("collapsed")
        this.$refs.navbar.$el.classList.remove("not-collapsed")
      }else{
        this.$refs.navbar.$el.classList.add("not-collapsed")
        this.$refs.navbar.$el.classList.remove("collapsed")
      }
      
    },
    handleScroll: function(evt, el) {
      if (window.scrollY >= this.scrollvalue) {
        el.classList.add("fixed");
      } else {
        el.classList.remove("fixed");
      }
    },
    logout () {
      this.$store.dispatch('logout');
    }
  }
};
</script>
<style>
.nav-item-login .dropdown-item:active, .nav-item-login .dropdown-item.active {
  background-color: #6C63FF;
}
.nav-item-login .dropdown-menu{
  border: 1px #6C63FF solid;
  min-width: 2rem;
}

@media screen and (max-width: 992px) {
  .nav-item-login .dropdown-menu{
    display: block;
    border: none;
  }
  .nav-item-login > a{
    display: none;
  }
}

@media screen and (min-width: 992px) {
    .nav-item-login .dropdown-menu::before{
    background: url('../assets/corners.svg');
    content: "\00a0\00a0";
    position: absolute;
    background-size: contain;
    height: 15px;
    width: 14px;
    right: 12px;
    top: -14px;
    z-index:1;
  }
}
</style>
<style scoped>

.nav-item-login svg{
  height: 24px;
  width: 24px;;
  fill: white;
}

#navbar.not-collapsed{
  box-shadow: 0px 4px 3px #3131311A, 0px 4px 5px #3131311A;
}

.fixed .nav-item-login svg, #navbar.not-collapsed .nav-item-login svg{
  fill: #4d4d4d;
}

@import url("https://fonts.googleapis.com/css?family=Muli");

.navbar-s, .navbar-light .navbar-s, .navbar-i, .navbar-light .navbar-i{
  color: white;
  font-family: "Muli";
}

#navbar.not-collapsed .navbar-s, .fixed .navbar-s {
  color: #4d4d4d;
}

#navbar.not-collapsed .navbar-i, .fixed .navbar-i {
  color: #808285;
}

.fixed-show, .fixed .fixed-hide {
  display: none;
}

.fixed .fixed-show {
  display: inline-block;
}

.nav-item.active {
      font-weight: 600;
  }

#see-demo-button, #offer-project {
  border-style:none;
  background: linear-gradient(325.97deg, #00a3fc 1.23%, #2d1de5 98.57%);
}
#join-us-button, #register-project {
  border-style: none;
  background: linear-gradient(325.97deg,  #6BE47A 1.23%, #6AC273 98.57%);
}
.request-btn {
  border-style:none;
  background: -webkit-linear-gradient(343.95deg, #00a3fc 1.23%, #2d1de5 98.57%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}



#navbar.not-collapsed, .fixed {
  background-color: #ffffff;
}

.navbar-collapse {
  max-width: calc(1280px - 120px);
  justify-content: center;
}

#navbar {
  padding: 0.357rem 0.625rem;
  transition: background-color 250ms, box-shadow 250ms ;
}

#navbar a:hover {
  text-decoration: none;
}

#logo-navbar-bi {
  margin-left: 2rem;
  height: 35px;
}

@media screen and (max-width: 992px) {
  .fixed .fixed-hide, .fixed-hide {
    display: none;
  }

  .fixed-show, .fixed .fixed-show {
    display: inline-block;
  }  
}

@media screen and (min-width: 992px) {
  nav.navbar {
    justify-content: center;
  }
  #logo-navbar-bi {
    margin-left: 3rem;
  }
}

#icon_new {
  height: 2rem;
  width: 2rem;
  margin-top: -0.5rem;
  opacity: 0.8;
}



</style>
