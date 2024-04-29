<script>
import Resenha from "./Resenha.vue";
import FormularioResenha from "./FormularioResenha.vue";
export default {
  props: ["nomProducto"],
  data() {
    return {
      resenhas: [],
      oculto: true,
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
    FormularioResenha,
  },
};
</script>
<template>
  <div class="contenedor-resenhas p-5">
    <div
      class="cabecera-resenhas d-flex justify-content-between align-items-center"
    >
      <h4>
        Reseñas <span>({{ resenhas.length }})</span>
      </h4>
      <button
        v-if="resenhas.length"
        @click="oculto = !oculto"
        :class="{ arriba: oculto }"
      >
        <font-awesome-icon icon="fa-solid fa-angle-down" />
      </button>
    </div>
    <div class="resenhas" :class="{ expandir: !oculto }">
      <hr />
      <Resenha v-for="resenha in resenhas" :resenhaProp="resenha"></Resenha>
    </div>
    <FormularioResenha />
  </div>
</template>

<style>
.contenedor-resenhas {
  min-height: auto;
  box-shadow: var(--sombra-cajas);
  background-color: white;
}
.arriba {
  transform: rotate(180deg);
}

.resenhas {
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}

.expandir {
  max-height: 800vh;
}
.cabecera-resenhas button {
  background: none;
  border: 0;
  transition: transform ease 0.3s;
}
.fa-angle-down {
  font-size: 30px;
  color: var(--gris-oscuro);
}
</style>
