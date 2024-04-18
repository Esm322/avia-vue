import { createRouter, createWebHistory } from 'vue-router';
import TicketsPage from '@/pages/TicketsPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes = [
  { name: 'tickets', component: TicketsPage, path: '/avia-vue-deploy/' },
  { name: 'notFound', component: NotFoundPage, path: '/:pathMatch(.*)*' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
