<script>
import { jwtDecode } from 'https://unpkg.com/jwt-decode@4.0.0?module';

export default {
  props: ['productoCarrito'],

  data() {
    return {
      cantidad: this.productoCarrito.cantidad,
      token: this.$cookies.get('token'),
    };
  },

  computed: {
    usuario() {
      return this.token ? jwtDecode(this.token) : '';
    },
  },
  methods: {
    actualizarCarrito() {
      if (this.$cookies.get('token')) {
        fetch(
          `${this.backend}/productocarrito/crear/${this.usuario.id}/${this.productoCarrito.producto.id}`,
          {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              cantidad: this.cantidad,
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
      } else {
        if (!localStorage.getItem('carrito')) {
          localStorage.setItem('carrito', JSON.stringify([]));
        }

        let carrito = JSON.parse(localStorage.getItem('carrito'));

        if (
          carrito.findIndex(
            (productoCarrito) =>
              productoCarrito.producto.id == this.productoCarrito.producto.id
          ) !== -1
        ) {
          carrito[
            carrito.findIndex(
              (productoCarrito) =>
                productoCarrito.producto.id == this.productoCarrito.producto.id
            )
          ].cantidad = this.cantidad;
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
      }
    },
  },
};
</script>
<template>
  <div class="d-block producto-carrito mb-3 py-2 pb-4 pb-md-2 px-4">
    <div class="row">
      <div class="col-6 col-md-3">
        <img
          style="max-height: 100px"
          :src="'img/productos/' + productoCarrito.producto.imagen"
          alt="img-producto-carrito"
        />
      </div>
      <div
        class="order-2 order-md-1 col-md-6 d-flex justify-content-center flex-column"
      >
        <router-link
          :to="{
            name: 'producto',
            params: {
              nomProducto: productoCarrito.producto.nombre,
              nomCategoria: productoCarrito.producto.categoria.descripcion,
            },
          }"
        >
          <p class="mb-1">{{ productoCarrito.producto.nombre }}</p>
          <div class="d-flex column-gap-3 align-items-center">
            <p class="precio">
              <b
                :class="{
                  descuentoProductoCarrito: productoCarrito.producto.descuento,
                }"
                >{{
                  (
                    productoCarrito.producto.precio -
                    (productoCarrito.producto.precio / 100) *
                      productoCarrito.producto.descuento
                  ).toFixed(2)
                }}€</b
              >
            </p>
            <p
              v-if="productoCarrito.producto.descuento"
              class="precio-original"
            >
              {{ productoCarrito.producto.precio }}€
            </p>
          </div>
        </router-link>
      </div>
      <div class="order-1 order-md-2 col-6 col-md-3 d-flex align-items-center">
        <div class="d-flex column-gap-3 align-items-center">
          <button @click="eliminarProducto" class="btn-eliminar-producto">
            <font-awesome-icon icon="fa-regular fa-trash-can" />
          </button>
          <input
            @change="actualizarCarrito"
            v-model.number="cantidad"
            class="form-control"
            id="cantidad"
            type="number"
            min="1"
            :max="productoCarrito.producto.stock"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.producto-carrito {
  background-color: white;
  text-decoration: none;
  box-shadow: var(--sombra-cajas);
}
.producto-carrito p {
  margin: 0;
}

.producto-carrito * {
  color: var(--gris-oscuro);
  text-decoration: none;
}
.precio-original {
  text-decoration: line-through;
  font-size: 13px;
}
.precio {
  font-size: 18px;
}

.descuentoProductoCarrito {
  color: var(--color-secundario-naranja);
}
.btn-eliminar-producto {
  background: none;
  border: none;
  font-size: 22px;
  color: var(--gris-oscuro);
}
</style>