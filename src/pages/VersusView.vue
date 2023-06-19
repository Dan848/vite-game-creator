<template>
  <div v-if="store.playGame.player1" class="container mt-5">
    <div class="versus-row row my-5 align-content-center flex-column flex-md-row">
      <!-- First character -->
      <div class="col-12 col-md-4 d-flex align-items-sm-center flex-column">
        <h3 class="pixel-text text-center">
          {{ store.playGame.player1.name }}
        </h3>
        <div class="player-img-box">
          <img :src="store.imgStartUrl +
            (store.playGame.player1.image
              ? store.playGame.player1.image
              : store.playGame.player1.type.image)
            " alt="characterOne" class="img-fluid" />
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
            <h5 v-if="store.selectedWeapon.player1" class="pixel-text text-center">
              {{
                getSelectedItem(store.playGame.player1.items, "player1").name
              }}
            </h5>
            <h5 class="pixel-text text-center" v-else>Nessun Arma</h5>
          </div>
        </div>

        <!-- Character Stats and Play Button -->
        <div class="d-flex flex-column align-items-center my-5">
          <div class="d-flex justify-content-center row w-75">
            <div class="px-2 d-flex align-items-center justify-content-center col-12   col-lg-6">
              <img src="/img/stats/strength.png" alt="attack" class="stats-img" />
              <span class="fw-bold fs-5">{{ store.playGame.player1.strength }} STR</span>
            </div>

            <div class="px-2 d-flex align-items-center justify-content-center col-12 col-lg-6">
              <img src="/img/stats/shield.png" alt="defence" class="stats-img" />
              <span class="fw-bold fs-5">{{ store.playGame.player1.defence }} DEF</span>
            </div>
          </div>

          <div class="d-flex w-50 justify-content-between row w-75">
            <div class="px-2 d-flex align-items-center justify-content-center col-12 col-lg-6">
              <img src="/img/stats/speed.png" alt="attack" class="stats-img" />
              <span class="fw-bold fs-5">{{ store.playGame.player1.speed }} SPD</span>
            </div>

            <div class="px-2 d-flex align-items-center justify-content-center col-12 col-lg-6">
              <img src="/img/stats/brain.png" alt="defence" class="stats-img" />
              <span class="fw-bold fs-5">{{ store.playGame.player1.intelligence }} INT</span>
            </div>
          </div>

          <div class="px-2 d-flex align-items-center col-12 justify-content-center">
            <img src="/img/stats/life.png" alt="defence" class="stats-img" />
            <span class="fw-bold fs-5">{{ firstPlayer.currentHp }} LIFE</span>
          </div>

          <!-- Play Button -->
          <div class="mt-4">
            <button class="bm-btn" :disabled="gameOver || !turnPlayer"
              @click="lunchDice(firstPlayer.selectedWeapon.dice_num, firstPlayer.selectedWeapon.dice_faces, 'player1')">
              Lancia
            </button>
          </div>
        </div>
      </div>

      <!-- VERSUS IMAGE and logs-->
      <div class="col-12 col-lg-4 d-flex align-items-center flex-column position-relative">
        <!-- Fight logs -->
        <div class="d-flex w-100">
          <div class="w-100">
            <h2 class="text-center pixel-text">History</h2>
            <div class="fight-logs">
              <ul>
                <!-- Fight logs li (cycle them in a fight logs phrase array) -->
                <li class="event-log">test1</li>
                <li class="event-log">test1</li>
                <li class="event-log">test1</li>
                <li class="event-log">test1</li>
                <li class="event-log">test1</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mb-5">
          <img class="img-fluid"
            src="https://media3.giphy.com/media/TiJfX5nRSnvshdijyb/giphy.gif?cid=6c09b9528rfwmlhyl622lwh4g81ek7hrpgfsxof2l718oqsr&ep=v1_stickers_related&rid=giphy.gif&ct=ts"
            alt="versusImage" />
        </div>

        <div class="reset-btn">
          <button class="bm-btn">Reset</button>
        </div>
      </div>

      <!-- Second character -->
      <div class="col-12 col-lg-4 d-flex align-items-center flex-column">
        <h3 class="pixel-text text-center">
          {{ store.playGame.player2.name }}
        </h3>
        <div class="player-img-box">
          <img :src="store.imgStartUrl +
            (store.playGame.player2.image
              ? store.playGame.player2.image
              : store.playGame.player2.type.image)
            " alt="characterOne" class="img-fluid" />
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
            <h5 v-if="store.selectedWeapon.player2" class="pixel-text text-center">
              {{
                getSelectedItem(store.playGame.player2.items, "player2").name
              }}
            </h5>
            <h5 class="pixel-text text-center" v-else>Nessun Arma</h5>
          </div>
        </div>

        <!-- Character Stats and Play Button -->
        <div class="d-flex flex-column align-items-center my-5">
          <div class="d-flex w-50 justify-content-between row w-75">
            <div class="px-2 d-flex align-items-center justify-content-center col-12 col-lg-6">
              <img src="/img/stats/strength.png" alt="attack" class="stats-img" />
              <span class="fw-bold fs-5">{{ store.playGame.player2.strength }} STR</span>
            </div>

            <div class="px-2 d-flex align-items-center justify-content-center col-12 col-lg-6">
              <img src="/img/stats/shield.png" alt="defence" class="stats-img" />
              <span class="fw-bold fs-5">{{ store.playGame.player2.defence }} DEF</span>
            </div>
          </div>

          <div class="d-flex w-50 justify-content-between row w-75">
            <div class="px-2 d-flex align-items-center justify-content-center col-12 col-lg-6">
              <img src="/img/stats/speed.png" alt="attack" class="stats-img" />
              <span class="fw-bold fs-5">{{ store.playGame.player2.speed }} SPD</span>
            </div>

            <div class="px-2 d-flex align-items-center justify-content-center col-12 col-lg-6">
              <img src="/img/stats/brain.png" alt="defence" class="stats-img" />
              <span class="fw-bold fs-5">{{ store.playGame.player2.intelligence }} INT</span>
            </div>
          </div>

          <div class="px-2 d-flex align-items-center col-12 justify-content-center">
            <img src="/img/stats/life.png" alt="defence" class="stats-img" />
            <span class="fw-bold fs-5">{{ secondPlayer.currentHp }} LIFE</span>
          </div>

          <!-- Play Button -->
          <div class="mt-4">
            <button class="bm-btn" :disabled="gameOver || turnPlayer"
              @click="lunchDice(secondPlayer.selectedWeapon.dice_num, secondPlayer.selectedWeapon.dice_faces, 'player2')">
              Lancia
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="container mt-5 w-100 d-flex flex-column justify-content-between align-items-center text-center">
      <div class="h1 mb-3">Oops, c'è qualche bug qui</div>
      <div class="mb-5 h3">Non hai scelto i personaggi, torna alla selezione</div>
      <router-link :to="{ name: 'choose' }" class="bm-btn">
        <button class="bm-btn">Scegli</button>
      </router-link>
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
      firstPlayer: { ...store.playGame.player1 },
      secondPlayer: { ...store.playGame.player2 },
      gameOver: false,
      turnPlayer: null
    };
  },
  methods: {
    getSelectedItem(items, player) {
      if (player == "player1") {
        for (const item of items) {
          if (item.id === store.selectedWeapon[player]) {
            this.firstPlayer.selectedWeapon = item;
            return item;
          }
        }
      } else {
        for (const item of items) {
          if (item.id === store.selectedWeapon[player]) {
            this.secondPlayer.selectedWeapon = item;;
            return item;
          }
        }
      }
    },
    // Robaccia di Filippo Verrone <3 che adoro
    // fight() {
    //   this.firstPlayer.currentHp = this.firstPlayer.life;
    //   this.secondPlayer.currentHp = this.secondPlayer.life;
    //   if (this.firstPlayer.speed > this.secondPlayer.speed) {
    //     this.fighting(this.firstPlayer, this.secondPlayer);
    //   } else {
    //     this.fighting(this.secondPlayer, this.firstPlayer);
    //   }
    // },
    // fighting(fighter1, fighter2) {
    //   fighter2.currentHp -= fighter1.strenght + fighter1.bonusDmg;
    //   fighter1.currentHp -= fighter2.strenght + fighter2.bonusDmg;
    //   fighter1.bonusDmg = null;
    //   fighter2.bonusDmg = null;
    // },

    //LANCIA DADO
    lunchDice(value, diceType, player) {
      let totalDmg = 0;
      let dmgBonus = 0;
      for (let i = value; i > 0; i--) {
        dmgBonus += this.rndNumb(diceType);
      }
      if (player == "player1") {

        totalDmg = dmgBonus + this.firstPlayer.strength - this.secondPlayer.defence;
        if (totalDmg > 0){
        this.secondPlayer.currentHp -= totalDmg;
        }
      }
      if (player == "player2") {
        totalDmg = dmgBonus + this.secondPlayer.strength - this.firstPlayer.defence;
        if (totalDmg > 0){
        this.firstPlayer.currentHp -= totalDmg;
        }
      }

      if (this.firstPlayer.currentHp <= 0 || this.secondPlayer.currentHp <= 0) {
        this.gameOver = true
      }
      this.turnPlayer = !this.turnPlayer
    },
    //RANDOM
    rndNumb(max) {
      return Math.floor(Math.random() * max + 1);
    },
    //Init Page
    initPage() {
      //Assegna un arma a Zero se non esiste
      this.firstPlayer.selectedWeapon = {};
      this.secondPlayer.selectedWeapon = {}
      this.firstPlayer.selectedWeapon.dice_num = 0;
      this.firstPlayer.selectedWeapon.dice_faces = 0;
      this.secondPlayer.selectedWeapon.dice_num = 0;
      this.secondPlayer.selectedWeapon.dice_faces = 0;
      //Assegna i Current Hp
      this.firstPlayer.currentHp = this.firstPlayer.life;
      this.secondPlayer.currentHp = this.secondPlayer.life;
      //Decide chi inizia prima
      this.turnPlayer = (store.playGame.player1.speed > store.playGame.player2.speed) ? true : false;
    }
  },
  mounted() {
    this.initPage();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/partials/var.scss" as *;

ul {
  list-style-type: none;
}

h3,
h4 {
  color: $success;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    color: $secondary;
  }
}

.stats-img {
  width: 20px;
  margin-right: 0.5rem;
  filter: invert(1);
}

.fight-logs {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.7rem;
  height: 100px;
  overflow: auto;

  .event-log:hover {
    color: $secondary;
    cursor: pointer;
  }
}

.fs-5:hover {
  color: $secondary;
  cursor: pointer;
}

button[disabled] {
  color: red;
}

.player-img-box {
  height: 400px;
}

@media screen and (max-width:991px) and (min-width:768px) {
  .versus-row {
    justify-content: center;

    .col-12 {
      width: 100%;
    }
  }

  .player-img-box {
    height: 200px;

    img {
      height: 100%;
    }
  }
}

@media screen and (max-width:767px) {

  .player-img-box {
    display: flex;
    justify-content: center;
    height: 200px;

    img {
      height: 100%;
    }
  }
}
</style>
