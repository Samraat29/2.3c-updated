import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'; // Updated path
import About from './components/About.vue'; // Updated path

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;