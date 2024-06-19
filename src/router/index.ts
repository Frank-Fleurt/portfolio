import { createRouter, createWebHistory } from 'vue-router';
import ProfileView from '../views/ProfileView.vue';
import ProjectView from '../views/ProjectView.vue';
import ContactView from '../views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: ProfileView,
      meta: {backgroundImage: "url(https://lamanu.fr/wp-content/uploads/2020/05/devenir-developpeur-web-mobile.jpg)"}
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    }
  ]
})

export default router
