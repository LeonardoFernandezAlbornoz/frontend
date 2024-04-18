<script setup>
import TituloBusqueda from '../components/busqueda/TituloBusqueda.vue';
import ProductosBusqueda from '../components/busqueda/ProductosBusqueda.vue';
</script>

<template>
  <main>
    <div class="container-lg">
      <TituloBusqueda :busqueda="$route.params.busqueda" />
      <ProductosBusqueda :busqueda="$route.params.busqueda" />
    </div>
  </main>
</template>
