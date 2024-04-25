<script>
export default {
  props: ['nomCategoria'],
};
</script>
<template>
  <h2 class="titulo-categoria">
    {{ nomCategoria }}
  </h2>
</template>

<style scoped>
.titulo-categoria {
  padding: 0.3em 0.8em 0.3em 0.8em;
  margin-bottom: 1.5em;
  margin-top: 1em;
  border-left: solid 4px var(--color-secundario-naranja);
  background: transparent;
  font-size: 38px;
  font-weight: bold;
}
</style>
