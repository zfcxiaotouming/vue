import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '../views/Layout'
import Login from '../views/login/Login'
import Regist from '../views/login/Regist'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
   
    children: [
        {
            path: 'home',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
        },
        {
            path: 'doing',
            name: 'doing',
            component: () => import(/* webpackChunkName: "doing" */ '../views/Doing.vue')
        },
        {
            path: 'message',
            name: 'message',
            component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue')
        },
        {
            path: 'user',
            name: 'user',
            component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
        }
    ]
  },
  {
      path: '/login',
      name: 'login',
      component: Login
  },
  {
      path: '/regist',
      name: 'regist',
      component: Regist
  },
  {
      path: '/details',
      name: 'details',
      component: () => import(/* webpackChunkName: "details" */ '../views/goods/Details.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
