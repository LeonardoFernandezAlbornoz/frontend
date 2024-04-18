<script>
export default {
  props: ['numResenhas', 'mediaValoraciones'],
};
</script>
<template>
  <div class="d-flex align-items-center">
    <div class="ratings">
      <font-awesome-icon
        icon="fa-solid fa-star"
        :class="{ 'rating-color': Math.round(mediaValoraciones) >= 1 }"
      />
      <font-awesome-icon
        icon="fa-solid fa-star"
        :class="{ 'rating-color': Math.round(mediaValoraciones) >= 2 }"
      />
      <font-awesome-icon
        icon="fa-solid fa-star"
        :class="{ 'rating-color': Math.round(mediaValoraciones) >= 3 }"
      />
      <font-awesome-icon
        icon="fa-solid fa-star"
        :class="{ 'rating-color': Math.round(mediaValoraciones) >= 4 }"
      />
      <font-awesome-icon
        icon="fa-solid fa-star"
        :class="{ 'rating-color': Math.round(mediaValoraciones) >= 5 }"
      />
    </div>
    <span>({{ numResenhas }})</span>
  </div>
</template>

<style scoped>
.ratings {
  margin-right: 10px;
}

.ratings > * {
  color: #cecece;
  font-size: 16px;
}

.rating-color {
  color: #fbc634 !important;
}

.review-count {
  font-weight: 400;
  margin-bottom: 2px;
  font-size: 24px !important;
}

.small-ratings > * {
  color: #cecece;
}

.review-stat {
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 2px;
}
</style>
