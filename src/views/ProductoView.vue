<script setup>
import ProductoImagen from '@/components/productos/ProductoImagen.vue';
import ProductoDetalle from '@/components/productos/ProductoDetalle.vue';
import Ruta from '@/components/navegacion/Ruta.vue';
</script>

<template>
  <main>
    <Ruta
      :rutas="[
        {
          to: {
            name: 'categoria',
            params: { nomCategoria: 'Smartphones' },
          },
          texto: 'Samrtphones',
        },

        {
          to: {
            name: 'producto',
            params: { nomProducto: $route.params.nomProducto },
          },
          texto: $route.params.nomProducto,
        },
      ]"
    />
    <div class="container-lg">
      <div class="row mt-4 gx-xxl-5">
        <div class="col-7">
          <ProductoImagen :nomProducto="$route.params.nomProducto" />
        </div>
        <div class="col-5">
          <ProductoDetalle :nomProducto="$route.params.nomProducto" />
        </div>
      </div>
    </div>
  </main>
</template>
