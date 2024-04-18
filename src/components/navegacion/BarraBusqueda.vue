<script>
export default {
  props: ['categorias'],
  data() {
    return {
      busqueda: '',
    };
  },
};
</script>
<template>
  <div class="buscador input-group">
    <select class="form-select">
      <option value="" selected disabled>Categorías</option>
      <option v-for="categoria in categorias" :value="categoria.id">
        {{
          categoria.descripcion.charAt(0).toUpperCase() +
          categoria.descripcion.slice(1)
        }}
      </option>
    </select>
    <input
      v-model="busqueda"
      type="text"
      class="form-control"
      placeholder="Buscar producto..."
    />
    <a
      :href="'/productos/buscar/' + busqueda"
      class="btn btn-light"
      type="button"
      id="boton-buscar"
    >
      <font-awesome-icon icon="fa-solid fa-search" style="color: #272727" />
    </a>
  </div>
</template>

<style scoped>
input {
  width: 55% !important;
}

select {
  width: 30% !important;
}
</style>
