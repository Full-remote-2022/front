import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/themes',
    name: 'themes',
    component: () => import('@/views/ThemesListView.vue')
  },
  {
    path: '/play',
    name: 'play',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path:'/collection',
    name:'collection',
    component: () => import('@/views/CollectionView.vue')
  },
  {
    path:'/theme/:name',
    name:'theme',
    component: () => import('@/views/ThemeView.vue')
  },
  {
    path:'/logIn',
    name:'logIn',
    component: () => import('@/views/logIn.vue')
  },
  {
    path:'/signUp',
    name:'signUp',
    component: () => import('@/views/signUp.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
