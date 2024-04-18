<script>
export default {
  props: ['busqueda'],
};
</script>
<template>
  <div class="resultados-mensaje">
    <p>Resultados encontrados para</p>
    <p>
      <b>"{{ busqueda }}"</b>
    </p>
  </div>
</template>

<style>
.resultados-mensaje {
  font-size: 19px;
}
</style>
