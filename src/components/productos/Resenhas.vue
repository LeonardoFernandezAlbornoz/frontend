<script>
import Resenha from "./Resenha.vue";
export default {
  props: ["nomProducto"],
  data() {
    return {
      resenhas: [],
    };
  },
  watch: {
    nomProducto: function (nomProducto) {
      this.cargarResenhas(nomProducto);
    },
  },
  mounted() {
    this.cargarResenhas(this.nomProducto);
  },
  methods: {
    cargarResenhas(nomProducto) {
      fetch("http://localhost:8000/resenhas/" + nomProducto)
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
  },
  components: {
    Resenha,
  },
};
</script>
<template>
  <div class="contenedor-resenhas p-5">
    <h4>
      Reseñas <span>({{ resenhas.length }})</span>
    </h4>
    <hr />
    <div>
      <Resenha v-for="resenha in resenhas" :resenhaProp="resenha"></Resenha>
    </div>
  </div>
</template>

<style>
.contenedor-resenhas {
  height: 350px;
  box-shadow: var(--sombra-cajas);
  background-color: white;
}
</style>
