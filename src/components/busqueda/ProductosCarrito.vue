<script>
import ProductoCarrito from '../generales/ProductoCarrito.vue';
import { jwtDecode } from 'https://unpkg.com/jwt-decode@4.0.0?module';
export default {
  components: {
    ProductoCarrito,
  },
  data() {
    return {
      productosCarrito: [],
      token: this.$cookies.get('token'),
    };
  },

  mounted() {
    this.cargarProuductoCarrito();
  },

  methods: {
    anhadirProductoCarrito(idUsuario, idProducto, cantidad) {
      fetch(
        `${this.backend}/productocarrito/crear/${idUsuario}/${idProducto}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            cantidad: cantidad,
          }),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.status);
          }

          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cargarProuductoCarrito() {
      if (this.token) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
        console.log(this.usuario);
        for (const producto of carrito) {
          this.anhadirProductoCarrito(
            this.usuario.id,
            producto.producto.id,
            producto.cantidad
          );
        }
        fetch(`${this.backend}/carrito/usuario/${this.usuario.id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.status);
            }

            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.productosCarrito = data;
          })
          .catch((error) => {
            console.log(error);
          });

        localStorage.removeItem('carrito');
      } else {
        this.productosCarrito = JSON.parse(localStorage.getItem('carrito'));
      }
    },
  },
  computed: {
    total() {
      return this.productosCarrito.reduce((accum, valor) => {
        accum += Number(
          (valor.producto.precio -
            (valor.producto.precio / 100) * valor.producto.descuento) *
            valor.cantidad
        );
        return accum;
      }, 0);
    },
    usuario() {
      return this.token ? jwtDecode(this.token) : '';
    },
  },
};
</script>
<template>
  <div>
    <div class="row">
      <div class="col-lg-7">
        <ProductoCarrito
          @actualizarProductos="cargarProuductoCarrito"
          v-for="productoCarrito in productosCarrito"
          :productoCarrito="productoCarrito"
        ></ProductoCarrito>
      </div>
      <div class="col-lg-5">
        <div class="detalles-carrito py-4 px-4 px-sm-5">
          <h3>Resumen</h3>
          <div class="d-flex justify-content-between my-4">
            <p><b>Subtotal: </b></p>
            <p>{{ total.toFixed(2) }}€</p>
          </div>
          <hr class="mb-4" />
          <button class="btn-finalizar-compra">Finalizar compra</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.detalles-carrito {
  background-color: white;
  width: 100%;
  box-shadow: var(--sombra-cajas);
}
.btn-finalizar-compra {
  width: 100%;
  border: none;
  background: var(--degradado-naranja);
  color: white;
  font-weight: bold;
  padding: 0.7em;
  font-size: 18px;
  transition: filter 0.2s ease;
}

.btn-finalizar-compra:hover {
  filter: brightness(110%);
}
</style>
