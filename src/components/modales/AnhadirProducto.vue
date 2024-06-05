<script>

export default {
  emits: ['anhadirProductos'],
  data() {
    return {
      categorias: [],
      stock: 1,
      precio: 1.0,
      categoria: '',
      descuento: 0,
      imagen: '',
      nomProducto: '',
    };
  },

  methods: {
    cargarCategorias() {
      fetch(this.backend + '/categorias')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error:${response.status}`);
          }
          return response;
        })
        .then((response) => response.json())
        .then((data) => {
          this.categorias = data;
        })
        .catch((error) => {
          console.error(`Error al obtener los datos: ${error}`);
        });
    },

    imagenProducto() {
      this.imagen = this.$refs.imgproducto.files[0];
    },

    reiniciar() {
      this.stock = 1;
      this.precio = 1.0;
      this.categoria = '';
      this.descuento = 0;
      this.imagen = '';
      this.nomProducto = '';
    },
  },

  mounted() {
    this.cargarCategorias();
  },

  computed: {
    urlImagenTemporal() {
      return this.imagen ? URL.createObjectURL(this.imagen) : '';
    },
  },
};
</script>
<template>
  <div class="modal fade" id="anhadirProductoModal" tabindex="-1">
    <div class="modal-dialog modal-lg rounded-0">
      <div class="modal-content">
        <div class="modal-header border-0 d-block">
          <div class="text-end">
            <button
              id="btn-cerrar-registro"
              type="button"
              @click="reiniciar"
              data-bs-dismiss="modal"
              class="btn-close"
            ></button>
          </div>
          <h1 class="modal-title fs-5 text-center">Añadir Producto</h1>
        </div>
        <div class="modal-body px-4 px-sm-5">
          <div v-if="error" class="alert alert-danger text-center" role="alert">
            {{ error }}
          </div>
          <form
            @submit.prevent="
              $emit(
                'anhadirProducto',
                nomProducto,
                categoria,
                precio,
                stock,
                descuento,
                imagen,
                producto
              )
            "
          >
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="nombre-producto" class="form-label"
                    >Nombre del producto:</label
                  >
                  <input
                    v-model="nomProducto"
                    required
                    type="text"
                    class="form-control form-control"
                    id="nombre-producto"
                  />
                </div>
                <div class="mb-3">
                  <label for="categoria-producto" class="form-label"
                    >Categoría:</label
                  >
                  <select
                    v-model="categoria"
                    class="form-select"
                    name="categoria-producto"
                    id="categoria-producto"
                  >
                    <option value="" selected disabled>
                      --Selecciona una categoria--
                    </option>
                    <option
                      v-for="categoria in categorias"
                      :key="categoria.id"
                      :value="categoria.id"
                    >
                      {{
                        categoria.descripcion.charAt(0).toUpperCase() +
                        categoria.descripcion.slice(1)
                      }}
                    </option>
                  </select>
                </div>
                <div class="mb-3 row">
                  <div class="col">
                    <label for="stock" class="form-label d-block">Stock:</label>
                    <input
                      v-model="stock"
                      required
                      min="1"
                      type="number"
                      class="form-control w-75 d-inline-block"
                      id="stock"
                    />

                    <span class="w-25"> u.</span>
                  </div>
                  <div class="col">
                    <label for="precio" class="form-label d-block"
                      >Precio:</label
                    >
                    <input
                      v-model="precio"
                      required
                      min="1"
                      type="number"
                      class="form-control w-75 d-inline-block"
                      id="precio"
                    />
                    <span class="w-25 ms-2"> €</span>
                  </div>
                  <div class="col">
                    <label for="descuento" class="form-label d-block"
                      >Descuento:</label
                    >
                    <input
                      v-model="descuento"
                      required
                      min="0"
                      max="100"
                      type="number"
                      class="form-control w-75 d-inline-block"
                      id="descuento"
                    />
                    <span class="w-25 ms-2"> %</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="imagen-producto" class="form-label"
                    >Imagen:</label
                  >
                  <input
                    @change="imagenProducto"
                    required
                    type="file"
                    id="imagen-producto"
                    ref="imgproducto"
                    class="form-control"
                  />
                  <div class="text-center img-prov mt-4">
                    <img
                      class="object-fit-contain h-100 w-100"
                      v-if="urlImagenTemporal"
                      :src="urlImagenTemporal"
                      alt="img-prov"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" class="btn-registro mb-3 w-100 mt-2">
              Añadir
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn-registro {
  background: var(--degradado-naranja);
  border: 0;
  height: 2.7em;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: filter 0.2s ease;
}

.btn-registro:hover {
  filter: brightness(110%);
}

#anhadirProductoModal .modal-title {
  font-size: 28px !important;
}

#anhadirProductoModal input,
#anhadirProductoModal select {
  border-radius: 0px;
}

#anhadirProductoModal .modal-content {
  border-radius: 0px !important;
}
.img-prov {
  height: 200px;
}
</style>
