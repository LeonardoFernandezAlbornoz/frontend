<script>
export default {};
</script>
<template>
  <div class="row">
    <div class="col-2">
      <img width="90px" src="/public/img/productos/airpods_pro.jpg" alt="" />
    </div>
    <div class="col-5 d-flex align-items-center">
      <p class="m-0">Auriculares inalámbricos Apple AirPods Pro</p>
    </div>
    <div
      class="col-4 d-flex align-items-center flex-column justify-content-center"
    >
      <p class="m-0 precio-original">144.33€</p>
      <p class="m-0 precio-descuento"><b>144.33€</b></p>
    </div>
    <div class="col-1 cantidad d-flex align-items-center">X2</div>
  </div>
</template>

<style scoped>
.precio-descuento {
  color: var(--color-secundario-naranja);
  font-size: 18px;
}
.precio-original {
  text-decoration: line-through;
  font-size: 13px;
}
.cantidad {
  font-size: 20px;
}
</style>
