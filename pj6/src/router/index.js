import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress';
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/departamentos',
    name: 'departamentos',
    component: () => import('../views/Departamentos.vue'),
  },
  {
    path: '/solicitud',
    name: 'solicitud',

    component: () => import('../views/Solicitud.vue'),

  },
  {
    path: '/categoria',
    name: 'Categoria',
    component: () => import('../views/Categoria.vue'),
  },
  {
    path: '/precios',
    name: 'precios',
    component: () => import('../views/Precios.vue'),
  },
  {
    path: '/estatus',
    name: 'estatus',
    component: () => import('../views/Estatus.vue'),
  },
  {
    path: '/verstatus',
    name: 'verstatus',
    component: () => import('../views/VerStatus.vue'),
  },
  {
    path: '/consulta',
    name: 'consulta-item',
    component: () => import('../views/Consulta-item.vue'),
  },
  {
    path: '/envio',
    name: 'envio-item',
    component: () => import('../views/Envio-item.vue'),
  },
  {
    path: '/status',
    name: 'status-item',
    component: () => import('../views/Status-item.vue'),
  },
  {
    path: '/cambiarstatus',
    name: 'cambiarstatus',
    component: () => import('../views/ActualizarStatus.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeResolve((to, from, next) => {
  if(to.name){
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router
