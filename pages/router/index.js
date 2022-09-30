// import { createRouter, createWebHistory } from "vue-router";
import Home from '../home'
import HomeService from '../homeservice'
import HomeAbout from '../homeabout'
import HomeArticles from '../homearticles'
import HomeContact from '../homecontact'

const routes = [
  { path: '/', component: Home },
  { path: '/homeservice', component: HomeService },
  { path: '/homeabout', component: HomeAbout },
  { path: '/homearticles', component: HomeArticles },
  { path: '/homecontact', component: HomeContact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
