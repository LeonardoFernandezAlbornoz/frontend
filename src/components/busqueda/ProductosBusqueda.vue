<script>
import Producto from '../generales/Producto.vue';

export default {
  data() {
    return {
      productos: [],
    };
  },

  components: {
    Producto,
  },
  props: ['busqueda', 'categoria'],

  methods: {
    buscarProductos(busqueda) {
      fetch('http://localhost:8000/productos/buscar/' + busqueda)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`${response.status}`);
          }

          return response.json();
        })
        .then((data) => {
          this.productos = data;
        })
        .catch((error) => {
          console.log(`Error al obtener los datos: ${error}`);
        });
    },
  },

  watch: {
    busqueda: function (newBusqueda) {
      this.buscarProductos(newBusqueda);
    },
  },

  computed: {
    productoPorCategoria() {
      if (this.categoria) {
        return this.productos.filter(
          (producto) => producto.categoria.descripcion == this.categoria
        );
      } else {
        return this.productos;
      }
    },
  },

  mounted() {
    this.buscarProductos(this.busqueda);
  },
};
</script>
<template>
  <div class="mx-4 mx-sm-0 productos-categoria row g-3 g-xxl-5">
    <div
      v-for="producto in productoPorCategoria"
      class="col-sm-6 col-md-4 col-xl-3"
    >
      <Producto :productoProp="producto" />
    </div>
  </div>
</template>

<style></style>
