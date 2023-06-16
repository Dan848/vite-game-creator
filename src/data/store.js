import { reactive } from "vue";

export const store = reactive({
  imgStartUrl: "http://localhost:8000",
  apiUrl: "http://127.0.0.1:8000/api",
  characters: [],
  character: null,
  currentPage: 1,
  lastPage: null,
  headerLinks: [
    {
      label: "Home",
      routeName: "home",
    },
    {
      label: "Characters",
      routeName: "characters",
    },
    {
      label: "About Us",
      routeName: "about-us",
    },
    {
      label: "Contact",
      routeName: "contacts",
    },
  ],
  FightSection: {
    title: 'Scegli il tuo personaggio e inizia a combattere!',
    subtitle: '',
    content: 'Scegli il tuo personaggio',
    image: 'https://www.pianetadragonball.it/images/gif-animate-dragon-ball/vegeta/vegeta-fighting-goku.gif',
    inverted: false,
    routerLink: {
      href: 'characters',
      buttonText: 'QUI',
    }
  },
  AllySection: {
    title: '..Oppure chiama i tuoi amici e forma un alleanza',
    content: `L'alleanza è resa stabile da riti, che comprendono generalmente il sacrificio comune (seguito
            o meno da un
            vero e proprio passo sacrificale e dal giuramento che invoca l’ira divina su chi lo violi) o
            qualunque altro
            gesto che significhi l’instaurarsi di un legame (per es. fumare il 'calumet della pace' presso gli Indiani
            dell’America Settentrionale). Tanto più sacro del patto che stabilisce la
            pace o una comunanza d’intenti tra
            società umane, è quello che assicura a una comunità la pace con la divinità, quella che i Romani chiamavano
            la
            pax deorum.`,
    subtitle: '',
    image: 'https://cdn.myportfolio.com/ad15d17d570b361e270cdd345e57268c/3fd9d703-369c-404f-8628-3fc3619fdcc0_rw_1920.gif?h=8bc88f2a660f12c0373d4621708eda47',
    inverted: true,
    buttonText: '',
    routerLink: {
    }
  },
  HaveFunSection: {
    title: `Ricorda che l'importante è sempre divertirsi!`,
    content: `Adesso vai e divertiti avventuriero!`,
    subtitle: '',
    image: 'https://i.gifer.com/WMj.gif',
    inverted: false,
    routerLink: {
      href: '',
      buttonText: 'PLAY'
    }
  }
});
