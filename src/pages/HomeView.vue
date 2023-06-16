<template>
  <div class="text-center mt-5">
    <h1 id="home-title" class="pixel-text">Benvenuto su <span class="bugText px-3">Bug</span><span
        class="makersText px-3">Makers</span>
      Official Game!</h1>
  </div>

  <!-- Fight section -->
  <HomeSection :section="store.FightSection" />


  <!-- Ally section -->
  <HomeSection :section="store.AllySection" />

  <!-- Have fun section -->
  <HomeSection :section="store.HaveFunSection" />
</template>

<script>
import { store } from '../data/store';
import HomeSection from '../components/HomeSection.vue';
export default {
  name: 'HomeView',
  components: {
    HomeSection
  },
  data() {
    return {
      store
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/var.scss' as *;

* {
  color: white;
}

#home-title {
  font-size: 45px;

  .bugText {
    background-color: $primary;
  }

  .makersText {
    background-color: $secondary;
  }
}

section {
  margin-top: 6rem;
  padding: 2rem;
}

#alliance {
  background-color: #0000000c;
}
</style>