import { createRouter, createWebHistory } from 'vue-router'
import PalestrasView from '../views/PalestrasView.vue'

const routes = [
  {
    path: '/palestras',
    name: 'palestras',
    component: PalestrasView
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
