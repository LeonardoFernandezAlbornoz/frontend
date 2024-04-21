<script>
import router from '../../router';
export default {
  props: ['categorias'],
  data() {
    return {
      busqueda: '',
      categoria: '',
    };
  },
  methods: {
    buscar() {
      if (this.busqueda.trim()) {
        router.push({
          path: `/productos/buscar/${this.busqueda}/${this.categoria}`,
        });
      }
    },
  },
};
</script>
<template>
  <form @submit.prevent="buscar">
    <div class="buscador input-group">
      <select class="form-select" v-model="categoria">
        <option value="" selected>Categorías</option>
        <option v-for="categoria in categorias" :value="categoria.descripcion">
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
      <button class="btn btn-light" type="submit" id="boton-buscar">
        <font-awesome-icon icon="fa-solid fa-search" style="color: #272727" />
      </button>
    </div>
  </form>
</template>

<style scoped>
input {
  width: 55% !important;
}

select {
  width: 30% !important;
}
</style>
