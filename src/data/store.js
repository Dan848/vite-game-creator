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
});
