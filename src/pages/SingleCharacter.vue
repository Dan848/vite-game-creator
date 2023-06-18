<template>
  <div v-if="store.character">
    <div class="container mb-5">
      <div class="text-white p-4 mt-5">
        <div class="box-character row">
          <div class="box-image justify-content-center d-flex col-12 col-lg-6">
            <img
              :src="
                store.imgStartUrl +
                (store.character.image
                  ? store.character.image
                  : store.character.type.image)
              "
              :alt="store.character.name"
              class="object-fit-contain w-75 me-0"
            />
          </div>
          <div class="box-info col-12 col-lg-6">
            <h2 class="text-uppercase pixel-text text-center">{{ store.character.name }}
            </h2>
            <hr />
            <p class="d-flex justify-content-between">
              <span class="pixel-text">Forza</span>
              <span class="fw-bold"> {{ store.character.strength }}</span>
            </p>
            <hr />
            <p class="d-flex justify-content-between">
              <span class="pixel-text"> Difesa</span>

              <span class="fw-bold"> {{ store.character.defence }}</span>
            </p>
            <hr />
            <p class="d-flex justify-content-between">
              <span class="pixel-text">Intelligenza</span>

              <span class="fw-bold"> {{ store.character.intelligence }}</span>
            </p>
            <hr />
            <p class="d-flex justify-content-between">
              <span class="pixel-text">Velocità</span>

              <span class="fw-bold"> {{ store.character.speed }}</span>
            </p>
            <hr />
            <p class="d-flex justify-content-between">
              <span class="pixel-text">Vita</span>

              <span class="fw-bold"> {{ store.character.life }}</span>
            </p>
            <hr />
            <p class="d-flex justify-content-between">
              <span class="pixel-text">Classe</span>
              <span class="fw-bold">{{ store.character.type.name }}</span>
            </p>
            <hr />
            <!-- INVENTORY -->
                <div>
                    <p class="text-center pixel-text">Inventario:</p>
                    <span v-for="(item, index) in store.character.items" :key="index" class="fst-italic text-white">
                      {{ item.name }}
                      <span v-if="index !== store.character.items.length - 1"> - </span>
                    </span>
                </div>
                <hr />
          </div>
          <p class="p-3 d-flex justify-content-between col-12 flex-column">
            <span class="text-secondary text-center fs-4 py-3 pixel-text">Descrizione</span>
            <span
              v-html="formatDesc(store.character.description ? store.character.description : store.character.type.description)"
              class="bm-desc p-3 fw-bold text-capitalize fs-6"></span>
          </p>
        </div>
      </div>
      <div class="d-flex justify-content-start w-100 mt-4 ms-5">
        <router-link
          class="bm-btn text-decoration-none d-flex align-items-center justify-content-center"
          :to="{ name: 'characters' }"
          ><i class="fa-sharp fa-solid fa-arrow-left"></i>
        </router-link>
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
    formatDesc(text) {
      return text.replace(/#+/g, "<br>").replace(/<br>/, "");
    },
  },
  
  mounted() {
    this.getCharacter();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/partials/var.scss" as *;

.box-info span:last-child {
  color: $secondary;
}
.bm-desc {
  max-height: 160px;
  overflow-y: auto;
}
</style>
