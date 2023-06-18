<template>
  <header class="bg-primary">
    <nav class="navbar fw-semibold container navbar-expand-lg">
      <div class="container-fluid">
        <!-- {{ --Logo --}} -->

        <a class="navbar-brand" href="/">
          <img src="/img/logo-inverted.png" alt="logo" width="40" height="40" />
        </a>

        <!-- {{ --Burger Menù-- }} -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="show = !show"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- {{ --Navbar Start-- }} -->
        <div
          class="collapse navbar-collapse w-100"
          id="navbarNavDropdown"
          :class="{ show: show }"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- {{ --Simple Anchor Link-- }} -->
            <li class="nav-item text-white" v-for="item in store.headerLinks">
              <router-link :to="{ name: item.routeName }" class="mx-2">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
          <a href="http://localhost:8000">
            Area Riservata
            <i class="fas fa-user fa-fw"></i>
          </a>
        </div>
      </div>
    </nav>
  </header>

  <!-- <header class="p-2 d-flex align-items-center">
        <img src="/images/logo.png" alt="Logo">
        <ul class="list-unstyled d-flex text-white m-0">
            <li v-for="item in menu" class="me-3">
                <router-view :to="{name: item.routeName}">
                    {{ item.label }}
                </router-view>
            </li>
        </ul>

    </header> -->
</template>

<script>
import { store } from "../data/store";
export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/partials/var.scss" as *;

a {
  text-decoration: none;
  &:hover {
    color: $secondary;
  }
}
</style>
