<script>
export default {};
</script>
<template>
  <div class="d-lg-flex column-gap-3 justify-content-center d-none">
    <button
      class="btn-acceder"
      data-bs-toggle="modal"
      data-bs-target="#iniciarSesionModal"
    >
      <font-awesome-icon
        :icon="['fas', 'arrow-right-to-bracket']"
        style="color: #ffffff"
      />
      Acceder
    </button>
    <button
      class="d-lg-block d-none btn-registrarse"
      data-bs-toggle="modal"
      data-bs-target="#registrarseModal"
    >
      <font-awesome-icon :icon="['fas', 'user']" style="color: #ffffff" />
      Registrarse
    </button>
  </div>
</template>

<style scoped>
.btn-acceder,
.btn-registrarse {
  width: 123px;
  height: 38px;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  font-size: 16px;
  background-color: black;
  transition: all 0.3s ease;
}

.btn-acceder {
  background: linear-gradient(
    135deg,
    rgba(242, 101, 56, 1) 31%,
    rgba(245, 143, 29, 1) 79%
  );
}

.btn-acceder:hover {
  filter: brightness(105%);
}

.btn-registrarse:hover {
  background-color: gray;
}
</style>
