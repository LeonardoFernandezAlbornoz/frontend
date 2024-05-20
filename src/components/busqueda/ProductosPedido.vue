<script>
import ProductoPedido from '../generales/ProductoPedido.vue';

export default {
  props: ['idPedido'],
  components: {
    ProductoPedido,
  },
  data() {
    return {
      productosPedido: [],
      pedido: '',
      
    };
  },
  mounted() {
    this.cargarProductosPedido();
  },
  methods: {
    cargarProductosPedido() {
      fetch(this.backend + '/pedido/productos/' + this.idPedido)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
          return response;
        })
        .then((data) => data.json())
        .then((data) => {
          this.productosPedido = data;
          this.pedido = data[0].pedido;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    total() {
      return this.productosPedido.reduce((accum, valor) => {
        accum += Number(
          (valor.precio - (valor.precio / 100) * valor.descuento) *
            valor.cantidad
        );
        return accum;
      }, 0);
    },
  },
};
</script>
<template>
  <div class="row">
    <div class="col-md-8 order-2 order-md-1">
      <ProductoPedido
        v-for="productoPedido in productosPedido"
        :productoPedido="productoPedido"
      ></ProductoPedido>
      <hr class="my-4" />
      <p><b>Total:</b> {{ total.toFixed(2) }}€</p>
      <p><b>Gastos de envío: </b>{{ pedido.gastosEnvio }}€</p>
      <hr class="my-4" />
      <p class="precio-final">
        <b>Precio final: </b
        >{{ Number(total.toFixed(2)) + Number(this.pedido.gastosEnvio) }}€
      </p>
    </div>
    <div class="offset-md-1 col-md order-1 order-md-2">
      <div class="datos-pedido">
        <p><b>Estado:</b></p>
        <p class="mb-4">{{ this.pedido.estado }}</p>
        <p><b>Fecha de realización:</b></p>
        <p class="mb-4 mb-md-0">
          {{ new Date(this.pedido.fecha).toLocaleDateString() }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.datos-pedido {
  font-size: 18px;
}

.datos-pedido p {
  margin: 0;
}
.precio-final {
  font-size: 25px;
}
</style>
