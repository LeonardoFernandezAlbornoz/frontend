<script>
import BotonHamburguesa from './BotonHamburguesa.vue';
export default {
  props: ['categorias'],
};
</script>
<template>
  <div class="mt-3 column-gap-5">
    <router-link
      v-for="categoria in categorias"
      :to="{
        name: 'categoria',
        params: { nomCategoria: categoria.descripcion },
      }"
      >{{
        categoria.descripcion.charAt(0).toUpperCase() +
        categoria.descripcion.slice(1)
      }}
    </router-link>
  </div>
</template>

<style scoped>
a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--color-secundario-naranja);
}
</style>
