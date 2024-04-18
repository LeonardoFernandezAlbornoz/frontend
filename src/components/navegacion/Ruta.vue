<script>
export default {
  props: ['ruta'],
};
</script>
<template>
  <div class="container-xl">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/"><font-awesome-icon icon="fa-solid fa-house" /></a>
        </li>
        <li class="breadcrumb-item">
          <a :href="'/productos/categoria/' + ruta">{{
            ruta.charAt(0).toUpperCase() + ruta.slice(1)
          }}</a>
        </li>
      </ol>
    </nav>
  </div>
  <hr class="mb-4" />
</template>

<style scoped>
ol,
hr {
  margin: 0 !important;

  font-size: 14px;
}
nav {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

a {
  text-decoration: none;
  color: gray;
}

a:hover {
  text-decoration: underline;
}
</style>
