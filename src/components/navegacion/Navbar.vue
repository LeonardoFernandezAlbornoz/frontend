<script>
import Logo from './Logo.vue';
import LogoCarrito from './LogoCarrito.vue';
import BotonesUsuario from './BotonesUsuario.vue';
import BarraBusqueda from './BarraBusqueda.vue';
import BarraCategorias from './BarraCategorias.vue';
import SideBar from './SideBar.vue';
import BotonHamburguesa from './BotonHamburguesa.vue';

export default {
  data() {
    return {
      categorias: '',
      sidebarActive: false,
    };
  },
  components: {
    Logo,
    LogoCarrito,
    BotonesUsuario,
    BarraBusqueda,
    BarraCategorias,
    SideBar,
    BotonHamburguesa,
  },
  methods: {
    toggleSidebar() {
      this.sidebarActive = !this.sidebarActive;
      this.toggleBodyScroll();
    },
    toggleBodyScroll() {
      if (this.sidebarActive) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = 'scroll';
      }
    },
  },

  mounted() {
    fetch('http://127.0.0.1:8000/categorias')
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
          <div class="d-flex col-7 col-sm-5 col-md-4 col-lg-3">
            <BotonHamburguesa
              @toggleSidebar="toggleSidebar"
              class="d-block d-lg-none"
              :sidebarActive="sidebarActive"
            />

            <Logo />
          </div>
          <div
            class="col-md-5 col-lg-4 col-xl-5 order-2 mt-3 mt-md-0 order-md-1"
          >
            <KeepAlive>
              <BarraBusqueda :categorias="categorias" />
            </KeepAlive>
          </div>
          <div
            class="order-1 order-md-2 col d-flex column-gap-3 align-items-center justify-content-end"
          >
            <BotonesUsuario />
            <LogoCarrito />
          </div>
        </div>
        <BarraCategorias
          @toggleSidebar="toggleSidebar"
          class="d-lg-flex d-none"
          :categorias="categorias"
        />
      </div>
    </nav>
    <Teleport to="main" v-if="categorias">
      <SideBar
        @closeSidebar="toggleSidebar"
        :active="sidebarActive"
        :categorias="categorias"
      />
    </Teleport>
  </header>
</template>

<style>
.barra-navegacion {
  padding: 1em;
  background-color: var(--gris-oscuro);
}
</style>
