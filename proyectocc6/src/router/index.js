import { createRouter, createWebHashHistory } from 'vue-router'
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
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

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
