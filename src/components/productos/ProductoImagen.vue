<script>
export default {
  props: ['nomProducto'],
  data() {
    return {
      producto: '',
    };
  },

  mounted() {
    fetch('http://localhost:8000/producto/' + this.nomProducto)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.producto = data;
      })
      .catch((error) => {
        console.log(`Error al obtener los datos: ${error}`);
      });
  },
};
</script>
<template>
  <div
    class="img-producto-detalle p-5 d-flex justify-content-center align-items-center"
  >
    <div v-if="producto.descuento !== 0" class="descuento">
      <span>-{{ producto.descuento }}%</span>
    </div>
    <div
      class="producto-imagen-detalle"
      :style="{
        'background-image': 'url(/img/productos/' + producto.imagen + ')',
      }"
    ></div>
  </div>
</template>

<style scoped>
.img-producto-detalle {
  background-color: white;
  height: 500px;
  position: relative;
  overflow: hidden;
  box-shadow: var(--sombra-cajas);
}

.producto-imagen-detalle {
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
