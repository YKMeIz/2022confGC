import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
import OrganizersView from '@/views/OrganizersView.vue';
import RegistrationView from '@/views/RegistrationView.vue';
import SpeakersView from '@/views/SpeakersView.vue';
import SponsorsView from '@/views/SponsorsView.vue';
import VenueView from '@/views/VenueView.vue';
import ScheduleView from '@/views/ScheduleView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/organizers',
    name: 'organizers',
    component: OrganizersView,
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView,
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: SpeakersView,
  },
  {
    path: '/sponsors',
    name: 'sponsors',
    component: SponsorsView,
  },
  {
    path: '/venue',
    name: 'venue',
    component: VenueView,
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: ScheduleView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
