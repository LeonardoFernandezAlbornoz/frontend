<script setup>
import ProductosCategoria from '../components/busqueda/ProductosCategoria.vue';
import NombreCategoria from '../components/busqueda/NombreCategoria.vue';
import Ruta from '@/components/navegacion/Ruta.vue';
</script>

<template>
  <main>
    <Ruta :ruta="$route.params.nomCategoria" />
    <div class="container-lg bg-transparent">
      <NombreCategoria
        :nomCategoria="
          $route.params.nomCategoria.charAt(0).toUpperCase() +
          $route.params.nomCategoria.slice(1)
        "
      >
      </NombreCategoria>
      <ProductosCategoria
        :nomCategoria="$route.params.nomCategoria"
      ></ProductosCategoria>
    </div>
  </main>
</template>
