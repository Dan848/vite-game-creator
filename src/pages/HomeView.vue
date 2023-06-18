<template>
<section>
  <div class="text-center mt-5">
    <h1 id="home-title" class="pixel-text">Benvenuto su 
      <span class="bugText px-3 rounded-start-3">Bug</span>
      <span class="makersText px-3 rounded-end-3">Makers</span>
      Official Game!</h1>
  </div>

  <!-- Fight section -->
  <HomeSection :section="store.FightSection" />


  <!-- Ally section -->
  <HomeSection :section="store.AllySection" />

  <!-- Have fun section -->
  <HomeSection :section="store.HaveFunSection" />
</section>
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
    background-color: #c0c0c0;
    color: $primary;
  }

  .makersText {
    background-color: $secondary;
    color: $primary;
  }
}

section {
  padding: 6rem 2rem 2rem 2rem;
  background-color: $primary;
}

#alliance {
  background-color: #0000000c;
}

</style>