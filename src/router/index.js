import { createRouter, createWebHistory } from 'vue-router'
import AddTask from '../components/AddTask.vue'
import AllTask from '../components/AllTask.vue'

const routes = [
    {
      path: '/alltask',
      redirect: {name: 'alltask'}
    },
    {
      path: '/',
      name: 'alltask',
      component: AllTask
    },
    {
      path: '/addTask',
      name: 'addTask',
      component: AddTask
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router