import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/layouts/Layout.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/system/Login.vue'),
    hidden: true,
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/system/403.vue'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/system/404.vue'),
    hidden: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
