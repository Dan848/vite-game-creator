<template>
  <div>
    <div id="loading-wrapper" class="d-flex justify-content-center align-items-center">
      <div id="loading-text" class="d-flex flex-column align-items-center">
        <h1 class="text-center">LOADING</h1>
        <img src="/img/d20icon.png" alt="Icon">
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "LoaderApp",
};
</script>

<style lang="scss" scoped>
@use "../assets/partials/var.scss" as *;

#loading-wrapper{
  background-image: url('/public/img/background/dnd-pattern-gray.png');
  background-size: contain;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  #loading-text{
    img{
      width: 100px;
      height: 100px;
      animation: rotate-infinite 3s linear infinite;
    }
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
