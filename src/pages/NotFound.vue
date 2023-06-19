<template>
    <div class="container d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 class="text-center">La URL digitata non esiste nel nostro sito.</h1>
        <h2 class="text-center">Sarai reindirizzato alla home.</h2>
        <img src="/img/d20icon.png" alt="Icon">
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    data() {
        return {
            
        }
    },
    methods: {
        getRedirected() {
            setTimeout(() => {
                this.$router.push('/');
            }, 3000);
        }
    },
    mounted() {
        this.getRedirected();
    }
}
</script>

<style lang="scss" scoped>
.container{
    img{
      width: 100px;
      height: 100px;
      animation: rotate-infinite 3s linear infinite;
    }
}
@keyframes rotate-infinite {
  from {
    transform: rotate(0deg); /* Angolo di partenza */
  }
  to {
    transform: rotate(360deg); /* Angolo finale */
  }
}
</style>