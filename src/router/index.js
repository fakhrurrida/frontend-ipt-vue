import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
// import TopUp from '../views/TopUp.vue'
//import Request from '../views/Request.vue'
// import Register from '../views/Register.vue'
//import Demo from '../views/Demo.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    props: true,
    meta: {
      auth: "guest"
    }
  },
  {
    path: '/topup',
    name: 'TopUp',
    component: () => import('../views/TopUp.vue'),
    props: true,
    meta: {
        auth: "registered"
    }
  },
  {
    path: '/balance-inquiry',
    name: 'BalanceInquiry',
    component: () => import('../views/BalanceInquiry.vue'),
    props: true,
    meta: {
        auth: "registered"
    }
  },
  {
    path: '/transaction-history',
    name: 'TransactionHistory',
    component: () => import('../views/TransactionHistory.vue'),
    props: true,
    meta: {
        auth: "registered"
    }
  },
  {
    path: '/utility',
    name: 'Utility',
    component: () => import('../views/Utility.vue'),
    props: true,
    meta: {
        auth: "registered"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
})

router.beforeEach(async (to, from, next) => {
  if (store.state.refreshtask == null){
    await store.dispatch("refreshToken");
  }

  switch (to.meta.auth) {
    case "registered":
      if (window.$cookies.isKey('session') && window.$cookies.isKey('token')) {
        next()
        return
      }else{
        next('/login');
      }
      break;

    case "guest":
      if (!(window.$cookies.isKey('session') && window.$cookies.isKey('token'))) {
        next()
        return
      }else{
        next('/dashboard');
      }
      break;
  
    default:
      next()
  }

})

export default router