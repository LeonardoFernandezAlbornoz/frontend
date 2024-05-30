<script></script>
<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner position-relative">
      <div class="carousel-item active">
        <img src="/img/img-carrusel.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="/img/tienda-carrusel.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img src="/img/teclado-banner.jpg" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
    >
      <span
        class="flecha-carrusel izquierda d-flex justify-content-center align-items-center"
        aria-hidden="true"
      >
        <font-awesome-icon
          :icon="['fass', 'arrow-left']"
          style="color: #ffffff"
        />
      </span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next"
    >
      <span
        class="flecha-carrusel derecha d-flex justify-content-center align-items-center"
        aria-hidden="true"
      >
        <font-awesome-icon
          :icon="['fass', 'arrow-right']"
          style="color: #ffffff"
        />
      </span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
.carousel,
.carousel-item,
.carousel-control-next {
  min-height: 320px;
  height: 36vw;
}

.carousel-item img {
  object-fit: cover;
  top: 0;
  left: 0;
  min-height: 320px;
  height: 36vw;
}

.carousel-control-next-button {
  background: none;
  border-width: 2px 0px 2px 2px;
  border-style: solid;
  border-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0px;
  position: absolute;
  width: 70px;
  height: 70px;
  font-size: 24px;
}
.carousel-indicators button {
  border-radius: 50%;
  width: 11px;
  height: 11px;
}

.carousel-indicators button.active {
  background-color: var(--color-secundario-naranja);
}
.carousel-control-prev {
  justify-content: left;
}

.carousel-control-next {
  justify-content: right;
}
.flecha-carrusel {
  background-color: var(--color-secundario-naranja);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 24px;
}

.izquierda {
  margin-left: 20px;
}

.derecha {
  margin-right: 20px;
}
</style>
