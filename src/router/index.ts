import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home',
      component: () => import('../views/Layout/LayoutView.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('../views/Home/HomeView.vue'),
        },
      ],
    },
  ],
})

export default router
