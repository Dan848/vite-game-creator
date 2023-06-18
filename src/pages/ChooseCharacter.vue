<template>
    <div class="container">
        <h2 v-if="!store.playGame.player1" class="text-white text-center mt-5">
            Scegli il Giocatore 1
        </h2>
        <h2 v-if="store.playGame.player1 && !store.playGame.player2" class="text-white text-center mt-5">
            Scegli il Giocatore 2
        </h2>
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
            <FightCard v-for="character in store.characters" :key="character.id" 
            :character="character"
            :imgStartUrl="store.imgStartUrl"
            @click="getPlayer(character.id)"/>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
import FightCard from '../components/FightCard.vue';
import axios from 'axios';
export default {
    name: 'CharactersList',
    components: {
        FightCard
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
        },
        getPlayer(id) {
            if(store.playGame.player1){
                store.playGame.player2 = id
            }
            else{
                store.playGame.player1 = id
            }
            console.log(store.playGame.player1, store.playGame.player2)
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