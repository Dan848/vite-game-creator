<template>
  <div class="container mt-5">
    <div class="row">
      <!-- First character -->
      <div class="col-4">
        <h3 class="pixel-text text-center">
          {{ store.playGame.player1.name }}
        </h3>
        <div>
          <img
            :src="
              store.imgStartUrl +
              (store.playGame.player1.image
                ? store.playGame.player1.image
                : store.playGame.player1.type.image)
            "
            alt="characterOne"
            class="w-100 h-100"
          />
        </div>

        <!-- Character Content -->
        <div class="character-content mt-5">
          <!-- Character Type -->
          <div class="character-type">
            <h4 class="pixel-text text-center">
              <!-- Here Goes character type -->
              {{ store.playGame.player1.type.name }}
            </h4>
          </div>

          <!-- Character Items -->
          <div class="character-items">
            <h5
              v-if="store.selectedWeapon.player1"
              class="pixel-text text-center"
            >
              {{
                getSelectedItem(store.playGame.player1.items, "player1").name
              }}
            </h5>
            <h5 class="pixel-text text-center" v-else>Nessun Arma</h5>
          </div>
        </div>
      </div>

      <!-- VERSUS IMAGE -->
      <div class="col-4 d-flex align-items-center">
        <img
          class="img-fluid"
          src="https://media3.giphy.com/media/TiJfX5nRSnvshdijyb/giphy.gif?cid=6c09b9528rfwmlhyl622lwh4g81ek7hrpgfsxof2l718oqsr&ep=v1_stickers_related&rid=giphy.gif&ct=ts"
          alt="versusImage"
        />
      </div>

      <!-- Second character -->
      <div class="col-4">
        <h3 class="pixel-text text-center">
          {{ store.playGame.player2.name }}
        </h3>
        <div>
          <img
            :src="
              store.imgStartUrl +
              (store.playGame.player2.image
                ? store.playGame.player2.image
                : store.playGame.player2.type.image)
            "
            alt="characterOne"
            class="w-100 h-100"
          />
        </div>

        <!-- Character Content -->
        <div class="character-content mt-5">
          <!-- Character Type -->
          <div class="character-type">
            <h4 class="pixel-text text-center">
              <!-- Here Goes character type -->
              {{ store.playGame.player2.type.name }}
            </h4>
          </div>

          <!-- List of Character Items -->
          <div class="character-items">
            <h5
              v-if="store.selectedWeapon.player2"
              class="pixel-text text-center"
            >
              {{
                getSelectedItem(store.playGame.player2.items, "player2").name
              }}
            </h5>
            <h5 class="pixel-text text-center" v-else>Nessun Arma</h5>
          </div>
        </div>
      </div>
      <div class="buttons d-flex justify-content-between">
        <button
          v-if="!firstPlayer.bonusDmg"
          @click="lunchDice(2, 6, 'player1')"
          class="btn btn-warning"
        >
          Genera dadi a giocatore 1
        </button>
        <span v-if="firstPlayer.bonusDmg">{{ firstPlayer.bonusDmg }}</span>
        <button
          v-if="!secondPlayer.bonusDmg"
          @click="lunchDice(1, 10, 'player2')"
          class="btn btn-warning"
        >
          Genera dadi a giocatore 2
        </button>
        <button
          v-if="firstPlayer.bonusDmg && secondPlayer.bonusDmg"
          @click="fight()"
          class="btn btn-warning"
        >
          fight
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store";
export default {
  name: "VersusView",
  data() {
    return {
      store,
      stats: ["strength", "defence", "speed", "life"],
      firstPlayer: { ...store.playGame.player1 },
      secondPlayer: { ...store.playGame.player2 },
    };
  },
  methods: {
    getSelectedItem(items, player) {
      if (player == "player1") {
        console.log(store.selectedWeapon[player]);
        for (const item of items) {
          if (item.id === store.selectedWeapon[player]) {
            this.firstPlayer.selectedWeapon = item;
            this.firstPlayer.bonusDmg = null;
            return item;
          }
        }
      } else {
        console.log(store.selectedWeapon[player]);
        for (const item of items) {
          if (item.id === store.selectedWeapon[player]) {
            this.secondPlayer.selectedWeapon = item;
            this.secondPlayer.bonusDmg = null;
            return item;
          }
        }
      }
    },
    fight() {
      this.firstPlayer.currentHp = this.firstPlayer.life;
      this.secondPlayer.currentHp = this.secondPlayer.life;
      if (this.firstPlayer.speed > this.secondPlayer.speed) {
        this.fighting(this.firstPlayer, this.secondPlayer);
      } else {
        this.fighting(this.secondPlayer, this.firstPlayer);
      }
    },
    fighting(fighter1, fighter2) {
      fighter2.currentHp -= fighter1.strenght + fighter1.bonusDmg;
      fighter1.currentHp -= fighter2.strenght + fighter2.bonusDmg;
      fighter1.bonusDmg = null;
      fighter2.bonusDmg = null;
    },
    lunchDice(value, diceType, player) {
      let dmgBonus = 0;
      for (let i = value; i > 0; i--) {
        dmgBonus += this.rndNumb(diceType /* .replace('d', '') */);
      }
      if (player == "player1") this.firstPlayer.bonusDmg = dmgBonus;
      if (player == "player2") this.secondPlayer.bonusDmg = dmgBonus;
      console.log(this.firstPlayer.bonusDmg);
    },
    rndNumb(max) {
      return Math.floor(Math.random() * max + 1);
    },
  },
  mounted() {
    setTimeout(() => {
      console.log(this.firstPlayer);
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/partials/var.scss" as *;

h3,
h4 {
  color: $success;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    color: $secondary;
  }
}
</style>
