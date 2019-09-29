import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/carlist',
      name: "carlist",
      component: () => import('./views/carList.vue')
    },{
      path: '/detail',
      name: "detail",
      component: () => import('./views/detail.vue')
    }, {
      path: '*',
      redirect: '/home'
    }
  ]
})