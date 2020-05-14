import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Renting from '../views/Renting.vue'
// import Login from '../views/Login.vue'
import Register from '../components/Register.vue'
// import Info from '../views/Info.vue'

Vue.use(VueRouter)

  const routes = [
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    // {
    //   path: '/info',
    //   name: 'Info',
    //   component: Info
    // },
    {
      path: '/renting/:id',
      name: 'Renting',
      component: Renting
    },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
