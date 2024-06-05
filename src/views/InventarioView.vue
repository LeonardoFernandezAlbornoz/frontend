<script setup>
import TituloPagina from '@/components/generales/TituloPagina.vue';
import Ruta from '@/components/navegacion/Ruta.vue';
import TablaProductos from '@/components/panelGestion/TablaProductos.vue';
import AnhadirProducto from '@/components/modales/AnhadirProducto.vue';
</script>

<template>
  <main>
    <Ruta
      :rutas="[
        {
          to: {
            name: 'panelGestion',
          },
          texto: 'Panel de gestión',
        },
        {
          to: {
            name: 'gestionInventario',
          },
          texto: 'Gestión de inventario',
        },
      ]"
    />
    <div class="container-lg px-4 px-lg-0">
      <TituloPagina :titulo="'Gestión de inventario'"></TituloPagina>
      <TablaProductos></TablaProductos>
    </div>
  </main>
  <AnhadirProducto></AnhadirProducto>
</template>
