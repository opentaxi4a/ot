
import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/user/login'
    },
    {
      path: '/user/',
      component: () => import('../pages/single/base.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../pages/single/login.vue'),
        },
      ]
    }, {
      path: '/app/',
      component: () => import('../pages/app/base.vue'),
      children: [
        {
          path: 'home',
          component: () => import('../pages/app/home.vue'),
        },
      ]
    }
  ]
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
