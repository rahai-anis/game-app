import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue'),
    },
    
    {
      path: '/skills',
      name: 'skillsIndex',
      component: () => import('../views/skills/skillsIndex.vue'),
      
    },
    {
      path: '/skills/create',
      name: 'skillsCreate',
      
      component: () => import('../views//skills/skillCreate.vue'),
    },
    {
      path: '/skills/:id/edit',
      name: 'skillsEdit',
      
      component: () => import('../views//skills/skillEdit.vue'),
      props: true,
    },
    {
      path: '/game/:id/details',
      name: 'singlegame',
      
      component: () => import('../views/singlegame.vue'),
      props: true,
    },
    {
      path: '/design',
      name: 'designIndex',
      
      component: () => import('../views//admin_dm/designindex.vue'),
      props: true,
    },
    {
      path: '/design/:id/edit',
      name: 'designEdit',
      
      component: () => import('../views//admin_dm/designEdit.vue'),
      props: true,
    },
  ],
});

export default router;
