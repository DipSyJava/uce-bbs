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
      path: '/circle',
      name: 'circle-page',
      component: require('@/components/circle').default,
      children: [
        {
          path: '/circle/ownFollow',
          name: 'own-follow',
          component: require('@/components/circleFollow').default
        },
        {
          path: '/circle/funnyBitchs',
          name: 'circle-other',
          component: require('@/components/circleBitchs').default
        },
        {
          path: '/circle/*',
          name: 'circle-other',
          component: require('@/components/circleBitchs').default
        }
      ]
    },
    {
      path: '/fatie',
      name: 'fatie-page',
      component: require('@/components/fatie').default
    },
    {
      path: '/subject/:id',
      name: 'subject-page',
      component: require('@/components/subject').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
