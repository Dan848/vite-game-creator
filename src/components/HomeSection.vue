<template>
    <div class="wave" v-if="section.inverted"></div>
    <section class="container-fluid" :class="section.inverted ? 'bg-inverted py-5' : 'bm-py-5'">
        <div class="container">
            <div class="align-items-center flex-wrap" :class="section.inverted ? 'd-flex flex-row-reverse' : 'row'">
                <!-- Content Col N.1 -->
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <!-- Div with title and subtitle -->
                    <div class="section-content">
                        <div class="pixel-text">
                            <h2>{{ section.title }}</h2>
                            <p v-if="section.subtitle" class="subtitle">{{ section.subtitle }}</p>
                        </div>

                        <p class="lh-lg">
                            {{ section.content }}
                        </p>
                    </div>

                    <div class="d-flex justify-content-center align-items-center">
                        <router-link v-if="Object.keys(section.routerLink).length" :to="{ name: section.routerLink.href }"
                            class="text-decoration-none bm-btn">
                            <button class="bm-btn">
                                {{ section.routerLink.buttonText }}
                            </button>
                        </router-link>
                    </div>

                </div>

                <!-- Image Col -->
                <div class="col-12 col-md-6 sectionImg-box" :class="section.inverted ? 'pe-5' : 'ps-5'">
                    <img :src="section.image" :alt="section.title" class="img-fluid w-100">
                </div>
            </div>
        </div>
    </section>
    <div class="wave rotate" v-if="section.inverted"></div>
</template>

<script>
export default {
    name: 'HomeSection',
    props: ['section']
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/var.scss' as *;

.bg-inverted {
    background-color: #c0c0c0;
    color: $primary;

    .section-content:hover {
        color: $primary;
    }
}

.section-content:hover {
    transform: scale(1.1);
    color: $secondary;
    transition: 1s;
    cursor: pointer;
}

.wave {
    display: block;
    background-image: url(img/wave.svg);
    height: 100px;
}

.rotate {
    transform: rotate(180deg);
}

.bm-py-5 {
    padding: 5rem 0;
}
</style>