<template>
  <c-menu>
    <c-menu-button right-icon="chevron-down"> Menu </c-menu-button>
    <c-menu-list v-if="!isAuthenticated">
      <c-menu-item class="ff-menu__item"
        ><nuxt-link to="/">Home</nuxt-link></c-menu-item
      >
      <c-menu-item class="ff-menu__item"
        ><nuxt-link to="/register">Register</nuxt-link></c-menu-item
      >
      <c-menu-item class="ff-menu__item"
        ><nuxt-link to="/login">Login</nuxt-link></c-menu-item
      >
    </c-menu-list>

    <c-menu-list v-if="isAuthenticated">
        <c-menu-item><nuxt-link to="/profile">My Profile</nuxt-link></c-menu-item>
        <c-menu-item><button @click="logout">Logout</button></c-menu-item>
    </c-menu-list>
  </c-menu>
</template>

<script lang="js">
import { mapGetters } from "vuex";

export default {
 computed: {
 ...mapGetters(["isAuthenticated", "loggedInUser"]),
 },
 methods: {
async logout() {
   await this.$auth.logout()
 }
 }
};
</script>

<style lang="scss">
.ff-menu__item {
  color: black;
}
</style>