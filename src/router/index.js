import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import CharacterList from '../pages/CharacterList.vue'
import SingleCharacter from '../pages/SingleCharacter.vue'
import AboutUs from '../pages/AboutUs.vue'
import ContactsView from '../pages/ContactsView.vue'

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
      component: CharacterList
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
    }
  ]
})

export default router
