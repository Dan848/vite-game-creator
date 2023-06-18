<template>
    <div class="container">
        <div class="row mt-5">
            <!-- Page navigation -->
            <ul class="pagination d-flex justify-content-end">
                <li class="page-item"><button :class="{ 'page-link': true, 'disabled': store.currentPage === 1 }"
                        @click="getCharacter(store.currentPage - 1)"><i class="fa-solid fa-angle-left"></i></button></li>
                <li class="page-item" v-for="n in store.lastPage"><button
                        :class="{ 'page-link': true, 'active': store.currentPage === n }" @click="getCharacter(n)">{{ n
                        }}</button>
                </li>

                <li class="page-item"><button
                        :class="{ 'page-link': true, 'disabled': store.currentPage === store.lastPage }"
                        @click="getCharacter(store.currentPage + 1)"><i class="fa-solid fa-angle-right"></i></button></li>
            </ul>
            <div v-for="character in store.characters" class="mb-5 d-flex justify-content-center col-12 col-md-6 col-lg-4 g-5">
                <router-link class="text-decoration-none" :to="{ name: 'single-character', params: { slug: character.slug } }">
                    <CharacterCard
                    :key="character.id" :character="character"
                    :imgStartUrl="store.imgStartUrl"
                    :isSelected="false" />
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
import CharacterCard from '../components/CharacterCard.vue';
import axios from 'axios';
export default {
    name: 'CharactersList',
    components: {
        CharacterCard
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getCharacter(numPage) {
            axios.get(`${store.apiUrl}/characters`, {
                params: {
                    'page': numPage
                }
            }).then((res) => {
                store.characters = res.data.results.data
                store.currentPage = res.data.results.current_page
                store.lastPage = res.data.results.last_page
            })
        }
    },
    mounted() {
        this.getCharacter(1);
    }
}
</script>

<style lang="scss" scoped>
@use '../assets//partials/var.scss' as *;

.container{
    margin-bottom: 5rem;
    .col-12{
        transition: all 0.3s ease-in-out;
        &:hover{
            transform: scale(0.9);
        }
    }
    .pagination {
        .page-item {
            button {
                background-color: $success;
                color: $primary;
            }
        }
    }
}

</style>