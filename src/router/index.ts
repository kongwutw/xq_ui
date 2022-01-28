import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/views/home.vue';
import Doc from '@/views/doc/index.vue';

const history = createWebHashHistory();
import { docRoutes } from './doc-routes';

const router = createRouter({
  history,
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/doc',
      name: 'doc',
      redirect: '/doc/intro',
      component: Doc,
      children: docRoutes,
    },
    { path: '/:catchAll(.*)/', redirect: '/' }
  ],
});

export default router;
