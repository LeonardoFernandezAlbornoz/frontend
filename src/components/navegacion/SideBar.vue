<script>
export default {
  emits: ['closeSidebar'],
  props: ['categorias', 'active'],
};
</script>
<template>
  <div>
    <div class="sidebar" :class="{ 'sidebar-activo': active }">
      <div class="sidebar-content">
        <div v-for="categoria in categorias" class="sidebar-section">
          <a :href="/categoria/ + categoria.descripcion">
            {{
              categoria.descripcion.charAt(0).toUpperCase() +
              categoria.descripcion.slice(1)
            }}
          </a>
        </div>
      </div>
    </div>
    <div :class="{ 'overlay-activo': active }" class="overlay"></div>
  </div>
</template>

<style>
.sidebar-activo {
  transform: translateX(1000px);
}
.overlay-activo {
  visibility: visible !important;
}
.sidebar {
  padding: 18px;
  position: fixed;
  top: 0;
  position: absolute;
  left: -1000px;
  width: 350px;
  height: 85vh;
  z-index: 200;
  background-color: white;
  overflow: scroll;
  transition: all 0.3s ease;
}
.sidebar-content a {
  color: var(--color-fondo-seccion);
  text-decoration: none;
}

.sidebar-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: var(--gris-claro) 2px solid;
}
.sidebar-exit {
  border: none;
  background: transparent;
  font-size: 30px;
}

.overlay {
  top: 0;
  right: 0;
  visibility: hidden;
  position: absolute;
  width: 100vw; /* fallback for older browsers */
  width: 98;

  border: 3px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
}
</style>
