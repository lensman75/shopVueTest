import { createRouter, createWebHashHistory } from 'vue-router';
import Catalog from '../views/Catalog';
import Profile from '../views/Profile';

const routes = [
  {
    path: '/',
    name: 'Catalog',
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

router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (from.name === 'Profile') {
    console.log('PROFILE PAGE IS CLOSED');
  }
  if (to.name === 'Catalog') {
    console.log('CATALOG PAGE IS OPENED');
  }
  next();
});

export default router;
