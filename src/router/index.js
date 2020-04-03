import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/container'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Container',
      component: Container
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
})
