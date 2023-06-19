<template>
    <div class="my-modal">
        <div class="card d-flex justify-content-center align-items-center mx-auto mt-5">
            <h1>{{ message }} <i class="fa-solid fa-crown text-secondary"></i></h1>
            <hr>
            <div class="pt-5">
                <router-link :to="{name: 'choose'}" class="me-3">
                    <button class="bm-btn">Rigioca</button>
                </router-link>
                <router-link :to="{ name: 'home' }">
                    <button class="bm-btn">Home</button>
                </router-link>
            </div>
           
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