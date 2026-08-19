import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import TeamView from '../views/TeamView.vue'
import VisitView from '../views/VisitView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/services', name: 'services', component: ServicesView },
    { path: '/team', name: 'team', component: TeamView },
    { path: '/visit', name: 'visit', component: VisitView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
