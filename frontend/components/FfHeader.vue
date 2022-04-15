<template>
  <c-box as="header" class="ff-header">
    <div class="ff-header__logo">
      <nuxt-link to="/"
        ><span class="ff-header__logo--f">F</span>rontend<span
          class="ff-header__logo--f"
          >F</span
        >eedz</nuxt-link
      >
    </div>
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
  min-height: var(--header-height-sm);
  background: darkslateblue;
  color: #fff;
  padding: 0.3em 1em;
  box-shadow: var(--box-shadow-light);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    text-transform: uppercase;
    font-size: 1.2em;
    font-weight: 600;
    font-style: italic;
    &--f {
      font-size: 1.4em;
      color: lightgreen;
    }
  }
}
</style>