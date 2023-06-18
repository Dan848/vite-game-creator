<template>
    <div v-if="store.characters">
        <CharactersList />
    </div>
    <div v-else>
        <LoaderComponent />
    </div>
</template>

<script>
import CharactersList from '../components/CharactersList.vue';
import LoaderComponent from "../components/LoaderComponent.vue";
import { store } from "../data/store";
export default {
    name: 'CharactersPage',
    components: {
        CharactersList,
        LoaderComponent
    },
    data() {
        return {
            store,
        };
    },
    mounted() {
        store.characters = null;
    }
}
</script>

<style lang="scss" scoped>
</style>