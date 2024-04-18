<script>
import Producto from '../generales/Producto.vue';
import Ruta from '../navegacion/Ruta.vue';

export default {
  data() {
    return {
      productos: '',
    };
  },

  components: {
    Producto,
  },
  props: ['nomCategoria'],
  mounted() {
    fetch('http://localhost:8000/productos/categoria/' + this.nomCategoria)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
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
};
</script>
<template>
  <div class="mx-4 mx-sm-0 productos-categoria row g-3">
    <div v-for="producto in productos" class="col-sm-6 col-md-4 col-xl-3">
      <Producto :productoProp="producto"></Producto>
    </div>
  </div>
</template>

<style></style>
