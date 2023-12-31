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
    title: "Scegli il tuo personaggio e inizia a combattere!",
    subtitle: "",
    content: "Scegli il tuo personaggio",
    image:
      "https://i.pinimg.com/originals/15/82/2a/15822a59adbde051c81d49ccfa8cc6dc.gif",

    inverted: false,
    routerLink: {
      href: "choose",
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
    image: "https://i.gifer.com/4M4z.gif",
    inverted: false,
    routerLink: {
      href: "choose",
      buttonText: "PLAY",
    },
  },
  Teams: [
    {
      name: "De Palma Vito",
      role: "Junior Full stack developper",
      description: "Che ve posso dire, al massimo vi posso cantare una canzone",
      profile_img: "/img/team/dp-vito.jpeg",
    },
    {
      name: "Lucà Giuseppe",
      role: "Mental Coach",
      description: "Forza Messina",
      profile_img: "/img/team/g-luca.jpg",
    },
    {
      name: "Rossi Aniello",
      role: "Junior Full stack developper",
      description:
        "Sono un ragazzo a cui piace programmare, risolvendo problemi, ma soprattutto creandone di nuovi",
      profile_img: "/img/team/n-rossi.jpg",
    },
    {
      name: "Ceravolo Daniele",
      role: "Project manager",
      description: "IL PAZZO CHE HA DECISO DI FARLO FUNZIONANTE IL GIOCO",
      profile_img: "/img/team/d-ceravolo.jpeg",
    },
    {
      name: "Libralato Michele ",
      role: "Junior RE web Developer",
      description: " Junior solo nell'anima. So de LATINA.",
      profile_img: "/img/team/m-librato.png",
    },
    {
      name: "Lumia Giorgio ",
      role: "Full Stack Celiaco",
      description: "Mi definisco un uomo pieno di inventiva e di problemi.",
      profile_img: "/img/team/g-lumia.jpg",
    },
  ],
  playGame: {
    player1: null,
    player2: null,
  },
  selectedWeapon: [],
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
});
