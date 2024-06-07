<script>
export default {};
</script>
<template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/img/banners/nvidia.jpg" class="d-block w-100" alt="img1" />
      </div>
      <div class="carousel-item">
        <img src="/img/banners/airpods.jpg" class="d-block w-100" alt="img2" />
      </div>
      <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="img3" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style>
.carousel-item img {
  height: 100%; /* Bootstrap handles width already */
  object-fit: cover; /* or 'contain' if you want stretch instead of crop */
}
</style>
