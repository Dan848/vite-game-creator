<template>
  <div class="container">
    <h2 class="text-center my-5 pixel-text text-secondary">Conosci meglio il nostro Team!</h2>
    <div class="row align-items-stretch">
      <AboutUsCard v-for="team in store.Teams" :key="team.id" :team="team" />

    </div>
    <div class="position-relative text-secondary my-5 mx-auto guest">
      <div class="card p-3">
        <h3>Guest star</h3>
        <div class="guest-star">
          <img src="/img/team/guest/verrone.jpeg" alt="Filippo Verrone">
        </div>
        <h4>Filippo Verrone</h4>
        <br>
        <h5>Thanks from the whole team!</h5>
      </div>

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

<style lang="scss" scoped>
@use '../assets/partials/var.scss' as *;

.guest {
  width: 350px;

  .card {
    background-color: white;
    color: $primary;
  }

  .guest-star {
    position: absolute;
    right: 0;
    top: 0;
    margin-left: -50px;
    z-index: 5;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    background: #ccc;
    border: 3px solid #fff;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 100px;
      height: auto;
    }
  }
}
</style>
