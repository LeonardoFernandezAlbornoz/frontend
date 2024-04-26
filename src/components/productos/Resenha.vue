<script>
import Estrellas from "../generales/Estrellas.vue";

export default {
  props: ["resenhaProp"],

  components: {
    Estrellas,
  },
};
</script>
<template>
  <div>
    <p class="resenha-usuario">
      <b>{{ resenhaProp.usuario.nombre }}</b>
    </p>
    <Estrellas :mediaValoraciones="resenhaProp.valoracion" />
    <p class="resenha-opinion">
      {{ resenhaProp.opinion }}
    </p>
  </div>
</template>

<style></style>
