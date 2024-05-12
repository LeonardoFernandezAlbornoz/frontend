<script>
import Pedido from '../generales/Pedido.vue';
export default {
  components: {
    Pedido,
  },
  data() {
    return {
      pedidos: [],
    };
  },

  methods: {
    cargarPedidos() {
      fetch(this.backend + '/pedidos/usuario', {
        headers: {
          Authorization: this.$cookies.get('token'),
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
          return response;
        })
        .then((data) => data.json())
        .then((data) => {
          this.pedidos = data;

          return data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.cargarPedidos();
  },
};
</script>
<template>
  <div class="pedidos-usuario mt-3">
    <Pedido v-for="pedido in pedidos" class="mb-3" :pedido="pedido" />
  </div>
</template>

<style scoped></style>
