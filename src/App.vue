<template>
  <HeaderComponent />

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="scss" scoped></style>
