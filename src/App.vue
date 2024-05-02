<script setup>
import { RouterLink, RouterView } from 'vue-router';
import {
  Notivue,
  Notification,
  NotificationProgress,
  materialTheme,
} from 'notivue';
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterVue />
  <Notivue class="notificaciones" v-slot="item">
    <Notification :item="item" :theme="materialTheme">
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
