<script>
export default {
  props: ['nomProducto'],
  data() {
    return {
      imagen: '',
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
        this.imagen = data.imagen;
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
    <div
      class="producto-imagen-detalle"
      :style="{
        'background-image': 'url(/img/productos/' + imagen + ')',
      }"
    ></div>
  </div>
</template>

<style scoped>
.img-producto-detalle {
  background-color: white;
  height: 500px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.producto-imagen-detalle {
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
