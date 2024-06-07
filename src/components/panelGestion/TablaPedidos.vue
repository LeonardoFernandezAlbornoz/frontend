<script>
import { jwtDecode } from 'https://unpkg.com/jwt-decode@4.0.0?module';
import { push } from 'notivue';
export default {
  data() {
    return {
      token: '',
      pedidos: [],
      filtro: '',
    };
  },

  mounted() {
    this.token = this.$cookies.get('token');
    this.cargarPedidos();
  },
  computed: {
    usuario() {
      return this.token ? jwtDecode(this.token) : '';
    },
    pedidosFiltrados() {
      return this.pedidos.filter((pedido) => {
        return (
          pedido.usuario.nomUsuario
            .toUpperCase()
            .includes(this.filtro.toUpperCase()) ||
          (pedido.usuario.nombre + ' ' + pedido.usuario.apellidos)
            .toUpperCase()
            .includes(this.filtro.toUpperCase())
        );
      });
    },
  },
  methods: {
    cargarPedidos() {
      fetch(this.backend + '/pedidos', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.status);
          }

          return response.json();
        })
        .then((data) => {
          this.pedidos = data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    modificarEstado(e) {
      fetch(this.backend + '/pedidos/modificar-estado/' + e.target.dataset.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.token,
        },
        body: JSON.stringify({
          estado: e.target.value,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          this.cargarPedidos();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<template>
  <div class="row mb-4">
    <div class="order-2 order-md-1 col-md-6 col-lg-5 d-flex align-items-center">
      <input
        v-model="filtro"
        type="text"
        class="form-control"
        placeholder="Buscar por usuario"
      />
    </div>
  </div>
  <div class="table-responsive">
    <table class="table table-secondary table-striped">
      <thead class="table-dark">
        <tr>
          <th class="text-center">ID</th>
          <th>Usuario</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Fecha</th>
          <th>Estado</th>
          <th class="text-center">Gastos envío</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pedido in pedidosFiltrados" :key="pedido.id">
          <td class="text-center">{{ pedido.id }}</td>

          <td>
            {{ pedido.usuario.nomUsuario }}
          </td>
          <td>
            {{ pedido.usuario.nombre }}
          </td>
          <td>
            {{ pedido.usuario.apellidos }}
          </td>
          <td>
            {{ new Date(pedido.fecha).toLocaleDateString() }}
          </td>
          <td>
            <select
              @change="modificarEstado"
              :data-id="pedido.id"
              name="estado"
              id="estado"
              class="form-select"
            >
              <option :selected="pedido.estado == 'Enviado'" value="Enviado">
                Enviado
              </option>
              <option
                :selected="pedido.estado == 'Entregado'"
                value="Entregado"
              >
                Entregado
              </option>
              <option
                :selected="pedido.estado == 'Pendiente'"
                value="Pendiente"
              >
                Pendiente
              </option>
            </select>
          </td>
          <td class="text-center">{{ pedido.gastosEnvio }}€</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
th,
td {
  padding: 1em;
}

tr {
  vertical-align: middle;
}
</style>
