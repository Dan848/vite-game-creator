<template>
  <div class="container mt-5">
    <div>
      <h1 id="home-title">Benvenuto su <span class="bugText px-3">Bug</span><span class="makersText px-3">Makers</span>
        Official Game!</h1>
    </div>

    <section id="choose-your-character">
      <div>
        <h2>Scegli il tuo personaggio e inizia a <span class="text-danger">combattere!</span></h2>
      </div>
      <div class="row mt-5">
        <div class="col-6">
          <img src="https://i.pinimg.com/originals/86/4b/1e/864b1ec73be1e41d7e16d0a43434cdfb.gif" alt="figth-gif"
            class="w-100 h-100">
        </div>

        <div class="col-6 d-flex align-items-center">
          <div><span class="fs-3">Puoi scegliere il tuo personaggio</span> <router-link :to="{ name: 'characters' }"
              class="btn text-uppercase fw-bold btn-warning">qui</router-link> </div>
        </div>
      </div>
    </section>

    <section id="alliance">
      <div>
        <h2>Oppure chiama i tuoi amici e <span class="text-warning">alleati</span></h2>
      </div>
      <div class="row mt-5">
        <div class="col-6">
          <p class="lh-lg fst-italic">L'alleanza è resa stabile da riti, che comprendono generalmente il <span
              class="text-danger">sacrificio</span> comune (seguito
            o meno da un
            vero e proprio passo sacrificale e dal giuramento che invoca l’ira divina su chi lo violi) o
            qualunque altro
            gesto che significhi l’instaurarsi di un legame (per es. fumare il 'calumet della pace' presso gli Indiani
            dell’America Settentrionale). Tanto più sacro del patto che stabilisce la
            pace o una comunanza d’intenti tra
            società umane, è quello che assicura a una comunità la pace con la divinità, quella che i Romani chiamavano la
            pax deorum. </p>
        </div>

        <div class="col-6">
          <img src="https://i.gifer.com/N2AL.gif" alt="ally-gif" class="w-100 h-100">
        </div>


      </div>
    </section>

    <section id="have-fun">
      <div>
        <h2>L'importante rimane però sempre <span class="text-success">divertirsi!</span></h2>
      </div>
      <div class="row mt-5">
        <div class="col-6">
          <img src="https://media4.giphy.com/media/kHmVOy84g8G6my09fu/giphy.gif" alt="ally-gif" class="w-100 h-100">
        </div>

        <div class="col-6">
          <h3 class="fw-bold">Ti raccomandiamo di leggere il regolamento prima di giocare!</h3>

          <h4 class="mt-5">Adesso vai e divertiti avventuriero</h4>
          <div><button class="text-uppercase fw-semibold btn btn-success">Play</button></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
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
}
</style>