<template>
    <header>
        <nav class="navbar fw-semibold container navbar-expand-lg">
            <div class="container-fluid">
                <!-- {{ --Logo --}} -->

                <a class="navbar-brand " href="/">
                    <img src="/img/goblin-logo.png" alt="logo" width="40" height="40">
                </a>


                <!-- {{ --Burger Menù-- }} -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- {{ --Navbar Start-- }} -->
                <div class="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul class="navbar-nav ">
                        <!-- {{ --Simple Anchor Link-- }} -->
                        <li class="nav-item text-white" v-for="item in store.headerLinks" >
                            <router-link :to="{name: item.routeName}" class="mx-2">
                                {{ item.label }}    
                            </router-link>
                        </li>
                    </ul>
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
import { store } from '../data/store';
    export default {
    name: 'HeaderComponent',
    data() {
        return {
            store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/partials/var.scss' as *;
a{
    text-decoration: none;
    &:hover{
        color: $secondary;
    }
}
</style>