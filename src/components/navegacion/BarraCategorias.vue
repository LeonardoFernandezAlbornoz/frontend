<script>
export default {};
</script>
<template>
  <div class="d-lg-flex d-none mt-3 justify-content-evenly">
    <router-link
      :to="{
        name: 'categoria',
        params: { nomCategoria: 'ordenadores' },
      }"
      >Ordenadores
    </router-link>
    <router-link
      :to="{
        name: 'categoria',
        params: { nomCategoria: 'Smartphones' },
      }"
      >Smartphones
    </router-link>
    <router-link
      :to="{
        name: 'categoria',
        params: { nomCategoria: 'componentes' },
      }"
      >Componentes
    </router-link>
    <router-link
      :to="{
        name: 'categoria',
        params: { nomCategoria: 'televisores' },
      }"
      >Televisores
    </router-link>

    <router-link
      :to="{
        name: 'categoria',
        params: { nomCategoria: 'televisores' },
      }"
      >Monitores
    </router-link>
    <router-link
      :to="{
        name: 'categoria',
        params: { nomCategoria: 'cámaras' },
      }"
      >Cámaras
    </router-link>
    <router-link
      :to="{
        name: 'categoria',
        params: { nomCategoria: 'audio' },
      }"
      >Audio
    </router-link>
    <router-link
      :to="{
        name: 'categoria',
        params: { nomCategoria: 'videojuegos' },
      }"
      >Videojuegos
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
