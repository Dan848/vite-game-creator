<template>
  <div class="character-card">
    <div class="text-decoration-none text-white d-flex flex-column">
      <!-- {{ --Character Image-- }} -->
      <div class="character-card-image-box">
        <div class="image-character-card py-4">
          <img :src="imgStartUrl +
            (character.image ? character.image : character.type.image)
            " :alt="character.name" class="w-100 h-100" />
        </div>
      </div>

      <!-- {{ --Character Name-- }} -->
      <div class="card-name-border card-name-border-gradient w-75 d-flex align-self-center justify-content-center">
        <h4 class="fs-2">{{ character.name }}</h4>
      </div>

      <!-- {{ --Character Stats-- }} -->
      <div class="d-flex flex-wrap">
        <!-- {{ --Left Stats with Strength and Defence-- }} -->
        <div class="left-stats w-50">
          <!-- {{ --Strength --}} -->
          <div class="w-100 text-center">
            <img src="/img/strength.png" alt="attack" class="stats-img" />
            <span class="fw-bold fs-5">{{ character.strength }} STR</span>
          </div>

          <!-- {{ --Defence --}} -->
          <div class="w-100 text-center">
            <img src="/img/shield.png" alt="defence" class="stats-img" />
            <span class="fw-bold fs-5">{{ character.defence }} DEF</span>
          </div>
        </div>

        <!-- {{ --Riight stats with Speed and Intelligence-- }} -->
        <div class="right-stats w-50">
          <!-- {{ --Speed --}} -->
          <div class="w-100 text-center">
            <img src="/img/speed.png" alt="speed" class="stats-img" />
            <span class="fw-bold fs-5">{{ character.speed }} SPD</span>
          </div>

          <!-- {{ --Intelligence --}} -->
          <div class="w-100 text-center">
            <img src="/img/brain.png" alt="intelligence" class="stats-img" />
            <span class="fw-bold fs-5">{{ character.intelligence }} INT</span>
          </div>
        </div>

        <!-- {{ --Central div with life stat-- }} -->
        <div class="w-100 text-center pt-2">
          <img src="/img/life.png" alt="life" class="stats-img" />
          <span class="fw-bold fs-5">{{ character.life }} LIFE</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: String,
    imgStartUrl: String,
    isSelected: Boolean
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/partials/var.scss' as *;

.character-card {
  // background-image: url("/img/cardbg.png");
  // background-position: center;
  // background-size: contain;
  // background-repeat: no-repeat;
  width: 100%;
  max-width: 320px;
  height: 450px;
  background-color: $primary;
  position: relative;

    &::before{
      content: '';
    position: absolute;
    width: 70%;
    height: 100px;
    left: 50%;
    top: -9%;
    translate: -50% 0%;
    border-bottom-left-radius: 300px;
    border-bottom-right-radius: 300px;
    background-color: $primary;
    z-index: -1;
    }

    &::after{
      content: '';
    position: absolute;
    width: 70%;
    height: 100px;
    transform: rotate(180deg);
    left: 50%;
    bottom: -9%;
    translate: -50% 0%;
    border-bottom-left-radius: 300px;
    border-bottom-right-radius: 300px;
    background-color: $primary;
    z-index: -1;
    }

  // Gradient border for card name
  .card-name-border {
    border: 10px solid;
    border-image-slice: 1;
    border-width: 4px;
  }

  .card-name-border-gradient {
    border-image-source: linear-gradient(90deg,
        $primary 0%,
        $secondary 40%,
        $secondary 60%,
        $primary 100%);
  }

  .image-character-show {
    max-width: 200px;
  }

  .character-card-image-box {
    display: flex;
    justify-content: center;

    .image-character-card {
      height: 40%;
      width: 75%;
    }
  }

  .stats-img {
    width: 20px;
    margin-right: 0.5rem;
    filter: invert(1);
  }

  .left-stats {
    border-right: 2px solid;
  }
}
</style>
