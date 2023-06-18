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
    {
      label: "Combatti",
      routeName: "choose",
    },
  ],
  FightSection: {
    title: "Scegli il tuo personaggio e inizia a combattere!",
    subtitle: "",
    content: "Scegli il tuo personaggio",
    image:
      "https://i.pinimg.com/originals/15/82/2a/15822a59adbde051c81d49ccfa8cc6dc.gif",

    inverted: false,
    routerLink: {
      href: "characters",
      buttonText: "QUI",
    },
  },
  AllySection: {
    title: "..Oppure chiama i tuoi amici e forma un alleanza",
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
    subtitle: "",
    image:
      "https://cdn.myportfolio.com/ad15d17d570b361e270cdd345e57268c/3fd9d703-369c-404f-8628-3fc3619fdcc0_rw_1920.gif?h=8bc88f2a660f12c0373d4621708eda47",
    inverted: true,
    buttonText: "",
    routerLink: {},
  },
  HaveFunSection: {
    title: `Ricorda che l'importante è sempre divertirsi!`,
    content: `Adesso vai e divertiti avventuriero!`,
    subtitle: "",
    image: "https://i.gifer.com/WMj.gif",
    inverted: false,
    routerLink: {
      href: "versus",
      buttonText: "PLAY",
    },
  },
  Teams: [
    {
      name: "De Palma Vito",
      role: "Full stack developper",
      description:
        "Sono un ragazzo pieno di inventiva e con tanto entusiasmo, appassionato di sport e moda",
      profile_img: "/img/team/",
    },
    {
      name: "Lucà Giuseppe ",
      role: "Full stack developper",
      description: "mettetevela voi",
      profile_img: "/img/team/",
    },
    {
      name: "Rossi Aniello",
      role: "Full stack developper",
      description: "mettetevela voi",
      profile_img: "/img/team/",
    },
    {
      name: "Ceravolo Daniele",
      role: "Full stack developper",
      description: "mettetevela voi",
      profile_img: "/img/team/",
    },
    {
      name: "Michele Libralato",
      role: "Full stack developper",
      description: "mettetevela voi",
      profile_img: "/img/team/",
    },
    {
      name: "Giorgio Lumia",
      role: "Full Stack Celiaco",
      description: "Mi defisco un uomo pieno di inventiva e di problemi.",
      profile_img: "/img/team/g-lumia.jpg",
    },
  ],
  playGame: {
    player1: null,
    player2: null
  },
  selectedWeapon: [],

});
