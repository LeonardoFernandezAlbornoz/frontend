<template>
  <footer class="mt-5">
    <div class="container-lg">
      <div class="row gy-4">
        <div class="footer-col col-6 col-sm">
          <h5>Información</h5>
          <a href="#">Sobre Nosotros</a>
          <a href="#">Contacto</a>
          <a href="#">Política de privacidad</a>
        </div>

        <div class="footer-col col-6 col-sm">
          <h5>Categorías</h5>
          <router-link
            :to="{ name: 'categoria', params: { nomCategoria: 'Ordenadores' } }"
            >Ordenadores</router-link
          >
          <router-link
            :to="{
              name: 'categoria',
              params: { nomCategoria: 'Smartphones' },
            }"
            >Smartphones</router-link
          >
          <router-link
            :to="{
              name: 'categoria',
              params: { nomCategoria: 'Televisores' },
            }"
            >Televisores</router-link
          >
          <router-link
            :to="{
              name: 'categoria',
              params: { nomCategoria: 'Componentes' },
            }"
            >Componentes</router-link
          >
        </div>

        <div class="footer-col col-6 col-sm">
          <h5>Síguenos</h5>
          <div class="redes">
            <a href="#"><font-awesome-icon icon="fa-brands fa-x-twitter" /></a>
            <a href="#"><font-awesome-icon icon="fa-brands fa-whatsapp" /></a>
            <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
.footer-col {
  display: flex;
  flex-direction: column;
  justify-content: justify-space-evenly;
  row-gap: 0.5em;
}

footer {
  background-color: var(--gris-oscuro);
  color: white;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  margin-top: auto;
}

footer a {
  color: white;
}
.redes {
  font-size: 25px;
  display: flex;
  column-gap: 1em;
}
h5 {
  padding-left: 0.5em;
  border-left: solid 3px var(--color-secundario-naranja);
}
</style>
