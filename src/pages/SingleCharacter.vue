<template>
  <div v-if="store.character">
    <div class="container">
      <div class="bg-dark text-white p-4 mt-5">
        <div class="box-character d-flex justify-content-between">
          <div class="box-image">
            <img src="../../img/knight.png" alt="" srcset="" />
          </div>
          <div class="box-info">
            <h4 class="text-uppercase d-flex justify-content-between">
              <p class="fs-6">Nome:</p>
              <strong>{{ store.character.name }}</strong>
            </h4>
            <hr />
            <p class="d-flex justify-content-between">
              Attacco:
              <span class="fw-bold"> {{ store.character.strength }}</span>
            </p>
            <hr />
            <p class="d-flex justify-content-between">
              Difesa:
              <span class="fw-bold"> {{ store.character.defence }}</span>
            </p>
            <hr />
            <p class="d-flex justify-content-between">
              Velocità:
              <span class="fw-bold"> {{ store.character.speed }}</span>
            </p>
            <hr />
            <p class="d-flex justify-content-between">
              Intelligenza:
              <span class="fw-bold"> {{ store.character.intelligence }}</span>
            </p>
            <hr />
            <p class="d-flex justify-content-between">
              Vita:
              <span class="fw-bold"> {{ store.character.life }}</span>
            </p>
            <hr />
            <p class="d-flex justify-content-between">
              Descrizione:
              <span class="fw-bold ms-3 text-capitalize">
                {{ store.character.description }}</span
              >
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <LoaderComponent />
  </div>
</template>

<script>
import LoaderComponent from "../components/LoaderComponent.vue";
import { store } from "../data/store";

import axios from "axios";
export default {
  name: "SingleCharacter",
  components: {
    LoaderComponent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getCharacter() {
      axios
        .get(`${store.apiUrl}/characters/${this.$route.params.slug}`)
        .then((res) => {
          store.character = res.data.results;
        });
    },
  },
  mounted() {
    this.getCharacter();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/partials/var.scss" as *;
span {
  color: $secondary;
}
</style>
