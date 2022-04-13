<template>
  <c-box as="header" class="ff-header">
    <div class="ff-header__logo">FrontendFeedz</div>
    <FfNavbar />
  </c-box>
</template>

<script lang="js">
import FfNavbar from "./FfNavbar.vue";
export default {
    components: { FfNavbar },
}
</script>

<style lang="scss" scoped>
.ff-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: var(--header-height-sm);
  background: darkslateblue;
  color: #fff;
  padding: 0 1em;
  box-shadow: var(--box-shadow-light);
  &__logo {
    font-size: 1.2em;
    font-weight: 600;
  }
}
</style>