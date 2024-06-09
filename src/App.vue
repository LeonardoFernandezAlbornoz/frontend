<script>
import { jwtDecode } from 'https://unpkg.com/jwt-decode@4.0.0?module';
import { RouterLink, RouterView } from 'vue-router';
import { Notivue, Notification, NotificationProgress } from 'notivue';

export default {
  components: {
    Notivue,
    Notification,
    NotificationProgress,
    RouterView,
  },
  data() {
    return {
      numProductos: 0,
      token: '',
    };
  },
  mounted() {
    this.token = this.$cookies.get('token');
    this.cargarProductosCarrito();
  },
  methods: {
    cargarProductosCarrito() {
      this.token = this.$cookies.get('token');
      if (this.$cookies.get('token')) {
        fetch(`${this.backend}/carrito/usuario/${this.usuario.id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.status);
            }

            return response.json();
          })
          .then((data) => {
            this.numProductos = data.reduce((accum, value) => {
              return (accum += value.cantidad);
            }, 0);
          })
          .catch((error) => {
            console.error(error);
          });

        localStorage.removeItem('carrito');
      } else if (localStorage.getItem('carrito')) {
        this.numProductos = JSON.parse(localStorage.getItem('carrito')).reduce(
          (accum, value) => {
            return (accum += value.cantidad);
          },
          0
        );
        console.log(this.numProductos);
      } else {
        this.numProductos = 0;
      }
    },
  },
  computed: {
    usuario() {
      return this.token ? jwtDecode(this.$cookies.get('token')) : '';
    },
  },
};
</script>

<template>
  <Navbar
    @login="cargarProductosCarrito"
    @logout="cargarProductosCarrito"
    :numProductos="numProductos"
  />
  <RouterView
    @actualizarProductos="cargarProductosCarrito"
    @anhadirProducto="cargarProductosCarrito"
  />
  <FooterVue />
  <Notivue class="notificaciones" v-slot="item">
    <Notification :item="item">
      <NotificationProgress :item="item"
    /></Notification>
  </Notivue>
  <div class="d-block d-lg-none">
    <SideBar />
  </div>
</template>

<style>
.notificaciones {
  z-index: 10000000 !important;
}
</style>
