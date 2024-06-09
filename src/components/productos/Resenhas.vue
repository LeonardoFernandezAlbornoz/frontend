<script>
import Resenha from './Resenha.vue';
import FormularioResenha from './FormularioResenha.vue';
export default {
  props: ['idProducto'],
  data() {
    return {
      resenhas: [],
      oculto: true,
    };
  },
  watch: {
    idProducto: function (idProducto) {
      this.cargarResenhas(idProducto);
    },
  },
  mounted() {
    this.cargarResenhas(this.idProducto);
  },
  methods: {
    cargarResenhas(idProducto) {
      fetch(this.backend + '/resenhas/' + idProducto)
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
          console.error(`Error al obtener los datos: ${error}`);
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
  <div class="contenedor-resenhas py-5 px-4 px-sm-5">
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
        <font-awesome-icon icon="fa-solid fa-angle-up" />
      </button>
    </div>
    <div class="resenhas" :class="{ expandir: !oculto }">
      <hr />
      <Resenha v-for="resenha in resenhas" :resenhaProp="resenha"></Resenha>
    </div>
    <FormularioResenha
      @cargarResenhas="cargarResenhas"
      v-if="this.$cookies.get('token')"
      :idProducto="idProducto"
    />
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
  transition: max-height 0.2s ease-in-out;
}

.expandir {
  max-height: 800vh;
}
.cabecera-resenhas button {
  background: none;
  border: 0;
  transition: transform ease 0.2s;
}
.fa-angle-up {
  font-size: 30px;
  color: var(--gris-oscuro);
}
</style>
