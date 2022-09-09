import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Departamentos from '../views/Departamentos.vue'
import Solicitud from '../views/Solicitud.vue'
import Categoria from '../views/Categoria.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/departamentos',
    name: 'departamentos',
    component: Departamentos
  },
  {
    path: '/solicitud',
    name: 'solicitud',
    component: Solicitud
  },
  {
    path: '/categoria',
    name: 'Categoria',
    component: Categoria
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
