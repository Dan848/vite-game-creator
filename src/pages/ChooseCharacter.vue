<template>
    <!-- Select Player -->
    <div v-if="!store.playGame.player2" class="container">
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
            <div  v-for="character in store.characters" class="mb-5 d-flex justify-content-center align-items-center flex-column col-12 col-md-6 col-lg-4 g-5">
                <div class="charCard" @click.native="getPlayer(character)">
                <CharacterCard 
                :key="character.id" 
                :character="character"
                :imgStartUrl="store.imgStartUrl"
                :isSelected="false"/>
                </div>
            </div>
        </div>
    </div>
    <!-- Select Item -->
    <div v-else class="container">
        <h2 class="text-white text-center mt-5">
            Scegli l'arma da utilizzare
        </h2>
        <div class="row justify-content-between mt-5">
            <div v-for="(character, index) in store.playGame" class="mb-5 d-flex justify-content-center align-items-center flex-column col-12 col-md-6 col-lg-4 g-5">
                <CharacterCard 
                :key="index" 
                :character="character"
                :imgStartUrl="store.imgStartUrl"
                />
                <div>
                    <select v-if="character.items.length !==0" @change="getWeapon()"
                    class="w-100 form-select" name="items" v-model="store.selectedWeapon[index]">
                        <option value="">Scegli l'arma</option>
                        <option v-for="item in character.items" :value="item.id" :key="item.id">
                            {{ item.name }}
                        </option>
                    </select>
                    <div v-else class="text-center text-white">
                        Non possiede Armi
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col text-center">
                <router-link :to="{name: 'home'}">
                    <button class="bm-btn">Play</button>
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
        },
        getPlayer(id) {
            if(store.playGame.player1){
                store.playGame.player2 = id
            }
            else{
                store.playGame.player1 = id
            }
            console.log(store.playGame.player1, store.playGame.player2)
        },
        getWeapon(){
            console.log(store.selectedWeapon)
        }
    },
    mounted() {
        this.getCharacter(1);
        store.playGame.player1 = null;
        store.playGame.player2 = null;
        store.selectedWeapon = [];
    }
}
</script>

<style lang="scss" scoped>
@use '../assets//partials/var.scss' as *;

.container{
    margin-bottom: 5rem;
    .charCard{
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover{
            cursor: pointer;
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