import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import LoginView from '@/views/LoginView.vue'
import CartView from '@/views/CartView.vue'
import UserProfileView from '@/views/UserProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegistrationView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/user/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/user/profile',
      name: 'profile',
      component: UserProfileView
    }
  ]
})

export default router
