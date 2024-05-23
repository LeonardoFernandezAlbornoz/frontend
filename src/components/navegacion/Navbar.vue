<script>
import Logo from './Logo.vue';
import LogoCarrito from './LogoCarrito.vue';
import Sesion from './Sesion.vue';
import BarraBusqueda from './BarraBusqueda.vue';
import BarraCategorias from './BarraCategorias.vue';
import BotonHamburguesa from './BotonHamburguesa.vue';
import { jwtDecode } from 'https://unpkg.com/jwt-decode@4.0.0?module';

export default {
  data() {
    return {
      categorias: '',
      productosCarrito: [],
      token: this.$cookies.get('token'),
    };
  },
  components: {
    Logo,
    LogoCarrito,
    Sesion,
    BarraBusqueda,
    BarraCategorias,
    BotonHamburguesa,
  },
  methods: {
    cargarProuductoCarrito() {
      if (this.$cookies.get('token')) {
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
      } else if (localStorage.getItem('carrito')) {
        this.productosCarrito = JSON.parse(localStorage.getItem('carrito'));
      }
    },
  },

  mounted() {
    fetch(this.backend + '/categorias')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error:${response.status}`);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        this.categorias = data;
      })
      .catch((error) => {
        console.log(`Error al obtener los datos: ${error}`);
      });
    this.cargarProuductoCarrito();
  },
  computed: {
    numProductos() {
      return this.productosCarrito && this.productosCarrito.length
        ? this.productosCarrito.reduce((accum, productoCarrito) => {
            return accum + productoCarrito.cantidad;
          }, 0)
        : 0;
    },

    usuario() {
      return this.token ? jwtDecode(this.token) : '';
    },
  },
};
</script>
<template>
  <header>
    <nav class="barra-navegacion position-absoluteS pb-lg-0">
      <div class="container-xl">
        <div class="row align-items-center">
          <div class="d-flex col-9 col-sm-6 col-md-4 col-lg-3">
            <Logo />
          </div>
          <div
            class="text-center col-md-6 col-lg-4 col-xl-5 order-2 mt-3 mt-md-0 order-md-1"
          >
            <BarraBusqueda :categorias="categorias" />
          </div>
          <div
            class="order-1 order-md-2 col-3 col-sm-6 col-md d-flex column-gap-3 align-items-center justify-content-end"
          >
            <Sesion />
            <LogoCarrito :numProductos="numProductos" />
          </div>
        </div>
        <BarraCategorias />
      </div>
    </nav>
  </header>
</template>

<style>
.barra-navegacion {
  padding: 1em;
  background-color: var(--gris-oscuro);
}
</style>
