import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '../auth/authGuard'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Profile,
      beforeEnter: authGuard
    }
  ]
})

export default router
