<template>
    <div class="col-12 col-md-4 g-4 character-col text-white">
        <div class="p-5">
            <!-- {{ --Character Image-- }} -->
            <div class="image-character-card py-4">
                <img src="/img/knight.png" alt="{{ character.name }}" class="w-100 h-100">
            </div>

            <!-- {{ --Character Name-- }} -->
            <div class="text-center card-name-border card-name-border-gradient">
                <h4 class="fs-2">{{ character.name }}</h4>
            </div>

            <!-- {{ --Character Stats-- }} -->
            <div class="d-flex flex-wrap">
                <!-- {{ --Left Stats with Strength and Defence-- }} -->
                <div class="left-stats w-50">
                    <!-- {{ --Strength --}} -->
                    <div class="w-100 text-center">
                        <img src="/img/sword.png" alt="attack" class="stats-img">
                        <span class="fw-bold fs-5">{{ character.strength }} STR</span>

                    </div>

                    <!-- {{ --Defence --}} -->
                    <div class="w-100 text-center">
                        <img src="/img/shield.png" alt="defence" class="stats-img">
                        <span class="fw-bold fs-5">{{ character.defence }} DEF</span>
                    </div>
                </div>

                <!-- {{ --Riight stats with Speed and Intelligence-- }} -->
                <div class="right-stats w-50">
                    <!-- {{ --Speed --}} -->
                    <div class="w-100 text-center">
                        <img src="/img/speed.png" alt="speed" class="stats-img">
                        <span class="fw-bold fs-5">{{ character.speed }} SPD</span>
                    </div>

                    <!-- {{ --Intelligence --}} -->
                    <div class="w-100 text-center">
                        <img src="/img/brain.png" alt="intelligence" class="stats-img">
                        <span class="fw-bold fs-5">{{ character.intelligence }} INT</span>
                    </div>
                </div>

                <!-- {{ --Central div with life stat-- }} -->
                <div class="w-100 text-center pt-2">
                    <img src="/img/life.png" alt="life" class="stats-img">
                    <span class="fw-bold fs-5">{{ character.life }} LIFE</span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CharacterCard',
    props: ['character']
}
</script>

<style lang="scss" scoped>
.character-col {
    background-image: url('/img/card-bg.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    // Gradient border for card name
    .card-name-border {
        border: 10px solid;
        border-image-slice: 1;
        border-width: 4px;
    }

    .card-name-border-gradient {
        border-image-source: linear-gradient(90deg, rgba(57, 35, 77, 1) 0%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 1) 60%, rgba(57, 35, 77, 1) 100%);
    }

    .image-character-show {
        max-width: 200px;
    }

    .image-character-card {
        height: 2%;
    }

    .stats-img {
        width: 20px;
        filter: invert(1);
        margin-right: .5rem;
    }

    .left-stats {
        border-right: 2px solid;
    }
}
</style>