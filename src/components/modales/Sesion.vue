<script>
import { jwtDecode } from 'https://unpkg.com/jwt-decode@4.0.0?module';
import { push } from 'notivue';
import IniciarSesion from '../modales/IniciarSesion.vue';
import Registrarse from '../modales/Registrarse.vue';
import BotonesInvitado from './BotonesInvitado.vue';
import BotonesUsuario from './BotonesUsuario.vue';
import MenuUsuario from './MenuUsuario.vue';
import router from '../../router';

export default {
  components: {
    IniciarSesion,
    Registrarse,
    BotonesInvitado,
    BotonesUsuario,
    MenuUsuario,
  },
  data() {
    return {
      token: this.$cookies.get('token'),
    };
  },
  computed: {
    sesionIniciada() {
      return this.token != null;
    },
    usuario() {
      return this.token ? jwtDecode(this.token) : '';
    },
  },
  methods: {
    logout() {
      $cookies.remove('token');
      this.token = this.$cookies.get('token');
      router.push('/');
      setTimeout(() => {
        router.go(-1);
      }, 400);
      push.info({ message: 'Has cerrado sesión' });
    },
    login() {
      router.push('/');
      setTimeout(() => {
        router.go(-1);
      }, 400);
      this.token = this.$cookies.get('token');
    },
  },
};
</script>

<template>
  <component
    :nombre="usuario.nombre ?? null"
    @logout="logout"
    :is="sesionIniciada ? 'BotonesUsuario' : 'BotonesInvitado'"
  ></component>

  <MenuUsuario
    class="d-lg-none"
    @logout="logout"
    :nombre="usuario.nombre ?? null"
  />
  <IniciarSesion @login="login" />
  <Registrarse />
</template>
<style scoped></style>
