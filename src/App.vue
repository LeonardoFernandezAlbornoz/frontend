<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { Notivue, Notification, push } from 'notivue';
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterVue />
  <Notivue class="notificaciones" v-slot="item">
    <Notification :item="item" />
  </Notivue>
</template>

<style scoped>
.notificaciones {
  z-index: 10000 !important;
}
</style>
