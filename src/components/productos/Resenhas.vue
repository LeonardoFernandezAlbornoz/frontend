<script>
export default {
  props: ['nomProducto'],
  data() {
    return {
      resenhas: [],
    };
  },
  mounted() {
    fetch('http://localhost:8000/resenhas/' + this.nomProducto)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.resenhas = data;
      })
      .catch((error) => {
        console.log(`Error al obtener los datos: ${error}`);
      });
  },
};
</script>
<template>
  <div class="contenedor-resenhas p-5">
    <h4>
      Reseñas <span>({{ resenhas.length }})</span>
    </h4>
    <hr />
    <div></div>
  </div>
</template>

<style>
.contenedor-resenhas {
  height: 350px;
  box-shadow: var(--sombra-cajas);
  background-color: white;
}
</style>
