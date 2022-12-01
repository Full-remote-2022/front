import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/questionList',
    name: 'questionList',
    component: () => import('@/views/QuestionListView.vue')
  },
  {
    path:'/collection',
    name:'collection',
    component: () => import('@/views/CollectionView.vue')
  },
  {
    path:'/question',
    name:'question',
    component: () => import('@/views/QuestionView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
