// import { createRouter, createWebHistory } from "vue-router";

import Home from '../home'
import HomeService from '../homeservice'
import HomeWorks from '../homeworks'

const routes = [
  { path: '/', component: Home },
  { path: '/homeservice', component: HomeService },
  { path: '/homeworks', component: HomeWorks },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
