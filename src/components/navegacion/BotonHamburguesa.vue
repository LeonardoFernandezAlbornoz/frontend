<script>
export default {
  props: ['sidebarActive'],
};
</script>

<template lang="">
  <button
    class="hamburger hamburger--vortex p-0"
    :class="{ 'is-active': sidebarActive }"
    type="button"
    @click="$emit('toggleSidebar')"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<style>
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after,
.hamburger .hamburger-inner,
.hamburger .hamburger-inner::before,
.hamburger .hamburger-inner::after {
  background-color: #ffffff;
  width: 25px;
  height: 3px;
  margin: 0;
}
</style>
