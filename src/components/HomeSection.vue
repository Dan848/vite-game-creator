<template>
    <div class="wave" v-if="section.inverted"></div>
    <section class="container-fluid" :class="section.inverted ? 'bg-inverted py-5' : 'bm-my-5'">
        <div class="container">
            <div class="align-items-center" :class="section.inverted ? 'd-flex flex-row-reverse' : 'row'">
                <!-- Content Col N.1 -->
                <div class="col">
                    <!-- Div with title and subtitle -->
                    <div>
                        <h2>{{ section.title }}</h2>
                        <p v-if="section.subtitle" class="subtitle">{{ section.subtitle }}</p>
                    </div>

                    <p class="lh-lg">
                        {{ section.content }}
                    </p>

                    <router-link v-if="Object.keys(section.routerLink).length" :to="{ name: section.routerLink.href }"
                        class="btn btn-secondary">{{
                            section.routerLink.buttonText }}</router-link>
                </div>

                <!-- Image Col -->
                <div class="col-6 sectionImg-box" :class="section.inverted ? 'me-5' : 'ms-5'">
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
.bg-inverted {
    background-color: #343A40;
}

.wave {
    display: block;
    background-image: url(img/wave.svg);
    height: 100px;
}

.rotate {
    transform: rotate(180deg);
}

.bm-my-5 {
    margin: 5rem 0;
}
</style>