<template>
  <div>
    <hr />
    <h5 class="mb-4">Déjanos tu opinión sobre este producto:</h5>
    <form class="form-resenha position-relative">
      <div class="mb-3">
        <label for="valoracion" class="form-label">Valoración: </label>
      </div>
      <div class="mb-3">
        <label for="comentarios" class="form-label">Comentarios: </label>
        <textarea
          class="form-control"
          name="comentarios"
          id="comentarios"
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div class="d-flex justify-content-end">
        <button type="submit">Enviar</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style>
.contenedor-resenhas form {
  max-width: 700px;
}

.form-resenha button {
  border: none;
  width: 95px;
  height: 40px;
  border-radius: 7px;
  background-color: var(--color-secundario-naranja);
  color: white;
  transition: opacity ease 0.3s;
}
.form-resenha button:hover {
  opacity: 85%;
}
</style>
