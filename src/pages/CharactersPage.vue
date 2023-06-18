<template>
    <div>
        <CharactersList />
    </div>
</template>

<script>
import CharactersList from '../components/CharactersList.vue';
export default {
    name: 'CharactersPage',
    components: {
        CharactersList
    }
}
</script>

<style lang="scss" scoped>
main {
    background-image: url("/img/background/dnd-pattern-gray.png");
    background-size: 800px 400px;
    background-repeat: repeat;
    background-blend-mode: multiply;
    // background-color: #ffffff!important;
}
</style>