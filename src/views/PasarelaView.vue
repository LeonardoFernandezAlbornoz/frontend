<script setup>
import DetallesPedido from '@/components/pasarelaPago/DetallesPedido.vue';
import Ruta from '@/components/navegacion/Ruta.vue';
</script>

<template>
  <main>
    <Ruta
      :rutas="[
        {
          to: {
            name: 'pasarela',
          },
          texto: 'Pasarela de pago',
        },
      ]"
    />
    <div class="container-lg px-4 px-lg-0 mt-5">
      <div class="row">
        <DetallesPedido></DetallesPedido>
      </div>
    </div>
  </main>
</template>
