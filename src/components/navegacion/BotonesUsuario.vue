<script>
export default {};
</script>

<template>
  <button
    class="d-lg-block d-none btn-acceder"
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

  <button
    type="button"
    data-bs-toggle="popover"
    data-bs-title="Popover title"
    data-bs-content="And here's some amazing content. It's very engaging. Right?"
    class="btns-usuario-collapse d-block d-lg-none"
  >
    <font-awesome-icon :icon="['fas', 'user']" style="color: #ffffff" />
  </button>
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
}
.btns-usuario-collapse {
  font-size: 25px;
  background: none;
  border: none;
}

@media screen and (max-width: 576px) {
  .btns-usuario-collapse {
    font-size: 20px;
  }
}
.btn-acceder {
  background: linear-gradient(
    135deg,
    rgba(242, 101, 56, 1) 31%,
    rgba(245, 143, 29, 1) 79%
  );
  transition: opacity 0.3s ease;
}

.btn-acceder:hover {
  opacity: 90%;
}

.btn-registrarse {
  background-color: black;
  transition: opacity 0.3s ease;
}
.btn-registrarse:hover {
  opacity: 90%;
}
</style>
