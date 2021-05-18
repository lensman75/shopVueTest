import { createRouter, createWebHashHistory } from 'vue-router';
import Catalog from '../views/Catalog';
import Profile from '../views/Profile';

const routes = [
  {
    path: '/',
    name: 'Catolog',
    component: Catalog,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
