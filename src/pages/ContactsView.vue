<template>
  <div class="container">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Email address</label
      >
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Inserisci la tua email"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Example textarea</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button class="btn bm-btn me-md-2" type="reset">Cancella</button>
      <button class="btn bm-btn" type="submit">Invia</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsView",
};
</script>

<style lang="scss" scoped>
@use "../assets/partials/var.scss" as *;
</style>
