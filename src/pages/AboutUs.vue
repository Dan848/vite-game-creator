<template>
  <div class="container">
    <div class="row">
      <AboutUsCard v-for="team in store.Teams" :key="team.id" :team="team" />
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
import AboutUsCard from "../components/AboutUsCard.vue";

export default {
  name: "AboutUs",
  components: {
    AboutUsCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
