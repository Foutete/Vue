import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import('./views/About.vue')
    },
    {
      path: '/user/:name',
      name: 'user',
      component: () => import('./views/User.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import('./views/Login.vue')
    }
  ]
})
