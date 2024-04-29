<script>
import { notify } from "@kyvg/vue3-notification";
import { Notivue, Notification, push } from "notivue";
export default {
  data() {
    return {
      nomUsuario: "",
      nombre: "",
      apellidos: "",
      correo: "",
      contrasenha: "",
      error: "",
    };
  },

  methods: {
    registrarse() {
      fetch("http://localhost:8000/usuario/crear", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nomUsuario: this.nomUsuario,
          nombre: this.nombre,
          apellidos: this.apellidos,
          correo: this.correo,
          contrasenha: this.contrasenha,
          admin: 0,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((error) => {
              throw new Error(error.error);
            });
          }
          return response.json();
        })
        .then((response) => {
          console.log(response.message);
        })
        .catch((error) => {
          push.error({ title: "Error", message: `${error}` });
        });
    },
  },
};
</script>
<template>
  <div class="modal fade" id="registrarseModal" tabindex="-1">
    <div class="modal-dialog modal-lg rounded-0">
      <div class="modal-content">
        <div class="modal-header border-0 d-block">
          <div class="text-end">
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn-close"
            ></button>
          </div>
          <h1 class="modal-title fs-5 text-center">Regístrate</h1>
        </div>
        <div class="modal-body px-5">
          <div v-if="error" class="alert alert-danger text-center" role="alert">
            {{ error }}
          </div>
          <form @submit.prevent="registrarse">
            <div class="row">
              <div class="mb-3">
                <label for="signup-usuario" class="form-label"
                  >Nombre de usuario:</label
                >
                <input
                  v-model="nomUsuario"
                  required
                  type="text"
                  class="form-control form-control"
                  id="signup-usuario"
                />
              </div>
              <div class="mb-3 col-lg-6">
                <label for="signup-nombre" class="form-label">Nombre:</label>
                <input
                  v-model="nombre"
                  required
                  type="text"
                  class="form-control form-control"
                  id="signup-nombre"
                />
              </div>
              <div class="mb-3 col-lg-6">
                <label for="signup-apellidos" class="form-label"
                  >Apellidos:</label
                >
                <input
                  v-model="apellidos"
                  required
                  type="text"
                  class="form-control form-control"
                  id="signup-apellidos"
                />
              </div>
              <div class="mb-3 col-lg-6">
                <label for="signup-correo" class="form-label"
                  >Correo electrónico:</label
                >

                <input
                  v-model="correo"
                  required
                  type="email"
                  class="form-control form-control"
                  id="signup-correo"
                />
              </div>
              <div class="mb-3 col-lg-6">
                <label for="signup-contrasenha" class="form-label"
                  >Contraseña:</label
                >
                <input
                  v-model="contrasenha"
                  required
                  type="password"
                  class="form-control form-control"
                  id="signup-contrasenha"
                />
              </div>
            </div>
            <button type="submit" class="btn-registro mb-3 w-100 mt-3">
              Registrarse
            </button>
          </form>

          <div class="separador mb-3">O regístrate con</div>

          <div class="w-50 mx-auto mb-3 d-flex justify-content-evenly">
            <img src="/img/redes/google.png" alt="google-logo" />
            <img src="/img/redes/facebook.png" alt="google-logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Notivue class="notificaciones" v-slot="item">
    <Notification :item="item" />
  </Notivue>
</template>
<style scoped>
.btn-registro {
  background: linear-gradient(
    135deg,
    rgba(242, 101, 56, 1) 31%,
    rgba(245, 143, 29, 1) 79%
  );
  border: 0;
  height: 2.7em;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: opacity 0.3s ease;
}

.btn-registro:hover {
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
  content: "";
  padding: 0.3px;
  background-color: var(--gris-claro);
  margin: 10px;
}

#registrarseModal .modal-title {
  font-size: 28px !important;
}

#registrarseModal input {
  border-radius: 0px;
}

#registrarseModal .modal-content {
  border-radius: 0px !important;
}
</style>
