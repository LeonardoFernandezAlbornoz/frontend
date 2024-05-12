<script setup>
import Ruta from '@/components/navegacion/Ruta.vue';
</script>

<template>
  <main>
    <Ruta
      :rutas="[
        { to: { name: 'perfil' }, texto: 'Perfil' },
        {
          to: {
            name: 'pedido',
            params: { idPedido: $route.params.idPedido },
          },
          texto: 'Pedido',
        },
      ]"
    />
  </main>
</template>
