import { createRouter, createWebHashHistory } from 'vue-router';
import TicketsPage from '@/pages/TicketsPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes = [
  { name: 'tickets', component: TicketsPage, path: '/' },
  { name: 'notFound', component: NotFoundPage, path: '/:pathMatch(.*)*' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
