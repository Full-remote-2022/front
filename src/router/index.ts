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
