<template>
    <div class="my-modal">
        <div class="card d-flex justify-content-center align-items-center mx-auto mt-5">
            <h1>{{ message }}</h1>
            <router-link :to="{name: 'choose'}">
                <button class="bm-btn">Rigioca</button>
            </router-link>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'GameWinner',
    props: ['message'],
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.my-modal{
    position: absolute;
    width: 100%;
    height: calc(100% + 293px);
    background: rgba($color: #000000, $alpha: .8);
    z-index: 99999;
    .card{
        width: 400px;
        height: 500px;
    }
}
</style>