<script>
import Logo from './Logo.vue';
import LogoCarrito from './LogoCarrito.vue';
import Sesion from '../modales/Sesion.vue';
import BarraBusqueda from './BarraBusqueda.vue';
import BarraCategorias from './BarraCategorias.vue';
import BotonHamburguesa from './BotonHamburguesa.vue';

export default {
  data() {
    return {
      categorias: '',
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
  methods: {},

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
  },
};
</script>
<template>
  <header>
    <nav class="barra-navegacion">
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
            <LogoCarrito />
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
