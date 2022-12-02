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
    component: () => import('@/views/PlayView.vue')
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

const protectedRoutes = ['collection', 'play', 'themes', 'theme'];

//redirect to home if the route is in the list of protected routes and the user is not logged in
router.beforeEach((to, from, next) => {
  if (protectedRoutes.includes(to.name as string) && !localStorage.getItem('token')) {
    next({ name: 'home' })
  } else {
    next()
  }
})


export default router
