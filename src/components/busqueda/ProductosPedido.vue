<script>
import ProductoPedido from '../generales/ProductoPedido.vue';

export default {
  components: {
    ProductoPedido,
  },
  data() {
    return {
      productosPedido: [],
    };
  },
  mounted() {
    this.cargarProductosPedido();
  },
  methods: {
    cargarProductosPedido() {
      fetch(this.backend + '/pedido/productos/' + $route.params.idPedido)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
          return response;
        })
        .then((data) => data.json())
        .then((data) => {
          this.productosPedido = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<template>
  <div></div>
</template>

<style></style>
