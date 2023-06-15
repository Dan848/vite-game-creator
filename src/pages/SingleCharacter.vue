<template>
  <div v-if="CharacterData == 0">
    <LoaderComponent />
  </div>
  <div v-else></div>
</template>

<script>
import LoaderComponent from "../components/LoaderComponent.vue";
export default {
  name: "SingleCharacter",
  components: {
    LoaderComponent,
  },
};
</script>

<style lang="scss" scoped></style>
