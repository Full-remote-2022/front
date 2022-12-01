import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/questions',
    name: 'questions',
    component: () => import('@/views/QuestionView.vue')
  },
  {
    path:'/collection',
    name:'collection',
    component: () => import('@/views/CollectionView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
