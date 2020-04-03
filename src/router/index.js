import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/container/container'
import Login from '@/views/login'
import Dashboard from '@/views/dashboard'
import Article from '@/views/article'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Container',
      component: Container,
      children: [{
          path: 'dashboard',
          name: '首页',
          component: Dashboard,
          children: [{
              path: 'dashboard1',
              name: '1',
              component: Dashboard,
            },
            {
              path: 'dashboard2',
              name: '2',
              component: Dashboard,
              children: [{
                  path: 'dashboard1',
                  name: '1',
                  component: Dashboard,
                },
                {
                  path: 'dashboard2',
                  name: '2',
                  component: Dashboard,
                },
              ]
            }
          ]
        },
        {
          path: 'article',
          name: '文章',
          component: Article,
        }
      ]
    }

  ]
})
