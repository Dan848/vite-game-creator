<template>
    <div class="container mt-5">
        <div class="row">
            <!-- First character -->
            <div class="col-4">
                <h3 class="pixel-text text-center">CharacterName</h3>
                <div>
                    <img src="img/type-gif/barbarian.gif" alt="characterOne" class="w-100 h-100">
                </div>

                <!-- Character Content -->
                <div class="character-content mt-5">

                    <!-- Character Type -->
                    <div class="character-type">
                        <h4 class="pixel-text text-center">
                            <!-- Here Goes character type -->
                            Barbarian
                        </h4>
                    </div>

                    <!-- List of Character Items -->
                    <div class="character-items">
                        <h5 class="pixel-text text-center">Items</h5>
                        <ul>
                            <!-- Here goes li elements that cycle for every item -->
                        </ul>
                    </div>


                </div>

            </div>

            <!-- Versus image -->
            <div class="col-4">
                <img src="https://media3.giphy.com/media/TiJfX5nRSnvshdijyb/giphy.gif?cid=6c09b9528rfwmlhyl622lwh4g81ek7hrpgfsxof2l718oqsr&ep=v1_stickers_related&rid=giphy.gif&ct=ts"
                    alt="versusImage">
            </div>

            <!-- Second character -->
            <div class="col-4">
                <h3 class="pixel-text text-center">CharacterName</h3>
                <div>
                    <img src="img/type-gif/wizard.gif" alt="characterOne" class="w-100 h-100">
                </div>

                <!-- Character Content -->
                <div class="character-content mt-5">

                    <!-- Character Type -->
                    <div class="character-type">
                        <h4 class="pixel-text text-center">
                            <!-- Here Goes character type -->
                            Wizard
                        </h4>
                    </div>

                    <!-- List of Character Items -->
                    <div class="character-items">
                        <h5 class="pixel-text text-center">Items</h5>
                        <ul>
                            <!-- Here goes li elements that cycle for every item -->
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VersusView'
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/var.scss' as *;

h3,
h4 {
    color: $success;

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
        color: $secondary;
    }
}
</style>