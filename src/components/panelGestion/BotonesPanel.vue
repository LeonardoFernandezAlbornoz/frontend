<script>
export default {};
</script>
<template>
  <div class="row g-5 px-5 px-md-0">
    <div class="col-md">
      <div class="btn-gestion row">
        <div class="col d-flex justify-content-center align-items-center">
          <p>Gestionar inventario</p>
        </div>
        <div class="col text-center">
          <font-awesome-icon :icon="['fas', 'clipboard']" />
        </div>
      </div>
    </div>
    <div class="col-md">
      <div class="btn-gestion row">
        <div class="col d-flex justify-content-center align-items-center">
          <p>Gestionar usuarios</p>
        </div>
        <div class="col text-center">
          <font-awesome-icon :icon="['fas', 'user']" />
        </div>
      </div>
    </div>
    <div class="col-md">
      <div class="btn-gestion row">
        <div class="col d-flex justify-content-center align-items-center">
          <p>Gestionar pedidos</p>
        </div>
        <div class="col text-center">
          <font-awesome-icon :icon="['fas', 'box']" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-gestion {
  padding: 1.5em;

  position: relative;
  background: var(--degradado-naranja);
}

.btn-gestion p {
  color: white;
  text-align: center;
  margin: 0;

  font-size: 25px;
}

.btn-gestion .svg-inline--fa {
  color: white;

  font-size: 75px;
}
</style>
