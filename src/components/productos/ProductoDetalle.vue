<script>
import Estrellas from '../generales/Estrellas.vue';
export default {
  props: ['nomProducto'],
  data() {
    return {
      producto: {},
      resenhas: [],
    };
  },
  components: {
    Estrellas,
  },

  mounted() {
    fetch('http://localhost:8000/producto/' + this.nomProducto)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.producto = data;

        return data;
      })
      .then((data) => {
        fetch('http://localhost:8000/resenhas/' + data.id)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }

            return response.json();
          })
          .then((data) => {
            this.resenhas = data;
          })
          .catch((error) => {
            console.log(`Error al obtener los datos: ${error}`);
          });
      })
      .catch((error) => {
        console.log(`Error al obtener los datos: ${error}`);
      });
  },
  computed: {
    numResenhas() {
      return this.resenhas.length;
    },

    mediaValoraciones() {
      return (
        this.resenhas.reduce((total, resenha) => {
          return (total += resenha.valoracion);
        }, 0) / this.numResenhas
      );
    },
  },
};
</script>
<template>
  <div class="producto-detalle p-5">
    <h4 class="producto-detalle-nombre mb-4">{{ producto.nombre }}</h4>
    <div class="producto-detalle-precio mb-3">
      <p v-if="producto.descuento !== 0" class="mb-2 producto-precio-descuento">
        {{ producto.precio }}€
      </p>
      <p
        class="producto-detalle-precio-final"
        :class="{ oferta: producto.descuento != 0 }"
      >
        {{
          (
            producto.precio -
            (producto.precio / 100) * producto.descuento
          ).toFixed(2) + '€'
        }}
      </p>
    </div>

    <Estrellas
      class="my-4"
      :numResenhas="numResenhas"
      :mediaValoraciones="mediaValoraciones"
    />
    <p class="my-4"><b>Detalles: </b>{{ producto.descripcion }}</p>
    <div v-if="producto.stock > 0" class="my-4 row">
      <div class="col-auto">
        <label class="col-form-label"><b>Cantidad: </b> </label>
      </div>
      <div class="col-auto">
        <input
          class="form-control"
          id="cantidad"
          type="number"
          value="1"
          min="1"
          :max="producto.stock"
        />
      </div>
    </div>
    <button v-if="producto.stock > 0" class="btn-anhadir-carrito my-4">
      Añadir al carrito
    </button>
    <p v-if="producto.stock == 0" class="aviso-no-disponible text-danger">
      Este producto no está disponible
    </p>
  </div>
</template>

<style scoped>
.producto-detalle {
  background-color: white;
  box-shadow: var(--sombra-cajas);
  height: 500px;
}

.producto-detalle-precio-final {
  font-weight: bold;
  font-size: 23px;
  margin: 0;
}

.producto-precio-descuento {
  margin: 0;
  text-decoration: line-through;
}
.oferta {
  color: var(--color-secundario-naranja);
}

.btn-anhadir-carrito {
  width: 100%;
  border: none;
  background: linear-gradient(
    135deg,
    rgba(242, 101, 56, 1) 31%,
    rgba(245, 143, 29, 1) 79%
  );
  color: white;
  padding: 0.7em;
  font-size: 18px;
}

.aviso-no-disponible {
  margin: 0;
  text-align: center;
  margin-top: 3em;
  font-weight: bold;
  font-size: 22px;
}
</style>
