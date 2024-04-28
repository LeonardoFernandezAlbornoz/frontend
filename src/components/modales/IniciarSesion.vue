<script>
export default {};
</script>
<template>
  <div
    class="modal fade"
    id="iniciarSesionModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog rounded-0">
      <div class="modal-content">
        <div class="modal-header border-0 d-block">
          <div class="text-end">
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn-close"
            ></button>
          </div>
          <h1 class="modal-title fs-5 text-center">Iniciar Sesión</h1>
        </div>
        <div class="modal-body px-5">
          <form>
            <div class="mb-3">
              <label for="login-correo" class="form-label"
                >Correo electrónico:</label
              >
              <input
                type="email"
                class="form-control-lg form-control"
                id="login-correo"
              />
            </div>
            <div class="mb-3">
              <label for="login-contrasenha" class="form-label"
                >Contraseña:</label
              >
              <input
                type="password"
                class="form-control-lg form-control"
                id="login-contrasenha"
              />
            </div>
            <div class="text-center">
              <a href="#"><b>¿Has olvidado tu contraseña?</b></a>
            </div>

            <button type="button" class="btn-acceder mb-3 w-100 mt-3">
              Acceder
            </button>
          </form>

          <div class="separador mb-3">O conéctate con</div>

          <div class="w-50 mx-auto mb-3 d-flex justify-content-evenly">
            <img src="/img/redes/google.png" alt="google-logo" />
            <img src="/img/redes/facebook.png" alt="google-logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn-acceder {
  background-color: var(--gris-oscuro);
  border: 0;
  height: 2.7em;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: opacity 0.3s ease;
}

.btn-acceder:hover {
  opacity: 85%;
}

.separador {
  display: flex;
  font-size: 15px;
  align-items: center;
  color: var(--gris);
}

.separador::before,
.separador::after {
  flex: 1;
  content: '';
  padding: 0.3px;
  background-color: var(--gris-claro);
  margin: 10px;
}
#iniciarSesionModal {
  color: var(--gris-oscuro);
}
#iniciarSesionModal .modal-title {
  font-size: 28px !important;
}

#iniciarSesionModal input {
  border-radius: 0px;
}

#iniciarSesionModal .modal-content {
  border-radius: 0px !important;
}
</style>
