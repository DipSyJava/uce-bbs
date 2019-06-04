import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/index',
      name: 'home-page',
      component: require('@/components/index').default
    },
    {
      path: '/bbs',
      name: 'bbs-page',
      component: require('@/components/bbs').default
    },
    {
      path: '/fatie',
      name: 'fatie-page',
      component: require('@/components/fatie').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
