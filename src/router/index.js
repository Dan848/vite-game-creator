import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import CharactersPage from '../pages/CharactersPage.vue'
import SingleCharacter from '../pages/SingleCharacter.vue'
import AboutUs from '../pages/AboutUs.vue'
import ContactsView from '../pages/ContactsView.vue'
import ChooseCharacter from '../pages/ChooseCharacter.vue'
import VersusView from '../pages/VersusView.vue'
import NotFound from '../pages/NotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharactersPage
    },
    {
      path: '/characters/:slug',
      name: 'single-character',
      component: SingleCharacter
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'contacts',
      component: ContactsView
    },
    {
      path: '/choose-character',
      name: 'choose',
      component: ChooseCharacter
    },
    {
      path: '/play',
      name: 'versus',
      component: VersusView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    },
  ]
})

export default router
