<template>
  <button
    type="button"
    @click="toggle"
    class="btns-usuario-collapse d-block d-lg-none"
  >
    <font-awesome-icon :icon="['fas', 'user']" style="color: #ffffff" />
  </button>

  <Menu ref="menu" id="overlay_menu" :model="items" :popup="true"></Menu>
</template>

<script>
import Menu from 'primevue/menu';
export default {
  props: ['nombre'],
  components: {
    Menu,
  },
  data() {
    return {};
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
  },
  computed: {
    items() {
      if (!this.nombre) {
        // Si el nombre es nulo
        return [
          {
            icon: 'pi pi-sign-in',
            label: 'Iniciar sesión',
            dataBsToggle: 'modal',
            dataBsTarget: '#iniciarSesionModal', // Abre el modal de inicio de sesión
          },
          {
            icon: 'pi pi-user',
            label: 'Registrarse',
            dataBsToggle: 'modal',
            dataBsTarget: '#registrarseModal', // Abre el modal de registro
          },
        ];
      } else {
        return [
          {
            icon: 'pi pi-user',
            label: 'Perfil',
            to: '/perfil', // Reemplaza '/perfil' con la ruta real a tu perfil
          },
          {
            icon: 'pi pi-sign-out',
            label: 'Cerrar sesión',
          },
        ];
      }
    },
  },
};
</script>

<style>
.btns-usuario-collapse {
  font-size: 25px;
  background: none;
  border: none;
}

@media screen and (max-width: 576px) {
  .btns-usuario-collapse {
    font-size: 20px;
  }
}
#overlay_menu_list {
  padding: 0px;
  margin: 0;
}

#overlay_menu_list * {
  text-decoration: none;
}
</style>
