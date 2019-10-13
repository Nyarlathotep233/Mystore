import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home-backstage.vue'
import Store from './views/Store-backstage.vue'
import Account from './views/Account-backstage.vue'
import Goods from './views/Goods-backstage.vue'
import AccountDetail from './views/Account-Detail.vue'
import element from './views/testelement.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/account',
      name: 'store',
      component: Account
    },
    {
      path: '/goods',
      name: 'store',
      component: Goods
    },
    {
      path: '/account-detail',
      name: 'store',
      component: AccountDetail
    },
    {
      path: '/element',
      name: 'element',
      component: element
    },
    // {
    //   // path: '/about',
    //   // name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})